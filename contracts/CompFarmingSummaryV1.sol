pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import "./CompoundInterfaces.sol";
import "./math/Exponential.sol";
import "./utility/ErrorReporter.sol";
import "./CompFarmingSummaryInterface.sol";
import "./CompFarmingSummaryProxyStorage.sol";
import "./CompFarmingSummaryProxy.sol";

contract CompFarmingSummaryV1 is CompFarmingSummaryStorageV1, CompFarmingSummaryInterface, Exponential, CompFarmingSummaryErrorReporter{


    struct CompIncomeLocalVars{
        uint cTokenDecimals;
        uint underlyingDecimals;
        uint compDistSpeedErrCode;
        uint getAccountSnapshotErrCode;
        uint cTokenBalanceMantissa18;
        uint borrowBalanceMantissa18;
        uint exchangeRateMantissa18;
        uint supplyRatePerBlock;
        uint borrowRatePerBlock;
        uint totalSupply;
        uint totalBorrow;
        Exp compIncomePerBlockExp;
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

    constructor() public {

    }

    //note: add view
    function getPriceCOMP() external view returns (uint256 priceInUSD){
        UniswapAnchoredView uniswapAnchoredView = UniswapAnchoredView(getUniswapAnchoredViewAddress());
        priceInUSD = uniswapAnchoredView.price("COMP");
    }

    //note: add view
    function sortedCompDistSpeedAllMarkets() external view returns (string[] memory sortedCTokenNameList, uint[] memory sortedCompSpeedList) {

        string[] memory cTokenNameList = cTokenNameList();

        string[] memory _cTokenNameList = new string[](cTokenNameList.length);
        uint[] memory compSpeedList = new uint[](cTokenNameList.length);

        Exp memory compAmountPerBlockExp;

        for(uint i = 0; i < cTokenNameList.length; i++){

                compAmountPerBlockExp = compDistSpeed(contractSymbolToAddressMap(cTokenNameList[i]));
                _cTokenNameList[i] = cTokenNameList[i];
                compSpeedList[i] = compAmountPerBlockExp.mantissa;

        }

        //sort compSpeedList
        (sortedCTokenNameList, sortedCompSpeedList) = quickSortDESC(_cTokenNameList, compSpeedList);
    }

    //note: add view
    function compProfile(address account) external returns(CompProfile memory _compProfile){

        CompoundLens compoundLens = CompoundLens(getCompoundLensAddress());
        CompoundLens.CompBalanceMetadataExt memory result = compoundLens.getCompBalanceMetadataExt(Comp(getCompAddress()), ComptrollerLensInterface(getUnitrollerAddress()), account);
        _compProfile.balance = result.balance;
        _compProfile.yetToClaimed = result.allocated;
    }

    //note: add view
    function totalCompIncomePerYear(address _account) external view returns(uint errCode, string memory, uint256 totalCompIncomeMantissa){
        (Error err, string memory _errCTokenSymbol, Exp memory totalCompIncomeExp) = totalCompIncome(_account, div_(estimatedNumberOfBlocksPerYear(), expScale));
        //require(err == Error.NO_ERROR, appendStrings("Error occured on: ", errCTokenSymbol));
        if(err != Error.NO_ERROR){
            return (uint(err), _errCTokenSymbol, 0);
        }

        return (0, "", totalCompIncomeExp.mantissa);
    }


    //note: add view
    function totalCompIncome(address _account, uint numberOfBlocks) internal view returns(Error, string memory, Exp memory compIncomeForThePeriodExp){

        string[] memory cTokenNameList = cTokenNameList();

        uint256 numberOfMarkets = cTokenNameList.length;

        Error err = Error.NO_ERROR;
        Exp[] memory compIncomeExpOfTheMarketList = new Exp[](numberOfMarkets);
        compIncomeForThePeriodExp = Exp({mantissa: 0});

        for(uint i = 0; i < numberOfMarkets; i++){

            string memory cTokenName = cTokenNameList[i];

            (err, compIncomeExpOfTheMarketList[i]) = compIncomeByCToken(_account, contractSymbolToAddressMap(cTokenName), numberOfBlocks);

            if(err != Error.NO_ERROR){
                return (err, cTokenName, Exp({mantissa: 0}));
            }
            //addLog(cTokenName);
            //addLog(compIncomeExpOfTheMarketList[i].mantissa);
            compIncomeForThePeriodExp = add_(compIncomeForThePeriodExp, compIncomeExpOfTheMarketList[i]);
        }



        return (Error.NO_ERROR, "", compIncomeForThePeriodExp);

    }



    //note: add view
    function compIncomeByCToken(address _account, address cTokenAddress, uint numberOfBlocks) internal view returns(Error, Exp memory){


        CompIncomeLocalVars memory v;

        //get cToken Decimals
        v.cTokenDecimals = ERC20(cTokenAddress).decimals();
        v.underlyingDecimals = underlyingDecimals(cTokenAddress);

        //get comp token distrubtion speed
        v.compIncomePerBlockExp = compDistSpeed(cTokenAddress);
        //continue to refractor here

        //get account snapshot
        (v.getAccountSnapshotErrCode, v.cTokenBalanceMantissa18, v.borrowBalanceMantissa18, v.exchangeRateMantissa18) = getAccountSnapshot(_account, cTokenAddress);
        if(v.getAccountSnapshotErrCode != 0){
            return (Error.ACCOUNT_SNAPSHOT_ERROR, Exp({mantissa: 0}));
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

        v.compReleasedExp = mul_(v.compIncomePerBlockExp, numberOfBlocks);

        v.compIncomeOnSupplyExp = mul_(v.compReleasedExp, v.supplyPercentageExp);

        v.compIncomeOnBorrowExp = mul_(v.compReleasedExp, v.borrowPercentageExp);

        v.compIncomeExp = add_(v.compIncomeOnSupplyExp, v.compIncomeOnBorrowExp);


        return (Error.NO_ERROR, v.compIncomeExp);
    }

    //note: add view
    function getCTokenTotalSupply (address cTokenAddress) internal view returns (Error err, uint256 totalSupplyValueInUSD) {

        string[] memory cTokenNameList = cTokenNameList();

        //check
        require(hasCToken(cTokenAddress, cTokenNameList), "cToken not found!");

        address underlyingAddress = CErc20(cTokenAddress).underlying();

        uint256 totalSupply = getTotalSupply(cTokenAddress);

        Exp memory totalSupplyExp = getExp18(totalSupply, ERC20(underlyingAddress).decimals());//Exp({mantissa: mul_(totalSupply, 10**(sub_(18, ERC20(underlyingAddress).decimals()))});
        Exp memory underlyingPriceInUSDExp = Exp({mantissa: getPriceInUSD(cTokenAddress)});
        Exp memory totalSupplyValueExp = mul_(totalSupplyExp, underlyingPriceInUSDExp);

        totalSupplyValueInUSD = totalSupplyValueExp.mantissa;

        return (Error.NO_ERROR, totalSupplyValueInUSD);

    }


    function getPriceInUSD(address cTokenAddress) public view returns (uint256 priceInUSD) {
        UniswapAnchoredView uniswapAnchoredView = UniswapAnchoredView(getUniswapAnchoredViewAddress());
        priceInUSD = uniswapAnchoredView.getUnderlyingPrice(cTokenAddress);
    }

    function getTotalSupply(address cTokenAddress) internal view returns (uint256 totalSupply){
        uint256 cash = CTokenInterface(cTokenAddress).getCash();
        uint256 totalBorrow = CTokenInterface(cTokenAddress).totalBorrows();
        uint256 totalReserves = CTokenInterface(cTokenAddress).totalReserves();

        totalSupply = sub_(add_(cash, totalBorrow), totalReserves);

    }

    function getAccountSnapshot(address _account, address cTokenAddress) internal view returns (uint256, uint256, uint256, uint256){

        getAccountSnapshotLocalVars memory v;

        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        uint256 cTokenDecimals = ERC20(cTokenAddress).decimals();
        uint256 _underlyingDecimals = underlyingDecimals(cTokenAddress);


        (v.errCode, v.cTokenBalance, v.borrowBalance, v.exchangeRateMantissa) = cToken.getAccountSnapshot(_account);

        if(v.errCode != 0){
            return (v.errCode, 0, 0, 0);
        }

        v.cTokenBalanceExp = getExp18(v.cTokenBalance, cTokenDecimals);
        v.borrowBalanceExp = getExp18(v.borrowBalance, _underlyingDecimals);
        v.exchangeRateExp = getExp18(v.exchangeRateMantissa, mantissaOfExchangeRate(cTokenAddress));
        v.cTokenBalanceMantissa18 = v.cTokenBalanceExp.mantissa;
        v.borrowBalanceMantissa18 = v.borrowBalanceExp.mantissa;
        v.exchangeRateMantissa18 = v.exchangeRateExp.mantissa;

        return (0, v.cTokenBalanceMantissa18, v.borrowBalanceMantissa18, v.exchangeRateMantissa18);
    }



    function cTokenNameList() internal view returns(string[] memory _cTokenNameList){
          Comptroller comptroller = Comptroller(getUnitrollerAddress());
          CToken[] memory allMarkets = comptroller.getAllMarkets();

          bool isListed;
          bool isComped;
          address addressOfMarket;
          uint _index;
          string[] memory _cTokenNameListFullSize = new string[](allMarkets.length);

          for(uint i = 0; i < allMarkets.length; i++){
              addressOfMarket = address(allMarkets[i]);
              (isListed, , isComped) = comptroller.markets(addressOfMarket);

              if(isListed && isComped){
                  address cTokenAddress = address(allMarkets[i]);
                  string memory cTokenName = CTokenInterface(cTokenAddress).symbol();
                  _cTokenNameListFullSize[_index] = cTokenName;

                  _index++;
              }
          }

          _cTokenNameList = new string[](_index);

          for(uint i = 0; i < _cTokenNameList.length; i++){
              _cTokenNameList[i] = _cTokenNameListFullSize[i];
          }
    }

    function contractSymbolToAddressMap(string memory symbol) internal view returns (address){
          Comptroller comptroller = Comptroller(getUnitrollerAddress());
          CToken[] memory allMarkets = comptroller.getAllMarkets();

          for(uint i = 0; i < allMarkets.length; i++){
              address addressOfMarket = address(allMarkets[i]);
              string memory symbolOfMarket = CTokenInterface(addressOfMarket).symbol();

              if(compareStrings(symbolOfMarket, symbol)){
                  return addressOfMarket;
              }
          }

          return address(0);
    }

    function hasCToken(address cTokenAddress, string[] memory _cTokenNameList) internal view returns (bool) {
        for(uint i = 0; i < _cTokenNameList.length; i++){
            if(compareStrings(_cTokenNameList[i], CTokenInterface(cTokenAddress).symbol())){
                return true;
            }
        }

        return false;
    }

    //require to check cTokenAddress is valid
    function underlyingDecimals(address cTokenAddress) internal view returns (uint256) {

        if(cTokenAddress == getCEthAddress()){
            return 18;
        }

        address underlyingAddress = CErc20(cTokenAddress).underlying();

        return ERC20(underlyingAddress).decimals();
    }

    function mantissaOfExchangeRate(address cTokenAddress) internal view returns (uint256 mantissa) {

        uint256 _underlyingDecimals = underlyingDecimals(cTokenAddress);
        uint256 cTokenDecimals = ERC20(cTokenAddress).decimals();

        mantissa = sub_(add_(18, _underlyingDecimals), cTokenDecimals);
    }

    function getTotalBorrow(address cTokenAddress) internal view returns (uint totalBorrow){
        CTokenInterface cToken = CTokenInterface(cTokenAddress);
        totalBorrow = cToken.totalBorrows();
    }

    function compDistSpeed(address cTokenAddress) internal view returns (Exp memory compAmountPerBlockExp){

        Comptroller comptroller = Comptroller(getUnitrollerAddress());

        uint256 compDecimals = ERC20(getCompAddress()).decimals();

        uint256 compAmountPerBlock = comptroller.compSpeeds(cTokenAddress);

        compAmountPerBlockExp = getExp18(compAmountPerBlock, compDecimals);//Exp({mantissa: mul_(compAmountPerBlock, 10**sub_(18, compDecimals))});

        return compAmountPerBlockExp;

    }

    function estimatedNumberOfBlocksPerYear() internal pure returns (uint256 numberOfBlocksPerYearMantissa){
        uint256 numberOfBlockPerSec = 14;
        uint256 secsPerYear = 31536000;

        (MathError err, Exp memory numberOfBlocksPerYearExp) = getExp(secsPerYear, numberOfBlockPerSec);
        if(err != MathError.NO_ERROR){ return 0; }

        numberOfBlocksPerYearMantissa = numberOfBlocksPerYearExp.mantissa;
    }

    function compareStrings (string memory a, string memory b) public pure returns (bool) {
          return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }

    function quickSortDESC(string[] memory keys, uint[] memory values) internal pure returns (string[] memory, uint[] memory){

          string[] memory keysPlus = new string[](keys.length + 1);
          uint[] memory valuesPlus = new uint[](values.length + 1);

          for(uint i = 0; i < keys.length; i++){
              keysPlus[i] = keys[i];
              valuesPlus[i] = values[i];
          }

          (keysPlus, valuesPlus) = quickSort(keysPlus, valuesPlus, 0, keysPlus.length - 1);

          string[] memory keys_desc = new string[](keys.length);
          uint[] memory values_desc = new uint[](values.length);
          for(uint i = 0; i < keys.length; i++){
              keys_desc[keys.length - 1 - i] = keysPlus[i + 1];
              values_desc[keys.length - 1 - i] = valuesPlus[i + 1];
          }

          return (keys_desc, values_desc);
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

    function getCEthAddress() internal pure returns(address){
          return 0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5;
    }

    function getCompAddress() internal pure returns(address){
          return 0xc00e94Cb662C3520282E6f5717214004A7f26888;
    }

    function getUnitrollerAddress() internal pure returns(address){
          return 0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B;
    }

    function getCompoundLensAddress() internal pure returns(address){
          return 0xd513d22422a3062Bd342Ae374b4b9c20E0a9a074;
    }

    function getUniswapAnchoredViewAddress() internal pure returns(address){
          return 0x922018674c12a7F0D394ebEEf9B58F186CdE13c1;
    }

    //admin functions
    function _become(CompFarmingSummaryProxy proxy) public {
        require(msg.sender == proxy.admin(), "only admin can change brains");

        require(proxy._acceptImplementation() == 0, "changes not permitted");
    }


    function getVersion() external pure returns(uint){
          return 1;
    }



}
