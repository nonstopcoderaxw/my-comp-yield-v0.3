pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import "../../../cLibs/contracts/0.5.0/methods/Compound/CompoundMethods.sol";
import "../../../cLibs/contracts/0.5.0/utils/ArrayUtil.sol";

import "../../../cLibs/contracts/0.5.0/utils/Logging.sol";

contract CompFarmingSummaryV3Model is CompoundMethods, ArrayUtil{
    uint256 constant public MAX_INT_NUMBER = 115792089237316195423570985008687907853269984665640564039457584007913129639935;

    enum LiquidationRiskRanking{
        ZERO_RISK,
        INTEREST_RISK_ONLY,
        PRICE_MOVEMENT_RISK
    }

    struct CompProfile{
         uint balance;
         uint yetToClaimed;
    }

    struct AccountInterestProfile{
        CTokenInterest[] supplyInterests;
        CTokenInterest[] borrowInterests;

        uint totalInterestInUSD_;
        bool isPositiveInterest_;
    }

    struct CTokenInterest{
        address cTokenAddr;
        uint interestRateMantissa;
        uint balance;
        uint numberOfBlocks;

        string underlyingSymbol_;
        uint interestInUSD_;
    }

    struct AccountProfile{
        SupplyAsset[] suppliedAssets;
        BorrowAsset[] borrowedAssets;

        uint totalSuppliedInUSD_;
        uint totalBorrowedInUSD_;
        uint totalSuppliedInUsdAsCollateral_;
        uint borrowLimitPCTMantissa_;
        uint accountCapital_;

        uint[] borrowLimitPCTLineItemMantissaList;
    }

    struct SupplyAsset{
        Asset asset;

        uint collateralFactorMantissa_;
        uint suppliedInUsdAsCollateral_;
    }

    struct BorrowAsset{
        Asset asset;
    }

    struct Asset{
        address cTokenAddr;
        uint amount;

        string underlyingSymbol_;
        uint underlyingDecimals_;
        uint valueInUSD_;
        uint compSpeed_;
    }

    function createCTokenInterest(address cTokenAddr, uint interestRateMantissa, uint balance, uint numberOfBlocks) internal view returns(CTokenInterest memory cTokenInterest){
        cTokenInterest.cTokenAddr = cTokenAddr;
        cTokenInterest.interestRateMantissa = interestRateMantissa;
        cTokenInterest.balance = balance;
        cTokenInterest.numberOfBlocks = numberOfBlocks;

        refreshCTokenInterest(cTokenInterest);

        return cTokenInterest;
    }

    function refreshCTokenInterest(CTokenInterest memory cTokenInterest) internal view{
        cTokenInterest.underlyingSymbol_ = cmp_getUnderlyingSymbol(cTokenInterest.cTokenAddr);
        cTokenInterest.interestInUSD_ = cmp_underlyingValueInUSD(cTokenInterest.balance.mul(cTokenInterest.interestRateMantissa), cTokenInterest.cTokenAddr).mul(cTokenInterest.numberOfBlocks).div(oneMantissa);
    }

    function createAccountInterestProfile(CTokenInterest[] memory supplyInterests, CTokenInterest[] memory borrowInterests) internal pure returns(AccountInterestProfile memory accountInterestProfile){
        accountInterestProfile.supplyInterests = supplyInterests;
        accountInterestProfile.borrowInterests = borrowInterests;

        refreshAccountInterestProfile(accountInterestProfile);

        return accountInterestProfile;
    }

    function refreshAccountInterestProfile(AccountInterestProfile memory accountInterestProfile) internal pure {
        uint totalSupplyInterestInUSD;
        uint totalBorrowInterestInUSD;

        for(uint i = 0; i < accountInterestProfile.supplyInterests.length; i++){
            totalSupplyInterestInUSD += accountInterestProfile.supplyInterests[i].interestInUSD_;
        }

        for(uint i = 0; i < accountInterestProfile.borrowInterests.length; i++){
            totalBorrowInterestInUSD += accountInterestProfile.borrowInterests[i].interestInUSD_;
        }

        if(totalSupplyInterestInUSD > totalBorrowInterestInUSD){
            accountInterestProfile.totalInterestInUSD_ = totalSupplyInterestInUSD.sub(totalBorrowInterestInUSD);
            accountInterestProfile.isPositiveInterest_ = true;
        }

        if(totalSupplyInterestInUSD <= totalBorrowInterestInUSD){
            accountInterestProfile.totalInterestInUSD_ = totalBorrowInterestInUSD.sub(totalSupplyInterestInUSD);
            accountInterestProfile.isPositiveInterest_ = false;
        }
    }

    function createSupplyAsset(address cTokenAddr, uint amount) internal view returns(SupplyAsset memory supplyAsset){
        Asset memory asset = createAsset(cTokenAddr, amount);
        supplyAsset.asset = asset;

        refreshSupplyAsset(supplyAsset);

        return supplyAsset;
    }

    function createBorrowAsset(address cTokenAddr, uint amount) internal view returns(BorrowAsset memory borrowAsset){
        Asset memory asset = createAsset(cTokenAddr, amount);
        borrowAsset.asset = asset;

        return borrowAsset;
    }

    function updateSupplyAssetAmount(SupplyAsset memory supplyAsset, uint newAmount) internal view{
        supplyAsset.asset.amount = newAmount;

        refreshAsset(supplyAsset.asset);
        refreshSupplyAsset(supplyAsset);
    }

    function updateBorrowAssetAmount(BorrowAsset memory borrowAsset, uint newAmount) internal view{
        borrowAsset.asset.amount = newAmount;

        refreshAsset(borrowAsset.asset);
    }

    function refreshSupplyAsset(SupplyAsset memory supplyAsset) internal view{
        supplyAsset.collateralFactorMantissa_ = cmp_getCollateralFactorMantissa(supplyAsset.asset.cTokenAddr);
        supplyAsset.suppliedInUsdAsCollateral_ = supplyAsset.asset.valueInUSD_.mul(supplyAsset.collateralFactorMantissa_).div(oneMantissa);
    }

    function createAsset(address cTokenAddr, uint amount) internal view returns(Asset memory asset){
        updateAsset(asset, cTokenAddr, amount);

        return asset;
    }

    function updateAsset(Asset memory asset, address cTokenAddr, uint amount) internal view{
        asset.cTokenAddr = cTokenAddr;
        asset.amount = amount;

        refreshAsset(asset);
    }

    function refreshAsset(Asset memory asset) internal view{
        asset.underlyingSymbol_ = cmp_getUnderlyingSymbol(asset.cTokenAddr);
        asset.underlyingDecimals_ = cmp_getUnderlyingDecimals(asset.cTokenAddr);
        asset.valueInUSD_ = cmp_underlyingValueInUSD(asset.amount, asset.cTokenAddr);
        asset.compSpeed_ = cmp_getCompDistSpeedPerBlock(asset.cTokenAddr);
    }

    function createAccountProfile(SupplyAsset[] memory suppliedAssets, BorrowAsset[] memory borrowedAssets) internal pure returns(AccountProfile memory accountProfile){
        accountProfile.suppliedAssets = suppliedAssets;
        accountProfile.borrowedAssets = borrowedAssets;

        refreshAccountProfile(accountProfile);
    }

    function refreshAccountProfile(AccountProfile memory accountProfile) internal pure{
        accountProfile.totalSuppliedInUSD_ = calTotalSuppliedInUSD(accountProfile.suppliedAssets);
        accountProfile.totalBorrowedInUSD_ = calTotalBorrowedInUSD(accountProfile.borrowedAssets);
        accountProfile.totalSuppliedInUsdAsCollateral_ = calTotalSuppliedInUsdAsCollateral(accountProfile.suppliedAssets);
        accountProfile.accountCapital_ = calAccountCapital(accountProfile.totalSuppliedInUSD_, accountProfile.totalBorrowedInUSD_);
        accountProfile.borrowLimitPCTMantissa_ = calBorrowLimitPCTMantissa(accountProfile.totalSuppliedInUsdAsCollateral_, accountProfile.totalBorrowedInUSD_);
        accountProfile.borrowLimitPCTLineItemMantissaList = calBorrowLimitPCTLineItemMantissaList(accountProfile.suppliedAssets, accountProfile.borrowedAssets);
    }

    function calTotalSuppliedInUSD(SupplyAsset[] memory suppliedAssets) internal pure returns(uint totalSuppliedInUSD){
        for(uint i = 0; i < suppliedAssets.length; i++){
            totalSuppliedInUSD += suppliedAssets[i].asset.valueInUSD_;
        }

        return totalSuppliedInUSD;
    }

    function calTotalBorrowedInUSD(BorrowAsset[] memory borrowedAssets) internal pure returns(uint totalBorrowedInUSD){
        for(uint i = 0; i < borrowedAssets.length; i++){
            totalBorrowedInUSD += borrowedAssets[i].asset.valueInUSD_;
        }

        return totalBorrowedInUSD;
    }

    function calTotalSuppliedInUsdAsCollateral(SupplyAsset[] memory suppliedAssets) internal pure returns(uint totalSuppliedInUsdAsCollateral){
        for(uint i = 0; i < suppliedAssets.length; i++){
            totalSuppliedInUsdAsCollateral += suppliedAssets[i].suppliedInUsdAsCollateral_;
        }

        return totalSuppliedInUsdAsCollateral;
    }

    function calBorrowLimitPCTMantissa(uint totalSuppliedInUsdAsCollateral, uint totalBorrowedInUSD) internal pure returns(uint borrowLimitPCTMantissa){
        if(totalSuppliedInUsdAsCollateral == 0) return oneMantissa;

        return totalBorrowedInUSD.mul(oneMantissa).div(totalSuppliedInUsdAsCollateral);
    }

    function calBorrowLimitPCTLineItemMantissaList(SupplyAsset[] memory suppliedAssets, BorrowAsset[] memory borrowedAssets) internal pure returns(uint[] memory borrowLimitPCTLineItemMantissaList){

        borrowLimitPCTLineItemMantissaList = new uint[](suppliedAssets.length);

        bool _hasFound;
        BorrowAsset memory _borrowedAsset;

        for(uint i = 0; i < suppliedAssets.length; i++){
            (_hasFound, _borrowedAsset) = findBorrowedAssetBycTokenAddr(suppliedAssets[i].asset.cTokenAddr, borrowedAssets);

            if(suppliedAssets[i].suppliedInUsdAsCollateral_ == 0){
                borrowLimitPCTLineItemMantissaList[i] = MAX_INT_NUMBER;
            }

            if(!_hasFound){
                borrowLimitPCTLineItemMantissaList[i] = 0;
                continue;
            }

            if(suppliedAssets[i].suppliedInUsdAsCollateral_ != 0){
                borrowLimitPCTLineItemMantissaList[i] = _borrowedAsset.asset.valueInUSD_.mul(oneMantissa).div(suppliedAssets[i].suppliedInUsdAsCollateral_);
            }

        }

        return borrowLimitPCTLineItemMantissaList;
    }

    function calAccountCapital(uint totalSuppliedInUSD, uint totalBorrowedInUSD) internal pure returns(uint accountCapital){
        if(totalSuppliedInUSD > totalBorrowedInUSD){
            return totalSuppliedInUSD.sub(totalBorrowedInUSD);
        }

        return 0;
    }

    function findBorrowedAssetBycTokenAddr(address cTokenAddr, BorrowAsset[] memory borrowedAssets) internal pure returns(bool hasFound, BorrowAsset memory borrowAsset){
        for(uint i = 0; i < borrowedAssets.length; i++){
            if(borrowedAssets[i].asset.cTokenAddr == cTokenAddr) return (true, borrowedAssets[i]);
        }

        return (false, borrowAsset);
    }

    function addSuppliedAsset(AccountProfile memory accountProfile, SupplyAsset memory supplyAsset) internal view{

        for(uint i = 0; i < accountProfile.suppliedAssets.length; i++){
            if(accountProfile.suppliedAssets[i].asset.cTokenAddr != supplyAsset.asset.cTokenAddr) continue;

            updateSupplyAssetAmount(accountProfile.suppliedAssets[i], accountProfile.suppliedAssets[i].asset.amount.add(supplyAsset.asset.amount));
            refreshAccountProfile(accountProfile);

            return;
        }

        //if not matching existing supplyAsset found
        uint length = accountProfile.suppliedAssets.length.add(1);
        SupplyAsset[] memory newSupplyAsset = new SupplyAsset[](length);

        for(uint i = 0; i < accountProfile.suppliedAssets.length; i++){
            newSupplyAsset[i] = accountProfile.suppliedAssets[i];
        }

        newSupplyAsset[length-1] = supplyAsset;
        accountProfile.suppliedAssets = newSupplyAsset;

        refreshAccountProfile(accountProfile);
    }

    function addBorrowAsset(AccountProfile memory accountProfile, BorrowAsset memory borrowAsset) internal view{
        for(uint i = 0; i < accountProfile.borrowedAssets.length; i++){
            if(accountProfile.borrowedAssets[i].asset.cTokenAddr != borrowAsset.asset.cTokenAddr) continue;

            updateBorrowAssetAmount(accountProfile.borrowedAssets[i], accountProfile.borrowedAssets[i].asset.amount.add(borrowAsset.asset.amount));
            refreshAccountProfile(accountProfile);

            return;
        }

        uint length = accountProfile.borrowedAssets.length.add(1);
        BorrowAsset[] memory newBorrowAssets = new BorrowAsset[](length);

        for(uint i = 0; i < accountProfile.borrowedAssets.length; i++){
            newBorrowAssets[i] = accountProfile.borrowedAssets[i];
        }

        newBorrowAssets[length-1] = borrowAsset;

        accountProfile.borrowedAssets = newBorrowAssets;
        refreshAccountProfile(accountProfile);

    }

    function findSuppliedAsset(address cTokenAddr, SupplyAsset[] memory supplyAssets) internal pure returns(bool hasFound, SupplyAsset memory supplyAsset){
        for(uint i = 0; i < supplyAssets.length; i++){
            if(cTokenAddr == supplyAssets[i].asset.cTokenAddr){
                return (true, supplyAssets[i]);
            }
        }

        return (false, supplyAsset);
    }

    function findBorrowAsset(address cTokenAddr, BorrowAsset[] memory borrowAssets) internal pure returns(bool hasFound, BorrowAsset memory borrowAsset){
        for(uint i = 0; i < borrowAssets.length; i++){
            if(cTokenAddr == borrowAssets[i].asset.cTokenAddr){
                return (true, borrowAssets[i]);
            }
        }

        return (false, borrowAsset);
    }

    function removeEmptySupplyAsset(SupplyAsset[] memory supplyAssets) internal pure returns(SupplyAsset[] memory newSupplyAssets){
        uint length;

        for(uint i = 0; i < supplyAssets.length; i++){
            if(supplyAssets[i].asset.valueInUSD_ == 0) continue;

            length++;
        }

        newSupplyAssets = new SupplyAsset[](length);
        uint index;

        for(uint i = 0; i < supplyAssets.length; i++){
            if(supplyAssets[i].asset.valueInUSD_ == 0) continue;

            newSupplyAssets[index] = supplyAssets[i];
            index++;
        }

        return newSupplyAssets;
    }

    function removeEmptyBorrowAsset(BorrowAsset[] memory borrowAssets) internal pure returns(BorrowAsset[] memory newBorrowAssets){
        uint length;

        for(uint i = 0; i < borrowAssets.length; i++){
            if(borrowAssets[i].asset.valueInUSD_ == 0) continue;

            length++;
        }

        newBorrowAssets = new BorrowAsset[](length);
        uint index;

        for(uint i = 0; i < borrowAssets.length; i++){
            if(borrowAssets[i].asset.valueInUSD_ == 0) continue;

            newBorrowAssets[index] = borrowAssets[i];
            index++;
        }

        return newBorrowAssets;
    }


}
