const DevNode = require(`${process.env.libPath}/DevNode.js`);
const ContractsUtils = require(`${process.env.libPath}/ContractsUtils.js`);
const CompoundMethods = require(`${process.env.libPath}/CompoundMethods.js`);
const Fs = require("fs");
const Addresses = require(`${process.env.libPath}/Addresses.js`);
const Utils = require(`${process.env.libPath}/Utils.js`);
const Model = require("./myCompFarmingPredictionModel.js");
const TestData = require("../testData/testData.js");

var web3;
var fromAddress;
var fromPvk;
var contract;

var devNode;
var contractsUtils;
var compoundMethods;
var forkedBlockNumber;


function init(_web3, _fromAddress, _fromPvk, _contract, _forkedBlockNumber){
    web3 = _web3;
    fromAddress = _fromAddress;
    fromPvk = _fromPvk;
    contract = _contract;
    forkedBlockNumber = _forkedBlockNumber;

    contractsUtils = new ContractsUtils(web3, fromAddress, fromPvk);
    devNode = new DevNode(web3);
    compoundMethods = new CompoundMethods(web3, fromAddress, fromPvk);
}

async function getAccountProfile(acc){
    const accountProfileResultRaw = await contractsUtils.call(contract, "getAccountProfile", [acc]);

    return accountProfileResultRaw;
}

async function getFarmingAccountProfile(accountProfile){
    const farmingAccountProfileResultRaw = await contractsUtils.call(contract, "getFarmingAccountProfile", [accountProfile]);

    return farmingAccountProfileResultRaw;
}

async function getCompProfile_send(acc){
    const compProfileResultRaw = await contractsUtils.send(contract, "getCompProfile", [acc], "0");

    return compProfileResultRaw;
}

async function getCompProfile(acc){
    const compProfileResultRaw = await contractsUtils.call(contract, "getCompProfile", [acc]);

    return compProfileResultRaw;
}

async function getCompReceivableMantissaByAccountProfile(accountProfile, numberOfBlocks){
    const compReceivableMantissa = await contractsUtils.call(contract, "getCompReceivableMantissaByAccountProfile", [accountProfile, numberOfBlocks]);

    return compReceivableMantissa;
}

async function getTotalCompReceivableMantissa(acc, numberOfBlocks){
    const r = await contractsUtils.call(contract, "getTotalCompReceivableMantissa", [acc, numberOfBlocks]);
    return r;
}

async function accountInterestProfile_supplyInterestsObj(acc, numberOfBlocks, accountInterestProfileByAccWrapped){
    const UIData = {}
    const UIData_SupplyInterests_Obj = {
        interestRate: null,
        balance: null,
        interestInUSD_: null
    }
    const data = accountInterestProfileByAccWrapped.supplyInterests;

    for(var i = 0; i < data.length; i++){
        const returned = Utils.clone(UIData_SupplyInterests_Obj);
        const actual = Utils.clone(UIData_SupplyInterests_Obj);

        const item = data[i];
        const cTokenAddr = item.cTokenAddr;
        const interestRate = item.interestRateMantissa / 10**18 * numberOfBlocks;
        const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
        const balance = item.balance / 10**decimals;
        const underlyingSymbol_ = item.underlyingSymbol_;
        const interestInUSD_ = item.interestInUSD_ / 10**18;

        returned.interestRate = interestRate;
        returned.balance = balance;
        returned.interestInUSD_ = interestInUSD_;

        UIData[`${underlyingSymbol_} returned`] = returned;

        const interestRatePerYear_actual = (await compoundMethods.getSupplyRatePerBlock(cTokenAddr)) * numberOfBlocks;
        const balance_actual = (await compoundMethods.getUnderlyingBalanceOfAnAcc(acc, cTokenAddr));
        const interestInUSD__actual = await (async () => {
            const priceInUSD = (await compoundMethods.getPriceInUSD(cTokenAddr));
            return interestRatePerYear_actual * balance_actual * priceInUSD;
        })();

        actual.interestRate = interestRatePerYear_actual;
        actual.balance = balance_actual;
        actual.interestInUSD_ = interestInUSD__actual;

        UIData[`${underlyingSymbol_} actual`] = actual;

    }

    return UIData;
}

async function accountInterestProfile_borrowInterestsObj(acc, numberOfBlocks, accountInterestProfileByAccWrapped){
    const UIData = {}
    const UIData_BorrowInterests_Obj = {
        interestRate: null,
        balance: null,
        interestInUSD_: null
    }
    const data = accountInterestProfileByAccWrapped.borrowInterests;

    for(var i = 0; i < data.length; i++){
        const returned = Utils.clone(UIData_BorrowInterests_Obj);
        const actual = Utils.clone(UIData_BorrowInterests_Obj);

        const item = data[i];
        const cTokenAddr = item.cTokenAddr;
        const interestRate = item.interestRateMantissa / 10**18 * numberOfBlocks;
        const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
        const balance = item.balance / 10**decimals;
        const underlyingSymbol_ = item.underlyingSymbol_;
        const interestInUSD_ = item.interestInUSD_ / 10**18;

        returned.interestRate = interestRate;
        returned.balance = balance;
        returned.interestInUSD_ = interestInUSD_;

        UIData[`${underlyingSymbol_} returned`] = returned;

        const interestRatePerYear_actual = (await compoundMethods.getBorrowRatePerBlock(cTokenAddr)) * numberOfBlocks;
        const balance_actual = (await compoundMethods.getBorrowAmount(acc, cTokenAddr));
        const interestInUSD__actual = await (async () => {
            const priceInUSD = (await compoundMethods.getPriceInUSD(cTokenAddr));
            return interestRatePerYear_actual * balance_actual * priceInUSD;
        })();

        actual.interestRate = interestRatePerYear_actual;
        actual.balance = balance_actual;
        actual.interestInUSD_ = interestInUSD__actual;

        UIData[`${underlyingSymbol_} actual`] = actual;

    }

    return UIData;

}

async function accountInterestProfile_totalInterestInUSD(acc, numberOfBlocks, accountInterestProfileByAccWrapped){
    const UIData = {}
    var totalInterestInUSD = accountInterestProfileByAccWrapped.totalInterestInUSD_ / 10**18;
    const isPositiveInterest_ = accountInterestProfileByAccWrapped.isPositiveInterest_;

    if(!isPositiveInterest_){
        totalInterestInUSD = (-totalInterestInUSD);
    }

    const totalInterestInUSD_actual = await (async () => {
        var totalSupplyInterestInUSD = await (async () => {
            const supplyItems = accountInterestProfileByAccWrapped.supplyInterests;
            var _totalSupplyInterestInUSD = 0;

            for(var i = 0; i < supplyItems.length; i++){
                const cTokenAddr = supplyItems[i].cTokenAddr;
                const supplyRatePerYear = (await compoundMethods.getSupplyRatePerBlock(cTokenAddr)) * numberOfBlocks;
                const supplyBalance = await compoundMethods.getUnderlyingBalanceOfAnAcc(acc, cTokenAddr);
                const priceInUSD = await compoundMethods.getPriceInUSD(cTokenAddr);
                _totalSupplyInterestInUSD += supplyRatePerYear * supplyBalance * priceInUSD;
            }

            return _totalSupplyInterestInUSD;
        })()


        var totalBorrowInterestInUSD = await (async () => {
            const borrowItems = accountInterestProfileByAccWrapped.borrowInterests;
            var _totalBorrowInterestInUSD = 0;

            for(var i = 0; i < borrowItems.length; i++){
                const cTokenAddr = borrowItems[i].cTokenAddr;
                const borrowRatePerYear = (await compoundMethods.getBorrowRatePerBlock(cTokenAddr)) * numberOfBlocks;
                const borrowBalance = await compoundMethods.getBorrowAmount(acc, cTokenAddr);
                const priceInUSD = await compoundMethods.getPriceInUSD(cTokenAddr);

                _totalBorrowInterestInUSD += borrowRatePerYear * borrowBalance * priceInUSD;
            }

            return _totalBorrowInterestInUSD;
        })()


        return totalSupplyInterestInUSD - totalBorrowInterestInUSD;
    })()

    UIData[`totalInterestInUSD returned`] = totalInterestInUSD;
    UIData[`totalInterestInUSD actual`] = totalInterestInUSD_actual;

    return UIData;

}


async function accountProfile_supplyObj(acc, accountProfileWrapped){
      const UIData = {}

      const UIDataCell_Supply_obj = {
          amount: null,
          valueInUSD_: null,
          suppliedInUsdAsCollateral_: null
      }

      for(var i = 0; i < accountProfileWrapped.suppliedAssets.length; i++){

          const item = accountProfileWrapped.suppliedAssets[i];
          const cTokenAddr = item.asset.cTokenAddr;
          const amount = item.asset.amount;
          const underlyingSymbol_ = item.asset.underlyingSymbol_;
          const valueInUSD_ = item.asset.valueInUSD_;
          const compSpeed_ = item.asset.compSpeed_;
          const collateralFactorMantissa_ = item.collateralFactorMantissa_;
          const suppliedInUsdAsCollateral_ = item.suppliedInUsdAsCollateral_;

          const UIData_Supply_Returned = Utils.clone(UIDataCell_Supply_obj);
          const UIData_Supply_Actual = Utils.clone(UIDataCell_Supply_obj);

          const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);

          UIData_Supply_Returned.amount = amount / 10**decimals;
          UIData_Supply_Returned.valueInUSD_ = valueInUSD_ / 10**18;
          UIData_Supply_Returned.suppliedInUsdAsCollateral_ = suppliedInUsdAsCollateral_ / 10**18;

          UIData[`${underlyingSymbol_} returned`] = UIData_Supply_Returned;

          UIData_Supply_Actual.amount = await compoundMethods.getUnderlyingBalanceOfAnAcc(acc, cTokenAddr);
          UIData_Supply_Actual.valueInUSD_ = await compoundMethods.getSuppliedValueInUSD(acc, cTokenAddr);
          UIData_Supply_Actual.suppliedInUsdAsCollateral_ = UIData_Supply_Actual.valueInUSD_ * (await compoundMethods.getCollateralFactor(cTokenAddr));

          UIData[`${underlyingSymbol_} actual `] = UIData_Supply_Actual;

      }

      return UIData;
}

async function accountProfile_borrowObj(acc, accountProfileWrapped){
      const UIData = {}

      const UIDataCell_Borrow_obj = {
          amount: null,
          valueInUSD_: null
      }

      for(var i = 0; i < accountProfileWrapped.borrowedAssets.length; i++){

          const item = accountProfileWrapped.borrowedAssets[i];
          const cTokenAddr = item.asset.cTokenAddr;
          const amount = item.asset.amount;
          const underlyingSymbol_ = item.asset.underlyingSymbol_;
          const valueInUSD_ = item.asset.valueInUSD_;
          const compSpeed_ = item.asset.compSpeed_;


          const returned = Utils.clone(UIDataCell_Borrow_obj);
          const actual = Utils.clone(UIDataCell_Borrow_obj);

          const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);

          returned.amount = amount / 10**decimals;
          returned.valueInUSD_ = valueInUSD_ / 10**18;

          UIData[`${underlyingSymbol_} returned`] = returned;

          actual.amount = await compoundMethods.getBorrowAmount(acc, cTokenAddr);
          actual.valueInUSD_ = await compoundMethods.getBorrowedValueInUSD(acc, cTokenAddr);

          UIData[`${underlyingSymbol_} actual `] = actual;
      }

      return UIData;
}

async function accountProfile_accountProfileObj(acc, accountProfileWrapped){
      const UIData = {}

      const UIDataCell_AccountProfile_obj = {
          totalSuppliedInUSD_: null,
          totalBorrowedInUSD_: null,
          totalSuppliedInUsdAsCollateral_: null,
          borrowLimitPCTMantissa_: null,
      }

      const totalSuppliedInUSD_ = accountProfileWrapped.totalSuppliedInUSD_;
      const totalBorrowedInUSD_ = accountProfileWrapped.totalBorrowedInUSD_;
      const totalSuppliedInUsdAsCollateral_ = accountProfileWrapped.totalSuppliedInUsdAsCollateral_;
      const borrowLimitPCTMantissa_ = accountProfileWrapped.borrowLimitPCTMantissa_;
      const borrowLimitPCTLineItemMantissaList = accountProfileWrapped.borrowLimitPCTLineItemMantissaList;

      var returned = Utils.clone(UIDataCell_AccountProfile_obj);
      var actual = Utils.clone(UIDataCell_AccountProfile_obj);

      returned.totalSuppliedInUSD_ = totalSuppliedInUSD_ / 10**18;
      returned.totalBorrowedInUSD_ = totalBorrowedInUSD_ / 10**18;
      returned.totalSuppliedInUsdAsCollateral_ = totalSuppliedInUsdAsCollateral_ / 10**18;
      returned.borrowLimitPCTMantissa_ = borrowLimitPCTMantissa_ / 10**18;
///
      const assetList = TestData.exported.assetsList;

      const supplyAmount = TestData.exported.supplyAmounts;
      const borrowAmount = TestData.exported.borrowAmounts;

      actual.totalSuppliedInUSD_ = await (async () => {
          var result = 0;
          for(var i = 0; i < assetList.length; i++){
              const symbol = assetList[i];
              result += await compoundMethods.getUnderlyingValueInUSD(supplyAmount[symbol], Addresses.findAddress(`c${symbol}`, forkedBlockNumber));
          }

          return result;
      })()


      actual.totalBorrowedInUSD_ = await (async () => {
          var result = 0;
          for(var i = 0; i < assetList.length; i++){
              const symbol = assetList[i];
              result += await compoundMethods.getUnderlyingValueInUSD(borrowAmount[symbol], Addresses.findAddress(`c${symbol}`, forkedBlockNumber));
          }

          return result;
      })()


      actual.totalSuppliedInUsdAsCollateral_ = await (async () => {
          var result = 0;
          for(var i = 0; i < assetList.length; i++){
              const symbol = assetList[i];
              const supplyValueInUSD = await compoundMethods.getUnderlyingValueInUSD(supplyAmount[symbol], Addresses.findAddress(`c${symbol}`, forkedBlockNumber));
              const collateralFactor = await compoundMethods.getCollateralFactor(Addresses.findAddress(`c${symbol}`, forkedBlockNumber));

              result += supplyValueInUSD * collateralFactor;
          }

          return result;
      })()

      actual.borrowLimitPCTMantissa_ = actual.totalBorrowedInUSD_ / actual.totalSuppliedInUsdAsCollateral_;


      UIData[`Account Profile returned`] = returned;
      UIData[`Account Profile actual `] = actual;

      return UIData;
}

async function accountProfile_borrowLimitPCTLineItemMantissaListObj(acc, accountProfileWrapped){
      const UIData = {};
      const UIDataCell_borrowLimitPCTLineItemMantissaList_obj = [];
      const assetList = TestData.exported.assetsList;

      const supplyAmount = TestData.exported.supplyAmounts;
      const borrowAmount = TestData.exported.borrowAmounts;

      var returned = Utils.clone(UIDataCell_borrowLimitPCTLineItemMantissaList_obj);
      var actual = Utils.clone(UIDataCell_borrowLimitPCTLineItemMantissaList_obj);

      returned = (() => {
          var result = [];
          for(var i = 0; i < accountProfileWrapped.borrowLimitPCTLineItemMantissaList.length; i++){
              result[i] = accountProfileWrapped.borrowLimitPCTLineItemMantissaList[i] / 10**18;
          }
          return result;
      })()

      actual = await (async () => {
          var result = [];

          for(var i = 0; i < assetList.length; i++){
              const symbol = assetList[i];
              const supplyValueInUSD = await compoundMethods.getUnderlyingValueInUSD(supplyAmount[symbol], Addresses.findAddress(`c${symbol}`, forkedBlockNumber));
              const collateralFactor = await compoundMethods.getCollateralFactor(Addresses.findAddress(`c${symbol}`, forkedBlockNumber));
              const borrowValueInUSD = await compoundMethods.getUnderlyingValueInUSD(borrowAmount[symbol], Addresses.findAddress(`c${symbol}`, forkedBlockNumber));

              const lineItem = (() => {
                  if(collateralFactor == 0){
                      return 1;
                  }else{
                      return borrowValueInUSD / (supplyValueInUSD * collateralFactor);
                  }
              })()

              result[i] = lineItem;
          }

          return result;
      })()

      UIData[`borrowLimitPCTLineItemMantissaList returned`] = returned;
      UIData[`borrowLimitPCTLineItemMantissaList actual`] = actual;

      return UIData;
}

async function setupFarmingStateByAcc(acc){
    const assetsList = TestData.exported.assetsList;

    for(var i = 0; i < assetsList.length; i++){
        const symbol = assetsList[i];
        const cTokenAddr = Addresses.findAddress(`c${assetsList[i]}`, forkedBlockNumber);

        await setupFarmingStateByCToken(acc, cTokenAddr);
    }
}


async function farmingAccountProfile_suppliedAssets(acc, farmingAccountProfileWrapped){
    //set up farming stage

    const UIData = {};
    const UIDataColumn_suppliedAssets_obj = {
        amount: null,
        valueInUSD_: null,
        suppliedInUsdAsCollateral_: null
    }
    const suppliedAssets = farmingAccountProfileWrapped.suppliedAssets;
    const suppliedAssets_actual = Model.AccountProfile((await getAccountProfile(acc))).suppliedAssets;
    console.log("suppliedAssets_actual", suppliedAssets_actual);
    for(var i = 0; i < suppliedAssets.length; i++){
        const item = suppliedAssets[i];
        const cTokenAddr = item.asset.cTokenAddr;
        const symbol = item.asset.underlyingSymbol_;

        var returned = Utils.clone(UIDataColumn_suppliedAssets_obj);
        const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
        returned.amount = item.asset.amount / 10**decimals;
        returned.valueInUSD_ = await compoundMethods.getUnderlyingValueInUSD(returned.amount, cTokenAddr);
        returned.suppliedInUsdAsCollateral_ = returned.valueInUSD_ * (await compoundMethods.getCollateralFactor(cTokenAddr));

        UIData[`${symbol} returned`] = returned;
        var actual = Utils.clone(UIDataColumn_suppliedAssets_obj);

        for(var j = 0; j < suppliedAssets_actual.length; j++){
            const item_actual = suppliedAssets_actual[i];

            if(!contractsUtils.isSameAddress(item_actual.asset.cTokenAddr, cTokenAddr)) continue;

            const decimals_actual = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
            actual.amount = item_actual.asset.amount / 10**decimals_actual;
            actual.valueInUSD_ = await compoundMethods.getUnderlyingValueInUSD(actual.amount, cTokenAddr);
            actual.suppliedInUsdAsCollateral_ = returned.valueInUSD_ * (await compoundMethods.getCollateralFactor(cTokenAddr));

            UIData[`${symbol} actual  `] = actual;
            break;
        }

    }

    return UIData;

}

async function farmingAccountProfile_borrowedAssets(acc, farmingAccountProfileWrapped){
    //set up farming stage

    const UIData = {};
    const UIDataColumn_borrowedAssets_obj = {
        amount: null,
        valueInUSD_: null,
    }

    const borrowedAssets = farmingAccountProfileWrapped.borrowedAssets;
    const borrowedAssets_actual = Model.AccountProfile((await getAccountProfile(acc))).borrowedAssets;
    console.log("borrowedAssets_actual", borrowedAssets_actual);
    for(var i = 0; i < borrowedAssets.length; i++){
        const item = borrowedAssets[i];
        const cTokenAddr = item.asset.cTokenAddr;
        const symbol = item.asset.underlyingSymbol_;

        var returned = Utils.clone(UIDataColumn_borrowedAssets_obj);
        const decimals = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
        returned.amount = item.asset.amount / 10**decimals;
        returned.valueInUSD_ = await compoundMethods.getUnderlyingValueInUSD(returned.amount, cTokenAddr);

        UIData[`${symbol} returned`] = returned;

        var actual = Utils.clone(UIDataColumn_borrowedAssets_obj);

        for(var j = 0; j < borrowedAssets_actual.length; j++){
            const item_actual = borrowedAssets_actual[j];
            if(!contractsUtils.isSameAddress(item_actual.asset.cTokenAddr, cTokenAddr)) continue;

            const decimals_actual = await compoundMethods.getUnderlyingDecimals(cTokenAddr);
            actual.amount = item_actual.asset.amount / 10**decimals_actual;
            actual.valueInUSD_ = await compoundMethods.getUnderlyingValueInUSD(actual.amount, cTokenAddr);

            UIData[`${symbol} actual  `] = actual;
            break;
        }


    }

    return UIData;
}

async function farmingAccountProfile_attributes(acc, farmingAccountProfileWrapped){
    //set up farming stage

    const UIData = {};
    const UIDataColumn_attributes_obj = {
        totalSuppliedInUSD_: null,
        totalBorrowedInUSD_: null,
        totalSuppliedInUsdAsCollateral_: null,
        borrowLimitPCT: null
    }


    var returned = Utils.clone(UIDataColumn_attributes_obj);

    returned.totalSuppliedInUSD_ = farmingAccountProfileWrapped.totalSuppliedInUSD_ / 10**18;
    returned.totalBorrowedInUSD_ = farmingAccountProfileWrapped.totalBorrowedInUSD_ / 10**18;
    returned.totalSuppliedInUsdAsCollateral_ = farmingAccountProfileWrapped.totalSuppliedInUsdAsCollateral_ / 10**18;
    returned.borrowLimitPCT = farmingAccountProfileWrapped.borrowLimitPCTMantissa_ / 10**18;

    UIData[`returned`] = returned;

    var actual = Utils.clone(UIDataColumn_attributes_obj);
    const farmingAccountProfile_actual = Model.AccountProfile((await getAccountProfile(acc)));
    actual.totalSuppliedInUSD_ = farmingAccountProfile_actual.totalSuppliedInUSD_ / 10**18;
    actual.totalBorrowedInUSD_ = farmingAccountProfile_actual.totalBorrowedInUSD_ / 10**18;
    actual.totalSuppliedInUsdAsCollateral_ = farmingAccountProfile_actual.totalSuppliedInUsdAsCollateral_ / 10**18;
    actual.borrowLimitPCT = farmingAccountProfile_actual.borrowLimitPCTMantissa_ / 10**18;

    UIData[`actual`] = actual;

    return UIData;

}


async function createTestAccWithSupplyAndBorrow(){
    //supply
    const supplyAmounts = TestData.exported.supplyAmounts;
    const borrowAmounts = TestData.exported.borrowAmounts;

    const dai_amount = supplyAmounts.DAI;
    await compoundMethods.supply(Addresses.findAddress("cDAI", forkedBlockNumber), dai_amount);

    const usdc_amount = supplyAmounts.USDC;
    await compoundMethods.supply(Addresses.findAddress("cUSDC", forkedBlockNumber), usdc_amount);

    const usdt_amount = supplyAmounts.USDT;
    await compoundMethods.supply(Addresses.findAddress("cUSDT", forkedBlockNumber), usdt_amount);

    const wbtc_amount = supplyAmounts.WBTC;
    await compoundMethods.supply(Addresses.findAddress("cWBTC", forkedBlockNumber), wbtc_amount);

    const bat_amount = supplyAmounts.BAT;
    await compoundMethods.supply(Addresses.findAddress("cBAT", forkedBlockNumber), bat_amount);

    //borrow
    const dai_borrowAmount = borrowAmounts.DAI;
    await compoundMethods.borrow(Addresses.findAddress("cDAI", forkedBlockNumber), dai_borrowAmount);

    const usdc_borrowAmount = borrowAmounts.USDC;
    await compoundMethods.borrow(Addresses.findAddress("cUSDC", forkedBlockNumber), usdc_borrowAmount);

    const usdt_borrowAmount = borrowAmounts.USDT;
    await compoundMethods.borrow(Addresses.findAddress("cUSDT", forkedBlockNumber), usdt_borrowAmount);

    const wbtc_borrowAmount = borrowAmounts.WBTC;
    await compoundMethods.borrow(Addresses.findAddress("cWBTC", forkedBlockNumber), wbtc_borrowAmount);

    const bat_borrowAmount = borrowAmounts.BAT;
    await compoundMethods.borrow(Addresses.findAddress("cBAT", forkedBlockNumber), bat_borrowAmount);
}


async function createTestSupplyOnlyAccount(){

      const supplyAmounts = TestData.exported.supplyAmounts;

      const dai_amount = supplyAmounts.DAI;
      await compoundMethods.supply(Addresses.findAddress("cDAI", forkedBlockNumber), dai_amount);

      const usdc_amount = supplyAmounts.USDC;
      await compoundMethods.supply(Addresses.findAddress("cUSDC", forkedBlockNumber), usdc_amount);

      const usdt_amount = supplyAmounts.USDT;
      await compoundMethods.supply(Addresses.findAddress("cUSDT", forkedBlockNumber), usdt_amount);

      const wbtc_amount = supplyAmounts.WBTC;
      await compoundMethods.supply(Addresses.findAddress("cWBTC", forkedBlockNumber), wbtc_amount);

      const bat_amount = supplyAmounts.BAT;
      await compoundMethods.supply(Addresses.findAddress("cBAT", forkedBlockNumber), bat_amount);

}


async function setupFarmingStateByCToken(acc, cTokenAddr){
    //supply, borrow, check, repeat
    const collateralFactor = await compoundMethods.getCollateralFactor(cTokenAddr);

    if(collateralFactor == 0){
        return;
    }

    var borrowLimitPCTPerCToken = await compoundMethods.calBorrowLimitPCTPerCToken(acc, cTokenAddr);

    var amountToBorrow;
    var supplyAmount;
    var borrowAmount;


    while(borrowLimitPCTPerCToken < 0.75){

        supplyAmount = await compoundMethods.getUnderlyingBalanceOfAnAcc(acc, cTokenAddr);
        console.log("supplyAmount", supplyAmount);

        borrowAmount = await compoundMethods.getBorrowAmount(acc, cTokenAddr);
        console.log("borrowAmount", borrowAmount);

        amountToBorrow = supplyAmount * collateralFactor * (0.8 - parseInt(borrowLimitPCTPerCToken)) - borrowAmount;
        console.log("amountToBorrow", amountToBorrow);

        amountToBorrow = parseFloat(amountToBorrow.toFixed(2));

        await compoundMethods.borrow(cTokenAddr, amountToBorrow);

        borrowLimitPCTPerCToken = await compoundMethods.calBorrowLimitPCTPerCToken(acc, cTokenAddr);
        console.log("borrowLimitPCTPerCToken after borrow", borrowLimitPCTPerCToken);

        await compoundMethods.supply(cTokenAddr, amountToBorrow);

        borrowLimitPCTPerCToken = await compoundMethods.calBorrowLimitPCTPerCToken(acc, cTokenAddr);
        console.log("borrowLimitPCTPerCToken after supply", borrowLimitPCTPerCToken);
    }
}

async function getTotalCompReceivable(data){
      const acc = data.account;
      // find the current comp balance

      //this is only required for ganache to update state variable
      await contractsUtils.send(contract, "getCompProfile", [acc], "0");
      const compBalance = (await getCompProfile(acc)).balance;
      const blockNumber = await web3.eth.getBlockNumber();
      // mine the number blocks
      await devNode.mine(20);
      // find the curren comp balance again and calculate the delt

      //this is only required for ganache to update state variable
      await contractsUtils.send(contract, "getCompProfile", [acc], "0");
      const newCompBalance = (await getCompProfile(acc)).balance;
      const newBlockNumber = await web3.eth.getBlockNumber();

      // find the block number diff
      const totalCompReceivable_actual = newCompBalance - compBalance;
      const numberOfBlocks = newBlockNumber - blockNumber;
      //  get returned number by the block number diff
      const totalCompReceivable_returned = await contractsUtils.call(contract, "getTotalCompReceivable", [acc, numberOfBlocks]);


      const result = {
          "totalCompReceivable_actual": totalCompReceivable_actual,
          "totalCompReceivable_returned": totalCompReceivable_returned
      }

      console.log("result", result);

      return result;
}

async function getTotalCompReceivable_bulk(){
    const isRunErrorData = false;
    const clearErrorData = true;
    const singleItemTestingFunc = getTotalCompReceivable;
    const errorFileName = "erroredAccs";
    const testDataFilePath = `${process.env.libDataPath}/compound/accounts.json`;

    const UIData = await Utils.bulkTesting(isRunErrorData, clearErrorData, singleItemTestingFunc, errorFileName, testDataFilePath);

    Utils.UITable("Total Comp Receivable - returned vs actual", UIData);
}


async function compReceivableMantissaByAccountProfile_attributes(isRetest){
    //get account profile
    const acc = TestData.exported.defaultAcc;
    var farmingAccountProfileResultRaw;
    var farmingAccountProfileWrapped;
    var farmingAccountProfileAsInput
    if(isRetest == "0"){
          const accountProfileResultRaw = await getAccountProfile(acc);
          const accountProfileResultWrapped = Model.AccountProfile(accountProfileResultRaw);
          const accountProfileResultAsInput = Utils.rawStructReturnToInput(accountProfileResultRaw);
          Utils.consoleLogFullJSONString("accountProfileResultWrapped", accountProfileResultWrapped);
          //get recommended farming profile
          farmingAccountProfileResultRaw = await getFarmingAccountProfile(accountProfileResultAsInput);
          if(!farmingAccountProfileResultRaw.isValidated){
              console.log("farming account not validated");
              return;
          }
          farmingAccountProfileResultRaw = farmingAccountProfileResultRaw.farmingAccountProfile;
          //set up farming profile
          await setupFarmingStateByAcc(acc);
    }

    if(isRetest == "1"){
        farmingAccountProfileResultRaw = await getAccountProfile(acc);
    }

    farmingAccountProfileWrapped = Model.AccountProfile(farmingAccountProfileResultRaw);
    farmingAccountProfileAsInput = Utils.rawStructReturnToInput(farmingAccountProfileResultRaw);
    Utils.consoleLogFullJSONString("farmingAccountProfileAsInput", farmingAccountProfileWrapped);

    await getCompProfile_send(acc);
    const compReceivable = (await getCompProfile(acc)).balance;

    console.log("compReceivable", compReceivable);
    const blockNumber = await web3.eth.getBlockNumber();
    //get comp receivable

    //mine 10 blocks
    await devNode.mine(10);

    //get comp receivable again and calculate the diff as comp receivable actual
    await getCompProfile_send(acc);
    const compReceivableNew = (await getCompProfile(acc)).balance;
    console.log("compReceivableNew", compReceivableNew);

    const blockNumberNew = await web3.eth.getBlockNumber();
    //find blocknumber diff
    const compReceivable_actual = compReceivableNew - compReceivable;
    const blockNumberDiff = blockNumberNew - blockNumber;
    console.log("blockNumberDiff", blockNumberDiff);
    //get comp receivable returned
    const compReceivable_returned = await getCompReceivableMantissaByAccountProfile(farmingAccountProfileAsInput, blockNumberDiff);

    UIData = {}
    UIData["compReceivable_returned"] = compReceivable_returned;
    UIData["compReceivable_actual"] = compReceivable_actual;

    //additional
    const compReceivable_oneYear = await getCompReceivableMantissaByAccountProfile(farmingAccountProfileAsInput, TestData.exported.numberOfBlocks);
    UIData["compReceivable_oneYear farming state"] = compReceivable_oneYear / 10**18;
    return UIData;
}


async function getLiquidationRiskRanking(data){
    const acc = data.account;

    const liquidationRiskRanking = await contractsUtils.call(contract, "getLiquidationRiskRanking", [acc]);
    console.log(`${acc} - ${liquidationRiskRanking}`);

    const accountProfileResultRaw = await contractsUtils.call(contract, "getAccountProfile", [acc]);
    const accountProfileWrapped = Model.AccountProfile(accountProfileResultRaw);
    const accountProfileAsInput = Utils.rawStructReturnToInput(accountProfileResultRaw);

    Utils.consoleLogFullJSONString(`accountProfile ${acc}`, accountProfileWrapped);

    const UIColumnObj = {
        LiquidationRiskRanking_returned: null
    }

    const UIColumn = Utils.clone(UIColumnObj);

    UIColumn.LiquidationRiskRanking_returned = liquidationRiskRanking;

    return UIColumn;
}

async function getLiquidationRiskRanking_bulk(){
    const isRunErrorData = false;
    const clearErrorData = true;
    const singleItemTestingFunc = getLiquidationRiskRanking;
    const errorFileName = "erroredAccs";
    const testDataFilePath = `${process.env.libDataPath}/compound/accounts.json`;

    const UIData = await Utils.bulkTesting(isRunErrorData, clearErrorData, singleItemTestingFunc, errorFileName, testDataFilePath);
    return UIData;

}

async function getMaxInterestAccountProfileByAP(data){
    const acc = data.account;

    const accountProfileResultRaw = await contractsUtils.call(contract, "getAccountProfile", [acc]);
    const accountProfileWrapped = Model.AccountProfile(accountProfileResultRaw);
    Utils.consoleLogFullJSONString(`accountProfileWrapped`, accountProfileWrapped);

    //const accountProfileAsInput = Utils.rawStructReturnToInput(accountProfileResultRaw);

    const targetedBorrowLimitPCTMantissa = (10**18).toString();

    var maxFarmingProfileResultRaw = await contractsUtils.call(contract, "getFarmingAccountProfileByAP", [accountProfileWrapped, targetedBorrowLimitPCTMantissa]);

    if(maxFarmingProfileResultRaw.isValidated){
        maxFarmingProfileResultRaw = maxFarmingProfileResultRaw.farmingAccountProfile;
        const maxFarmingProfileWrapped = Model.AccountProfile(maxFarmingProfileResultRaw);
        //const maxFarmingProfileAsInput = Utils.rawStructReturnToInput(maxFarmingProfileResultRaw);
        Utils.consoleLogFullJSONString(`maxFarmingProfileWrapped`, maxFarmingProfileWrapped);

        const maxInterestAccountProfileResultRaw = await contractsUtils.call(contract, "getMaxInterestAccountProfileByAP", [maxFarmingProfileWrapped]);

        if(maxInterestAccountProfileResultRaw.isValidated){
            const maxInterestAccountProfileWrapped = Model.AccountProfile(maxInterestAccountProfileResultRaw.maxInterestAccountProfile);
            Utils.consoleLogFullJSONString(`maxInterestAccountProfileWrapped`, maxInterestAccountProfileWrapped);
        }
    }

    return "";
}

async function getMaxInterestAccountProfileByAP_bulk(){
    const isRunErrorData = false;
    const clearErrorData = true;
    const singleItemTestingFunc = getMaxInterestAccountProfileByAP;
    const errorFileName = "erroredAccs";
    const testDataFilePath = `${process.env.libDataPath}/compound/accounts.json`;

    const UIData = await Utils.bulkTesting(isRunErrorData, clearErrorData, singleItemTestingFunc, errorFileName, testDataFilePath);
    return UIData;
}

async function getAccountInterestProfile(data){
    const acc = data.account;
    const numberOfBlocks = TestData.exported.numberOfBlocks;

    const accountInterestProfileResultRaw = await contractsUtils.call(contract, "getAccountInterestProfile", [acc, numberOfBlocks]);
    const accountInterestProfileByAccWrapped = Model.AccountInterestProfile(accountInterestProfileResultRaw);

    Utils.consoleLogFullJSONString("accountInterestProfileByAccWrapped", accountInterestProfileByAccWrapped);

    //test supplyInterestsObj
    var UIData = await accountInterestProfile_supplyInterestsObj(acc, numberOfBlocks, accountInterestProfileByAccWrapped);
    Utils.UITable("supply Interests Obj - Returned vs Actual", UIData);
    //test borrowInterestsObj
    UIData = await accountInterestProfile_borrowInterestsObj(acc, numberOfBlocks, accountInterestProfileByAccWrapped);
    Utils.UITable("borrow Interests Obj - Returned vs Actual", UIData);
    //test totalInterestInUSD_ and isPositiveInterest_ attr
    UIData = await accountInterestProfile_totalInterestInUSD(acc, numberOfBlocks, accountInterestProfileByAccWrapped);
    Utils.UITable("total Interest In USD - Returned vs Actual", UIData);

    return "";

}

async function getAccountInterestProfile_bulk(){
    const isRunErrorData = false;
    const clearErrorData = true;
    const singleItemTestingFunc = getAccountInterestProfile;
    const errorFileName = "erroredAccs";
    const testDataFilePath = `${process.env.libDataPath}/compound/accounts.json`;

    const UIData = await Utils.bulkTesting(isRunErrorData, clearErrorData, singleItemTestingFunc, errorFileName, testDataFilePath);
}

async function getAccountProfile_singleItem(data){
    const acc = data.account;

    const accountProfileResultRaw = await getAccountProfile(acc);
    const accountProfileWrapped = Model.AccountProfile(accountProfileResultRaw);

    Utils.consoleLogFullJSONString("AccountProfile", accountProfileWrapped);

    var UIData = await accountProfile_supplyObj(acc, accountProfileWrapped);
    Utils.UITable("Supply Asset Testing - Returned vs Actual", UIData);

    UIData = await accountProfile_borrowObj(acc, accountProfileWrapped);
    Utils.UITable("Borrow Asset Testing - Returned vs Actual", UIData);

    UIData = await accountProfile_accountProfileObj(acc, accountProfileWrapped);
    UIData = Utils.UITable("Account Profile - returned vs actual", UIData);

    UIData = await accountProfile_borrowLimitPCTLineItemMantissaListObj(acc, accountProfileWrapped);
    UIData = Utils.UITable("borrowLimitPCTLineItemMantissaList - returned vs actual", UIData);

}

async function getAccountProfile_bulk(){
    const isRunErrorData = false;
    const clearErrorData = true;

    const singleItemTestingFunc = getAccountProfile_singleItem;
    const errorFileName = "erroredAccs";
    //const testAccounts = (await Utils.readFile(`${process.env.libDataPath}/compound/accounts.json`)).accounts;
    const testAccounts = [TestData.exported.defaultAcc];

    const UIData = await Utils.bulkTesting(isRunErrorData, clearErrorData, singleItemTestingFunc, errorFileName, testAccounts);
}



module.exports =  {
     init,
     getAccountProfile,
     accountProfile_supplyObj,
     accountProfile_borrowObj,
     accountProfile_accountProfileObj,
     accountProfile_borrowLimitPCTLineItemMantissaListObj,
     createTestAccWithSupplyAndBorrow,
     setupFarmingStateByCToken,
     createTestSupplyOnlyAccount,
     getAccountInterestProfile,
     accountInterestProfile_supplyInterestsObj,
     accountInterestProfile_borrowInterestsObj,
     accountInterestProfile_totalInterestInUSD,
     getFarmingAccountProfile,
     setupFarmingStateByAcc,
     farmingAccountProfile_suppliedAssets,
     farmingAccountProfile_borrowedAssets,
     farmingAccountProfile_attributes,
     getCompProfile,
     compReceivableMantissaByAccountProfile_attributes,
     getLiquidationRiskRanking_bulk,
     getMaxInterestAccountProfileByAP,
     getMaxInterestAccountProfileByAP_bulk,
     getAccountInterestProfile_bulk,
     getAccountProfile_bulk,
     getTotalCompReceivable_bulk
}
