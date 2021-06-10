//NOTE: this file has to be placed at the root of the truffle project folder
//IMPORTANT: Don't use relative URLs
require('dotenv').config();
const fs = require('fs');
const Web3 = require("web3");
const TestData = require("./testData/testData.js");

const ContractsUtils = require(`${process.env.libPath}/ContractsUtils.js`);
const CompoundMethods = require(`${process.env.libPath}/CompoundMethods.js`);
const UniswapMethods = require(`${process.env.libPath}/UniswapMethods.js`);

const Utils = require(`${process.env.libPath}/Utils.js`);

const Model = require("./model/myCompFarmingPredictionModel.js");
const Methods = require("./model/myCompFarmingPredictionMethods.js");

const project_1_name = "myCompFarmingPrediction";

var web3;
var fromAddress = process.env.fromAddress;
var fromPvk = process.env.fromPvk;
var forkedBlockNumber;

var project_1;
var contract;

var contractsUtils;
var compoundMethods;
var uniswapMethods;

var isRetest;




async function automated_testing_entry(_projects, _forkedBlockNumber, _isRetest){

    web3 = await Utils.initWeb3();
    project_1 = _projects[project_1_name];
    forkedBlockNumber = _forkedBlockNumber;
    isRetest = _isRetest;

    contractsUtils = new ContractsUtils(web3, fromAddress, fromPvk);
    compoundMethods = new CompoundMethods(web3, fromAddress, fromPvk);
    uniswapMethods = new UniswapMethods(web3, fromAddress, fromPvk);

    Utils.consoleSpace();
    console.log("project_1", project_1);
    await preTestingProcess();
    Utils.consoleSpace();

    //methods being tested go here
    if(isRetest == "0" && process.env.accountSetup == "Yes"){
        await defaultAccountSetup();
    }

    if(process.env.runTest == "Yes"){
        await this.testMethod();
    }
}
async function public_getMaxInterestAccountProfileByAP_bulk(){
    Utils.consoleHeader("Testing Method - getMaxInterestAccountProfileByAP_bulk");

    await Methods.getMaxInterestAccountProfileByAP_bulk();
}
async function public_getMaxInterestAccountProfileByAP(){
    Utils.consoleHeader("Testing Method - getMaxInterestAccountProfileByAP");

    await Methods.getMaxInterestAccountProfileByAP();

}

async function public_getLiquidationRiskRanking(){
    Utils.consoleHeader("Testing Method - getLiquidationRiskRanking");
    var UIData = await Methods.getLiquidationRiskRanking_bulk();

    Utils.UITable("getLiquidationRiskRanking - Returned vs Actual", UIData);
}

async function public_getAccountProfile_bulk(){

    Utils.consoleHeader("Testing Method - getAccountProfile_bulk");
    await Methods.getAccountProfile_bulk();

}

async function public_getAccountInterestProfile_bulk(){
    Utils.consoleHeader("Testing Method - public_getAccountInterestProfile_bulk");
    await Methods.getAccountInterestProfile_bulk();
}


async function public_getFarmingAccountProfile(){
    const acc = TestData.exported.defaultAcc;

    //set up farming state
    var accountProfileAsInput;
    if(isRetest == "0"){
        accountProfileAsInput = Utils.rawStructReturnToInput(await Methods.getAccountProfile(acc));
        //update accountProfile_onlySupply
        await Utils.createJSONDataFile("accountProfile_onlySupply", accountProfileAsInput);
    }else{
        accountProfileAsInput = await TestData.exported.accountProfile_onlySupply;
    }

    Utils.consoleLogFullJSONString("accountProfileAsInput", accountProfileAsInput);

    const farmingAccountProfileRawResult = await Methods.getFarmingAccountProfile(accountProfileAsInput);

    if(!farmingAccountProfileRawResult.isValidated){
        console.log("not valid account profile for farming!");
    }

    const farmingAccountProfileWrapped = Model.AccountProfile(farmingAccountProfileRawResult.farmingAccountProfile);
    Utils.consoleLogFullJSONString("farmingAccountProfileWrapped", farmingAccountProfileWrapped);

    //setup farming state
    await Methods.setupFarmingStateByAcc(acc);

    var UIData = await Methods.farmingAccountProfile_suppliedAssets(acc, farmingAccountProfileWrapped);
    Utils.UITable("Farming Profile Supplied Asset - returned vs actual", UIData);

    UIData = await Methods.farmingAccountProfile_borrowedAssets(acc, farmingAccountProfileWrapped);
    Utils.UITable("Farming Profile Borrowed Asset - returned vs actual", UIData);

    UIData = await Methods.farmingAccountProfile_attributes(acc, farmingAccountProfileWrapped);
    Utils.UITable("Farming Profile attributes - returned vs actual", UIData);

}


async function public_getCompProfile(){
    const acc = TestData.exported.acc2;
    //this is only required for ganache to update state variable
    await contractsUtils.send(contract, "getCompProfile", [acc], "0");
    const getCompProfileResultRaw = await Methods.getCompProfile(acc);
    console.log("current ganache block number", await web3.eth.getBlockNumber());
    console.log("getCompProfileResultRaw", getCompProfileResultRaw);
}

async function getTotalCompReceivable_bulk(){
    Utils.consoleHeader("Testing Method - getTotalCompReceivable_bulk");
    await Methods.getTotalCompReceivable_bulk();
}

async function public_getCompReceivableMantissaByAccountProfile(){
    var UIData = await Methods.compReceivableMantissaByAccountProfile_attributes(isRetest);

    Utils.UITable("Total Comp Receivable on Farming Profile - returned vs actual", UIData);

}



// standard funcs
async function loadingContracts(){
    contract = await contractsUtils.loadLocalContractByProject("TestMyCompFarmingPrediction", project_1);
}

async function defaultAccountSetup(){
    console.log("Setting up accounts");
    await Methods.createTestSupplyOnlyAccount();
    console.log("accounts set up");
    Utils.consoleSpace();
}

async function preTestingProcess(){
    await loadingContracts();
    await initLibs(fromAddress);
}

async function initLibs(_fromAddress){

    fromAddress = _fromAddress;
    TestData.init(web3, forkedBlockNumber);
    Methods.init(web3, fromAddress, fromPvk, contract, forkedBlockNumber);

    Utils.consoleSpace();
    console.log(`FromAddress is set to ${_fromAddress}`);
    Utils.consoleSpace();
}


module.exports = {
     automated_testing_entry,
     testMethod: public_getAccountProfile_bulk
}
