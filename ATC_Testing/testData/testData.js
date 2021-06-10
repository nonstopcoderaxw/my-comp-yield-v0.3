require('dotenv').config();
const fs = require('fs');
const CompoundMethods = require(`${process.env.libPath}/CompoundMethods.js`);
const Addresses = require(`${process.env.libPath}/Addresses.js`);
const Model = require("../model/myCompFarmingPredictionModel.js");

const fromAddress = process.env.fromAddress;
const fromPvk = process.env.fromPvk;
const testDataPATH = `${__dirname}`;

var web3;
var blockNumber;
var compoundMethods;


function init(_web3, _blockNumber){
    web3 = _web3;
    blockNumber = _blockNumber;

    compoundMethods = new CompoundMethods(web3, fromAddress, fromPvk);
}

var exported = {
    numberOfBlocks: "2357170",
    defaultAcc: "0x0457F40b63aF465a7a31efCD060095679491a248",
    acc2: "0xC9877ce47D5B8545A9DF5beC532e55A105064700",
    assetsList: ["DAI", "USDC", "USDT", "WBTC", "BAT"],
    supplyAmounts: {
        DAI:  "84000",
        USDT: "7500",
        USDC: "0",
        WBTC: "0",
        BAT:  "0"
    },
    borrowAmounts: {
        DAI:  "0",
        USDT: "0",
        USDC: "0",
        WBTC: "0",
        BAT:  "0"
    },
    accountProfile_onlySupply: (async ()=>{
        return JSON.parse(await fs.promises.readFile(`${testDataPATH}/accountProfileAsInput_onlySupply.json`, "utf8"));
    })(),

    fetchCustomTestData: async function fetchCustomTestData(){
        var fileBody;
        fileBody = JSON.parse(await fs.promises.readFile(`${testDataPATH}/customData.json`, "utf8"));

        return fileBody;
    },

    createTestData_CompWealthyAccounts: async function createTestData_CompWealthyAccounts(){
        var fileBody;
        try{
            fileBody = JSON.parse(await fs.promises.readFile(`${testDataPATH}/${blockNumber}.json`, "utf8"));
        }catch(e){
            await fs.promises.writeFile(`${testDataPATH}/${blockNumber}.json`, JSON.stringify(await compoundMethods.fetchWealthyAccounts(blockNumber), null, 4));
            fileBody = JSON.parse(await fs.promises.readFile(`${testDataPATH}/${blockNumber}.json`, "utf8"));
        }

        return fileBody;
    },

    getCompWealthyAccounts: async function getCompWealthyAccounts(){
        var fileBody = JSON.parse(await fs.promises.readFile(`${testDataPATH}/${blockNumber}.json`, "utf8"));
        const result = [];
        for(var i = 0; i < fileBody.length; i++){
            result.push(fileBody[i].address);
        }

        return result;
    },

    project: function project(){
        return {
                  projectPATH: '/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/CompoundLiquidator',
                  contractsMap: {
                                  CompoundLiquidator: {
                                                        address: '0x35D016f916af917DEA24df551c842937a4f8b70c'
                                                      }
                                }
               }
    }
}



module.exports = {
     init,
     exported
}
