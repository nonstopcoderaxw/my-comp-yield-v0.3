pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;

import "./CompoundInterfaces.sol";
import "./math/Exponential.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./utility/Logging.sol";
import "./utility/ErrorReporter.sol";

contract CompFarmingSummary is Exponential, Logging, ErrorReporter{




    address unitrollerAddress; //this is the proxy address
    address compoundLensAddress;
    address uniswapAnchoredViewAddress;


    constructor(address _unitrollerAddress, address _compoundLensAddress, address _uniswapAnchoredViewAddress) public {

        unitrollerAddress = _unitrollerAddress;
        compoundLensAddress = _compoundLensAddress;
        uniswapAnchoredViewAddress = _uniswapAnchoredViewAddress;

    }


    /** @dev totalSupply = cash + totalBorrow, excluding cEth
     ** @param cToken address
     ** @return totalSupply as a mantissa
     **/
    function retrieveCTokenTotalSupply (address cTokenAddress) public returns (uint256 totalSupplyInUSD) {

        //check
        require(hasCToken(cTokenAddress), "cToken not found!");

        address underlyingTokenAddress = cTokenAddressToUnderlyingTokenAddress[cTokenAddress];

        uint256 totalSupply = getTotalSupply(cTokenAddress);

        (MathError err, Exp memory totalSupplyExp) = getExp(totalSupply, 10**decimalsOfBalance(underlyingTokenAddress));
        if(err != MathError.NO_ERROR) {return 0;}

        Exp memory underlyingTokenPriceInUsdExp = Exp({mantissa: getPriceInUSD(cTokenAddress)});
        Exp memory totalSupplyMantissaExp = mul_(totalSupplyExp, underlyingTokenPriceInUsdExp);

        totalSupplyInUSD = totalSupplyMantissaExp.mantissa;

        //Logging
        /*
        delete loggings;
        loggings.push(totalSupplyExp.mantissa);
        loggings.push(underlyingTokenPriceInUsdExp.mantissa);
        loggings.push(getPriceInUSD(underlyingTokenAddress, cTokenAddress));
        loggings.push(totalSupplyInUSD);
        */
    }

    struct CompIncomeLocalVars{
        uint cTokenDecimals;
        uint underlyingDecimals;


        uint compDistSpeedErrCode;

        uint compIncomePerBlockMantissa18;

        uint getAccountSnapshotErrCode;
        uint cTokenBalanceMantissa18;

        uint borrowBalanceMantissa18;
        uint exchangeRateMantissa18;

        uint supplyRatePerBlock;
        uint borrowRatePerBlock;

        uint totalSupply;
        uint totalBorrow;

        Exp underlyingTokenBalanceExp;
        Exp loanBalanceExp;
        Exp loanBalanceWithInterestExp;

        Exp supplyPercentageExp;
        Exp borrowPercentageExp;

        Exp compIncomeOnSupplyExp;
        Exp compIncomeOnBorrowExp;

        Exp compIncomeExp;

        Exp compReleasedExp;


    }

    struct CompProfile{
        uint balance;
        uint yetToClaimed;
    }

    struct CompoundMarkets{
          mapping(string => address) contractNameToAddressMap;
          string[] cTokenNameList;
    }

    function compProfile(address account) external returns(CompProfile memory _compProfile){

        _compProfile.balance = ERC20(tokenAddresses[17]).balanceOf(account);

        CompoundLens compoundLens = CompoundLens(compoundLensAddress);
        _compProfile.yetToClaimed = compoundLens.getCompBalanceMetadataExt(Comp(tokenAddresses[17]), ComptrollerLensInterface(unitrollerAddress), account).allocated;

    }


    function totalCompIncomePerYear(address _account) public returns(uint256 errCode, uint256 compIncomeAmount){


        (errCode, compIncomeAmount) = totalCompIncome(_account, div_(estimatedNumberOfBlocksPerYear(), expScale));
    }


    /* @dev total comp income for the all markets
       @param _account: the account that runs calculation on
              numberOfBlocks: generated COMP amount after the number of blocks
       @return the COMP amount generated
    */
    function totalCompIncome(address _account, uint numberOfBlocks) public returns(uint256 errCode, uint256 compIncomeAmountForThePeriod){

        uint256 numberOfMarkets = cTokenAddressList.length;

        uint256[] memory errCodeList = new uint256[](numberOfMarkets);
        uint256[] memory compIncomeOfTheMarketList = new uint256[](numberOfMarkets);

        for(uint i = 0; i < numberOfMarkets; i++){

            (errCodeList[i], compIncomeOfTheMarketList[i]) = compIncomeByCToken(_account, cTokenAddressList[i], numberOfBlocks);

            if(errCodeList[i] != 0){
                return (errCodeList[i], 0);
            }

            compIncomeAmountForThePeriod = compIncomeAmountForThePeriod + compIncomeOfTheMarketList[i];
        }

        return (errCode, compIncomeAmountForThePeriod);

    }


    /* @dev total comp income per market = supply income + borrow income
    *  @param _account: the account that runs calculation on
              cTokenAddress: the cToken that generates COMP
              numberOfBlocks: generated COMP amount after the number of blocks
       @return the COMP amount generated
    */
    function compIncomeByCToken(address _account, address cTokenAddress, uint numberOfBlocks) public returns(uint256 errCode, uint256 compIncomeAmountForThePeriod){


        CompIncomeLocalVars memory v;

        //get cToken Decimals
        v.cTokenDecimals = ERC20(cTokenAddress).decimals();

        v.underlyingDecimals = underlyingDecimals(cTokenAddress);

        //get comp token distrubtion speed
        (v.compDistSpeedErrCode, v.compIncomePerBlockMantissa18) = compDistSpeed(cTokenAddress);
        if(v.compDistSpeedErrCode != 0){
            return (v.compDistSpeedErrCode, 0);
        }

        //get account snapshot
        (v.getAccountSnapshotErrCode, v.cTokenBalanceMantissa18, v.borrowBalanceMantissa18, v.exchangeRateMantissa18) = getAccountSnapshot(_account, cTokenAddress);
        if(v.getAccountSnapshotErrCode != 0){
            return (v.getAccountSnapshotErrCode, 0);
        }
        //underlyingTokenBalance
        v.underlyingTokenBalanceExp = mul_(Exp({mantissa: v.cTokenBalanceMantissa18}), Exp({mantissa: v.exchangeRateMantissa18}));

        //loanBalanceExp
        v.loanBalanceExp = Exp({mantissa: v.borrowBalanceMantissa18});

        //totalSupplyWithInterest
        v.totalSupply = getTotalSupply(cTokenAddress);

        //totalBorrowWithInterest
        v.totalBorrow = getTotalBorrow(cTokenAddress);

        //supplyPercentageMantissa
        v.supplyPercentageExp = div_(mul_(v.underlyingTokenBalanceExp, expScale), v.totalSupply);
        v.borrowPercentageExp = div_(mul_(v.loanBalanceExp, expScale), v.totalBorrow);

        v.compReleasedExp = Exp({mantissa: mul_(v.compIncomePerBlockMantissa18, numberOfBlocks)});

        v.compIncomeOnSupplyExp = mul_(v.compReleasedExp, v.supplyPercentageExp);

        v.compIncomeOnBorrowExp = mul_(v.compReleasedExp, v.borrowPercentageExp);

        v.compIncomeExp = add_(v.compIncomeOnSupplyExp, v.compIncomeOnBorrowExp);

        //logging
        /**
        delete loggings_uint;
        delete loggings_address;
        loggings_uint.push(v.compReleasedExp.mantissa);
        loggings_uint.push(v.compIncomeExp.mantissa);
        **/

        return (0, v.compIncomeExp.mantissa);

    }

    function principleAndInterestAtEndOfPeriod(uint256 principleMantissa, uint256 interestRatePerBlock, uint256 underlyingDecimals, uint256 numberOfBlocks) public pure returns (uint256 principleAndInterestMantissa){

        (MathError err, Exp memory interestRatePerBlockExp) = getExp(interestRatePerBlock, 10**underlyingDecimals);

        uint256 interestRateOfThePeriodMantissa = mul_(interestRatePerBlockExp.mantissa, numberOfBlocks);
        Exp memory interestOfThePeriodExp = mul_(Exp({mantissa: principleMantissa}), add_(Exp({mantissa: 1e18}), Exp({mantissa: interestRateOfThePeriodMantissa})));
        principleAndInterestMantissa = interestOfThePeriodExp.mantissa;


    }

    function retrieveCTokenTotalBorrow(address cTokenAddress) public returns(uint256 totalBorrowValueInUSD){

        require(hasCToken(cTokenAddress), "cToken not found!");

        address underlyingTokenAddress = cTokenAddressToUnderlyingTokenAddress[cTokenAddress];

        uint256 mantissa = decimalsOfBalance(underlyingTokenAddress);
        uint256 totalBorrowAmount = getTotalBorrow(cTokenAddress);

        (MathError err, Exp memory totalBorrowAmountExp) = getExp(totalBorrowAmount, 10**mantissa);
        if(err != MathError.NO_ERROR) {return 0;}

        uint256 priceInUSD = getPriceInUSD(cTokenAddress);
        Exp memory priceInUSDExp = Exp({mantissa: priceInUSD});

        Exp memory totalBorrowValueExp = mul_(totalBorrowAmountExp, priceInUSDExp);

        totalBorrowValueInUSD = totalBorrowValueExp.mantissa;


        //Logging
        /*
        delete loggings;
        loggings.push(totalBorrowAmountExp.mantissa);
        loggings.push(priceInUSDExp.mantissa);
        loggings.push(totalBorrowValueExp.mantissa);
        */
    }

    function getSupplyRateNextBlock(address cTokenAddress) public view returns (uint256 supplyRateNextBlockMantissa) {
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        return cToken.supplyRatePerBlock();
    }

    /**
    * @dev underlyingBalance * exchangeRate
    */

    struct getAccountSnapshotLocalVars{
        uint errCode;
        uint cTokenBalance;
        uint borrowBalance;
        uint exchangeRateMantissa;
        uint cTokenBalanceMantissa18;
        uint borrowBalanceMantissa18;
        uint exchangeRateMantissa18;

        MathError cTokenBalanceExpErr;
        Exp cTokenBalanceExp;

        MathError borrowBalanceExpErr;
        Exp borrowBalanceExp;

        MathError exchangeRateExpErr;
        Exp exchangeRateExp;


    }

    function underlyingDecimals(address cTokenAddress) public view returns (uint256) {

        //cETH
        if(cTokenAddress == cTokenAddressList[1]){
            return 18;
        }

        address underlyingAddress = cTokenAddressToUnderlyingTokenAddress[cTokenAddress];
        return ERC20(underlyingAddress).decimals();

    }

    function getAccountSnapshot(address _account, address cTokenAddress) public view returns (uint256, uint256, uint256, uint256){

        getAccountSnapshotLocalVars memory v;

        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        uint256 cTokenDecimals = ERC20(cTokenAddress).decimals();
        uint256 _underlyingDecimals = underlyingDecimals(cTokenAddress);


        (v.errCode, v.cTokenBalance, v.borrowBalance, v.exchangeRateMantissa) = cToken.getAccountSnapshot(_account);

        if(v.errCode != 0){
            return (v.errCode, 0, 0, 0);
        }

        (v.cTokenBalanceExpErr, v.cTokenBalanceExp) = getExp(v.cTokenBalance, 10**cTokenDecimals);
        if(uint(v.cTokenBalanceExpErr) != 0){
            return (uint(v.cTokenBalanceExpErr), 0, 0, 0);
        }

        (v.borrowBalanceExpErr, v.borrowBalanceExp) = getExp(v.borrowBalance, 10**_underlyingDecimals);
        if(uint(v.borrowBalanceExpErr) != 0){
            return (uint(v.borrowBalanceExpErr), 0, 0, 0);
        }

        (v.exchangeRateExpErr, v.exchangeRateExp) = getExp(v.exchangeRateMantissa, 10**mantissaOfExchangeRate(cTokenAddress));
        if(uint(v.exchangeRateExpErr) != 0){
            return (uint(v.exchangeRateExpErr), 0, 0, 0);
        }

        v.cTokenBalanceMantissa18 = v.cTokenBalanceExp.mantissa;
        v.borrowBalanceMantissa18 = v.borrowBalanceExp.mantissa;

        v.exchangeRateMantissa18 = v.exchangeRateExp.mantissa;


        return (0, v.cTokenBalanceMantissa18, v.borrowBalanceMantissa18, v.exchangeRateMantissa18);
    }

    function getBorrowRatePerBlock(address cTokenAddress) public view returns (uint256 borrowRatePerBlockMantissa) {
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        return cToken.borrowRatePerBlock();
    }

    function getTotalSupply(address cTokenAddress) public view returns (uint256 totalSupply){
        uint256 cash = getCash(cTokenAddress);
        uint256 totalBorrow = getTotalBorrow(cTokenAddress);
        uint256 totalReserves = getTotalReserves(cTokenAddress);

        totalSupply = sub_(add_(cash, totalBorrow), totalReserves);

    }


    function getTotalReserves(address cTokenAddress) public view returns (uint256 totalReserves){
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        totalReserves = cToken.totalReserves();
    }


    function getCash(address cTokenAddress) public view returns (uint256 cash){
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        cash = cToken.getCash();
    }

    function getTotalBorrow(address cTokenAddress) public view returns (uint totalBorrow){
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        totalBorrow = cToken.totalBorrows();
    }

    function getPrice(address cTokenAddress) public view returns (uint256 price){
        PriceOracle priceOracle = PriceOracle(priceOracleAddress);
        price = priceOracle.getUnderlyingPrice(CToken(cTokenAddress));
    }

    function getPriceInUSD(address cTokenAddress) public view returns (uint256 priceInUSD) {

        address underlyingTokenAddress = cTokenAddressToUnderlyingTokenAddress[cTokenAddress];

        if(underlyingTokenAddress == address(0)){
            return getETHPriceInUSD();
        }

        uint256 mantissa = mantissaOfPrice(underlyingTokenAddress);
        //2BC add mantissa to the result of getPrice(cTokenAddress) to the line below
        (MathError err, Exp memory cTokenPriceInEthExp) = getExp(getPrice(cTokenAddress), 10**mantissa);

        if(err != MathError.NO_ERROR) {return 0;}

        Exp memory ethPriceInUSDExp = Exp({mantissa: getETHPriceInUSD()});
        Exp memory priceInUSDExp = mul_(cTokenPriceInEthExp, ethPriceInUSDExp);

        priceInUSD = priceInUSDExp.mantissa;

    }


    function getPriceCOMP() public view returns (uint256 priceInUSD){
        UniswapAnchoredView uniswapAnchoredView = UniswapAnchoredView(uniswapAnchoredViewAddress);
        priceInUSD = uniswapAnchoredView.price("COMP");
    }

    function getETHPriceInUSD() public view returns (uint256 ethPriceInUSD){
        address usdtAddress = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
        address cUsdtAddress = 0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9;
        uint256 mantissa = mantissaOfPrice(usdtAddress);


        (MathError err, Exp memory usdtPriceInEthExp) = getExp(getPrice(cUsdtAddress), 10**mantissa);
        (MathError err2, Exp memory ethPriceInUSDExp) = getExp(10**18, usdtPriceInEthExp.mantissa);


        if(err != MathError.NO_ERROR){ return 0; }
        if(err2 != MathError.NO_ERROR){ return 0; }

        ethPriceInUSD = ethPriceInUSDExp.mantissa;
    }

    function sortedCompDistSpeedAllMarkets() public view returns (uint errorCode, string[] memory, uint[] memory) {

      //string[] cTokenNameList;
      //mapping(string => address) cTokenNameToAddressMap;
      ///TBC.......

        string[] memory _cTokenNameList = new string[](cTokenNameList.length);
        uint[] memory compSpeedList = new uint[](cTokenNameList.length);

        uint256 compAmountPerBlockMantissa18;

        for(uint i = 0; i < cTokenNameList.length; i++){

            (errorCode, compAmountPerBlockMantissa18) = compDistSpeed(cTokenNameToAddressMap[cTokenNameList[i]]);

            if(errorCode != 0){
                return (errorCode, _cTokenNameList, compSpeedList);
            }
            _cTokenNameList[i] = cTokenNameList[i];
            compSpeedList[i] = compAmountPerBlockMantissa18;

        }

        //sort compSpeedList
        (string[] memory sortedCTokenNameList, uint[] memory sortedCompSpeedList) = quickSortDESC(_cTokenNameList, compSpeedList, 0, cTokenNameList.length - 1);


        return (0, sortedCTokenNameList, sortedCompSpeedList);
    }

    function compDistSpeed(address cTokenAddress) public view returns (uint256 errorCode, uint256 compAmountPerBlockMantissa18){
        Comptroller comptroller = Comptroller(unitrollerAddress);

        uint256 decimals = ERC20(tokenAddresses[17]).decimals();

        uint256 compAmountPerBlock = comptroller.compSpeeds(cTokenAddress);

        (MathError err, Exp memory compAmountPerBlockExp) = getExp(compAmountPerBlock, 10**decimals);

        errorCode = uint(err);
        compAmountPerBlockMantissa18 = compAmountPerBlockExp.mantissa;

    }


    function estimatedNumberOfBlocksPerYear() public pure returns (uint256 numberOfBlocksPerYearMantissa){
        uint256 numberOfBlockPerSec = 14;
        uint256 secsPerYear = 31536000;

        (MathError err, Exp memory numberOfBlocksPerYearExp) = getExp(secsPerYear, numberOfBlockPerSec);
        if(err != MathError.NO_ERROR){ return 0; }

        numberOfBlocksPerYearMantissa = numberOfBlocksPerYearExp.mantissa;
    }

    function mantissaOfPrice(address underlyingTokenAddress) public view returns (uint256 mantissa){
        if(underlyingTokenAddress == address(0)){
            mantissa = 18;
            return mantissa;
        }

        uint256 decimalsUnderlying = ERC20(underlyingTokenAddress).decimals();
        mantissa = add_(18, sub_(18, decimalsUnderlying));
    }

    function decimalsOfBalance(address underlyingTokenAddress) public view returns (uint256 _mantissa){

        if(underlyingTokenAddress == address(0)){
            _mantissa = 18;
            return _mantissa;
        }

        uint256 decimalsUnderlying = ERC20(underlyingTokenAddress).decimals();
        _mantissa = decimalsUnderlying;
    }

    function mantissaOfExchangeRate(address cTokenAddress) public view returns (uint256 mantissa) {
        address underlyingAddress = cTokenAddressToUnderlyingTokenAddress[cTokenAddress];

        uint256 _underlyingDecimals = underlyingDecimals(cTokenAddress);
        uint256 cTokenDecimals = ERC20(cTokenAddress).decimals();

        mantissa = sub_(add_(18, _underlyingDecimals), cTokenDecimals);

    }

    function getUnderlyingTokenName(string memory cTokenName) private pure returns (string memory underlyingTokenName) {

        return substring(cTokenName, 1, bytes(cTokenName).length);
    }

    function hasCToken(address cTokenAddress) private view returns (bool) {
        for(uint i = 0; i < tokenAddresses.length; i++){
            if(tokenAddresses[i] == cTokenAddress){
                return true;
            }
        }

        return false;
    }



    function refreshCompoundMarkets() internal view returns (CompoundMarkets) {

    }


    function substring(string memory str, uint startIndex, uint endIndex) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex-startIndex);
        for(uint i = startIndex; i < endIndex; i++) {
            result[i-startIndex] = strBytes[i];
        }
        return string(result);
    }

    function length(string memory str) public pure returns (uint256) {
        return bytes(str).length;
    }

    function compareStrings (string memory a, string memory b) public pure returns (bool) {
          return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }



    function quickSort(string[] memory keys, uint[] memory values, uint left, uint right) internal pure returns (string[] memory, uint[] memory){
        uint i = left;
        uint j = right;
        uint pivot = values[left + (right - left) / 2];
        while (i <= j) {
            while (values[i] < pivot) i++;
            while (pivot < values[j]) j--;
            if (i <= j) {
                (keys[i], keys[j]) = (keys[j], keys[i]);
                (values[i], values[j]) = (values[j], values[i]);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(keys, values, left, j);

        if (i < right)
            quickSort(keys, values, i, right);

            return (keys, values);
    }

    function quickSortDESC(string[] memory keys, uint[] memory values, uint left, uint right) internal pure returns (string[] memory, uint[] memory){
        (string[] memory keys, uint[] memory values) = quickSort(keys, values, left, right);

        string[] memory keys_desc = new string[](keys.length);
        uint[] memory values_desc = new uint[](values.length);
        for(uint i = 0; i < keys.length; i++){
            keys_desc[keys.length - 1 - i] = keys[i];
            values_desc[keys.length - 1 - i] = values[i];
        }

        return (keys_desc, values_desc);
    }



}
