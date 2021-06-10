const axios = require('axios')
const fs = require('fs');

const Contract1 = artifacts.require("./V3/CompFarmingSummaryV3.sol");
const Contract2 = artifacts.require("./V3/TestMyCompFarmingPrediction.sol");

const ContractsToExplorer = [Contract1, Contract2];


module.exports = function(deployer) {
        migrateABI();
}

async function migrateABI(){


    try{


      const abis = [];

      for(var i = 0; i < ContractsToExplorer.length; i++){
          abis.push(await createABIInput(ContractsToExplorer[i]));
      }


      await axios.post("http://127.0.0.1:8081/addABI", abis)

      //clear old abi


    }catch(e){
        console.log("error! Please ensure the private block explorer server running!")
    }
}

async function createABIInput(Contract){
        return    {
                    address: (await Contract.deployed()).address,
                    abi: {contractName: Contract.contractName, abi: Contract.abi}
                  }
}
