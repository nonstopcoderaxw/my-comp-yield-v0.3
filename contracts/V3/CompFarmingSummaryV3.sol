pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import "./CompFarmingSummaryV3Model.sol";

contract CompFarmingSummaryV3 is CompFarmingSummaryV3Model{

    string constant public version = "v3";
    uint constant internal n80PCTMantissa = 800000000000000000;
    uint constant internal n1PCTMantissa = 10000000000000000;

    uint constant internal borrowLimitPCTDelta = 50000000000000000;

    function getCompProfile(address acc) external returns(CompProfile memory compProfile){
        return getCompProfileInternal(acc);
    }

    function getCOMPPriceInUSD() public view returns(uint compPriceInUSD){
        return cmp_getUnderlyingPriceInUSD(cCOMPAddr);
    }
    //bulk testing required
    function getTotalCompReceivable(address acc, uint numberOfBlocks) public view returns(uint totalCompReceivable){
        return getTotalCompReceivableInternal(acc, numberOfBlocks);
    }

    function getTotalCompReceivablByAP(AccountProfile memory accountProfile, uint numberOfBlocks) public view returns(uint compReceivable){
        return getTotalCompReceivableInternal(accountProfile, numberOfBlocks);
    }
    //bulk testing done
    function getAccountProfile(address acc) external view returns(AccountProfile memory accountProfile){
        return getAccountProfileInternal(acc);
    }

    function getAccountInterestProfile(address acc, uint numberOfBlocks) external view returns(AccountInterestProfile memory accountInterestProfile){
        return getAccountInterestProfileInternal(acc, numberOfBlocks);
    }

    function getFarmingAccountProfileByAP(AccountProfile memory accountProfile, uint targetedBorrowLimitPCTMantissa) public view returns(bool isValidated, AccountProfile memory farmingAccountProfile){
        return getFarmingAccountProfileInternal(accountProfile, targetedBorrowLimitPCTMantissa);
    }

    function getAccountInterestProfileByAP(AccountProfile memory accountProfile, uint numberOfBlocks) public view returns(AccountInterestProfile memory accountInterestProfile){
        return getAccountInterestProfileInternal(accountProfile, numberOfBlocks);
    }
    //bulk testing done
    function getLiquidationRiskRanking(address acc) external view returns(LiquidationRiskRanking liquidationRiskRanking){
        return getLiquidationRiskRankingInternal(acc);
    }

    function getLiquidationRiskRankingByAP(AccountProfile memory accountProfile) public view returns(LiquidationRiskRanking liquidationRiskRanking){
        return getLiquidationRiskRankingInternal(accountProfile);
    }

    function getMaxInterestAccountProfileByAP(AccountProfile memory accountProfile) public view returns(bool isValidated, AccountProfile memory maxInterestAccountProfile){
        return getMaxInterestAccountProfileInternal(accountProfile);
    }

    //internal functions below
    function getTotalCompReceivableInternal(address acc, uint numberOfBlocks) internal view returns(uint compReceivable){
        return getTotalCompReceivableInternal(getAccountProfileInternal(acc), numberOfBlocks);
    }

    function getCompReceivableOfCToken(uint supplyByTheAcc, uint borrowByTheAcc, address cTokenAddr, uint numberOfBlocks) internal view returns(uint compReceivableByCToken){

        uint compDistAmount = cmp_getCompDistAmount(cTokenAddr, numberOfBlocks);
        uint percentageOfStakeOnSupplyMantissa = cmp_calPercentageOfStakeOnSupplyMantissa(cTokenAddr, supplyByTheAcc);
        uint percentageOfStakeOnBorrowMantissa = cmp_calPercentageOfStakeOnBorrowMantissa(cTokenAddr, borrowByTheAcc);
        uint decimals = cmp_getUnderlyingDecimals(cCOMPAddr);

        //formula: compDistAmount * (stakeSupplied + stakeBorrowed)
        compReceivableByCToken = compDistAmount.mul(percentageOfStakeOnSupplyMantissa.add(percentageOfStakeOnBorrowMantissa)).div(10**decimals);

        return compReceivableByCToken;
    }


    function getTotalCompReceivableInternal(AccountProfile memory accountProfile, uint numberOfBlocks) internal view returns(uint compReceivable){
        SupplyAsset[] memory suppliedAssets = accountProfile.suppliedAssets;
        BorrowAsset[] memory borrowedAssets = accountProfile.borrowedAssets;

        for(uint i = 0; i < suppliedAssets.length; i++){
            compReceivable += getCompReceivableOfCToken(suppliedAssets[i].asset.amount, 0, suppliedAssets[i].asset.cTokenAddr, numberOfBlocks);
        }

        for(uint i = 0; i < borrowedAssets.length; i++){
            compReceivable += getCompReceivableOfCToken(0, borrowedAssets[i].asset.amount, borrowedAssets[i].asset.cTokenAddr, numberOfBlocks);
        }

        return compReceivable;
    }

    function getCompProfileInternal(address acc) internal returns(CompProfile memory compProfile){

        compProfile.balance = ERC20(compAddr).balanceOf(acc);

        CompoundLens compoundLens = CompoundLens(compoundLensAddr);
        compProfile.yetToClaimed = compoundLens.getCompBalanceMetadataExt(Comp(compAddr), ComptrollerLensInterface(comptrollerAddr), acc).allocated;

    }

    function getAccountProfileInternal(address acc) internal view returns(AccountProfile memory accountProfile){

        SupplyAsset[] memory suppliedAssets = getSuppliedAssets(acc);
        BorrowAsset[] memory borrowedAssets = getBorrowedAssets(acc);

        return createAccountProfile(suppliedAssets, borrowedAssets);
    }

    function getSuppliedAssets(address acc) internal view returns(SupplyAsset[] memory suppliedAssets){
        address[] memory suppliedCTokenAddrList = Comptroller(comptrollerAddr).getAssetsIn(acc);
        suppliedAssets = new SupplyAsset[](suppliedCTokenAddrList.length);

        for(uint i = 0; i < suppliedCTokenAddrList.length; i++){
            //filter out cSAI
            //if(suppliedCTokenAddrList[i] == 0xF5DCe57282A584D2746FaF1593d3121Fcac444dC) continue;
            suppliedAssets[i] = createSupplyAsset(suppliedCTokenAddrList[i], cmp_getUnderlyingBalanceOfAnAcc(acc, suppliedCTokenAddrList[i]));
        }

        suppliedAssets = removeEmptySupplyAsset(suppliedAssets);

        return suppliedAssets;
    }

    function getBorrowedAssets(address acc) internal view returns(BorrowAsset[] memory borrowedAssets){
        address[] memory borrowedCTokenList = cmp_getBorrowedTokenList(acc);

        borrowedAssets = new BorrowAsset[](borrowedCTokenList.length);

        for(uint i = 0; i < borrowedCTokenList.length; i++){
            borrowedAssets[i] = createBorrowAsset(borrowedCTokenList[i], CToken(borrowedCTokenList[i]).borrowBalanceStored(acc));
        }

        borrowedAssets = removeEmptyBorrowAsset(borrowedAssets);

        return borrowedAssets;
    }


    function getFarmingAccountProfileInternal(AccountProfile memory accountProfile, uint targetedBorrowLimitPCTMantissa) internal view returns(bool isValidated, AccountProfile memory farmingAccountProfile){
        //liquidation risk ranking needs to be lower or equials to 2
        if(uint(getLiquidationRiskRankingInternal(accountProfile)) > 1) return (false, farmingAccountProfile);

        //each supplied asset, run borrowANDsupplym check util borrowLimitsPCTPerAsset hits 80%withDelta
        SupplyAsset[] memory suppliedAssets = accountProfile.suppliedAssets;

        for(uint i = 0; i < suppliedAssets.length; i++){

              if(suppliedAssets[i].collateralFactorMantissa_ == 0) continue;

              uint maxBorrowAmount;
              BorrowAsset memory moreBorrowAsset;
              SupplyAsset memory moreSupplyAsset;

              while(accountProfile.borrowLimitPCTLineItemMantissaList[i] <= targetedBorrowLimitPCTMantissa.sub(n1PCTMantissa)){
                  maxBorrowAmount = suppliedAssets[i].asset.amount.mul(suppliedAssets[i].collateralFactorMantissa_).mul(targetedBorrowLimitPCTMantissa.sub(accountProfile.borrowLimitPCTLineItemMantissaList[i])).div(oneMantissa).div(oneMantissa);
                  moreBorrowAsset = createBorrowAsset(suppliedAssets[i].asset.cTokenAddr, maxBorrowAmount);
                  moreSupplyAsset = createSupplyAsset(suppliedAssets[i].asset.cTokenAddr, maxBorrowAmount);

                  addBorrowAsset(accountProfile, moreBorrowAsset);
                  addSuppliedAsset(accountProfile, moreSupplyAsset);

              }
        }

        return (true, accountProfile);
    }

    function getAccountInterestProfileInternal(address acc, uint numberOfBlocks) internal view returns(AccountInterestProfile memory accountInterestProfile){
        return getAccountInterestProfileInternal(getAccountProfileInternal(acc), numberOfBlocks);
    }

    function getAccountInterestProfileInternal(AccountProfile memory accountProfile, uint numberOfBlocks) internal view returns(AccountInterestProfile memory accountInterestProfile){
        return createAccountInterestProfile(getSupplyInterests(accountProfile.suppliedAssets, numberOfBlocks), getBorrowInterests(accountProfile.borrowedAssets, numberOfBlocks));
    }

    function getSupplyInterests(SupplyAsset[] memory supplyAssets, uint numberOfBlocks) internal view returns(CTokenInterest[] memory supplyInterests){
        supplyInterests = new CTokenInterest[](supplyAssets.length);

        address cTokenAddr;
        uint interestRateMantissa;
        uint balance;
        for(uint i = 0; i < supplyAssets.length; i++){
            cTokenAddr = supplyAssets[i].asset.cTokenAddr;
            interestRateMantissa = CToken(cTokenAddr).supplyRatePerBlock();
            balance = supplyAssets[i].asset.amount;

            supplyInterests[i] = createCTokenInterest(cTokenAddr, interestRateMantissa, balance, numberOfBlocks);
        }

        return supplyInterests;
    }

    function getBorrowInterests(BorrowAsset[] memory borrowedAssets, uint numberOfBlocks) internal view returns(CTokenInterest[] memory borrowInterests){
        borrowInterests = new CTokenInterest[](borrowedAssets.length);

        address cTokenAddr;
        uint interestRateMantissa;
        uint balance;
        for(uint i = 0; i < borrowedAssets.length; i++){
            cTokenAddr = borrowedAssets[i].asset.cTokenAddr;
            interestRateMantissa = CToken(cTokenAddr).borrowRatePerBlock();
            balance = borrowedAssets[i].asset.amount;

            borrowInterests[i] = createCTokenInterest(cTokenAddr, interestRateMantissa, balance, numberOfBlocks);
        }

        return borrowInterests;
    }

    function getLiquidationRiskRankingInternal(AccountProfile memory accountProfile) internal view returns(LiquidationRiskRanking liquidationRiskRanking){
        //find all the supplied asset
        //find all the matching asset
        //find calBorrowLimitPCTLineItemMantissaList
        //check to see if any borrowed asset outside from supplied asset, acceptable asset require valueInUSD over 1
        //check to see if any borrowed asset with underlying supplied of 0 collateral factor

        //get account interest profile


        liquidationRiskRanking = LiquidationRiskRanking.ZERO_RISK;
///
        if(!getAccountInterestProfileInternal(accountProfile, 1).isPositiveInterest_){
            liquidationRiskRanking = LiquidationRiskRanking.INTEREST_RISK_ONLY;
        }

        for(uint i = 0; i < accountProfile.borrowLimitPCTLineItemMantissaList.length; i++){
            if(accountProfile.borrowLimitPCTLineItemMantissaList[i] == MAX_INT_NUMBER) continue;

            if(accountProfile.borrowLimitPCTLineItemMantissaList[i] > oneMantissa) {
                liquidationRiskRanking = LiquidationRiskRanking.PRICE_MOVEMENT_RISK;
                break;
            }

        }

        bool hasFound;
        SupplyAsset memory suppliedAsset;
        for(uint i = 0; i < accountProfile.borrowedAssets.length; i++){
            if(accountProfile.borrowedAssets[i].asset.valueInUSD_ < oneMantissa) continue;  //filter small value asset(asset USD value less than 1 USD)

            (hasFound, suppliedAsset) = findSuppliedAsset(accountProfile.borrowedAssets[i].asset.cTokenAddr, accountProfile.suppliedAssets);

            if(!hasFound){
                liquidationRiskRanking = LiquidationRiskRanking.PRICE_MOVEMENT_RISK;
                break;
            }

            if(suppliedAsset.collateralFactorMantissa_ == 0){
                liquidationRiskRanking = LiquidationRiskRanking.PRICE_MOVEMENT_RISK;
                break;
            }
        }

        return liquidationRiskRanking;
    }

    function getLiquidationRiskRankingInternal(address acc) internal view returns(LiquidationRiskRanking liquidationRiskRanking){
        return getLiquidationRiskRankingInternal(getAccountProfileInternal(acc));
    }

    function getMaxInterestAccountProfileInternal(AccountProfile memory accountProfile) internal view returns(bool isValidated, AccountProfile memory maxInterestAccountProfile){
        if(uint(getLiquidationRiskRankingInternal(accountProfile)) > 1) return (false, maxInterestAccountProfile);

        SupplyAsset[] memory newSupplyAssets = new SupplyAsset[](accountProfile.suppliedAssets.length);

        address cTokenAddr;
        uint amount;
        bool hasFound;
        BorrowAsset memory borrowedAsset;
        for(uint i = 0; i < accountProfile.suppliedAssets.length; i++){
            cTokenAddr = accountProfile.suppliedAssets[i].asset.cTokenAddr;

            (hasFound, borrowedAsset) = findBorrowAsset(cTokenAddr, accountProfile.borrowedAssets);
            if(!hasFound){
                amount = accountProfile.suppliedAssets[i].asset.amount;
            }

            amount = accountProfile.suppliedAssets[i].asset.amount.sub(borrowedAsset.asset.amount);

            newSupplyAssets[i] = createSupplyAsset(cTokenAddr, amount);
        }

        BorrowAsset[] memory borrowedAssets;

        return (true, createAccountProfile(newSupplyAssets, borrowedAssets));
    }



}
