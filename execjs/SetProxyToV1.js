const network = "private_mainnet";

const evn = require("../evn.json");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CompFarmingSummaryV1 = artifacts.require("./CompFarmingSummaryV1.sol");
const CompFarmingSummaryV2 = artifacts.require("./CompFarmingSummaryV2.sol");
const CompFarmingSummaryProxy = artifacts.require("./CompFarmingSummaryProxy.sol");

var compFarmingSummaryProxy;
var compFarmingSummaryV1;
var compFarmingSummaryV2;
var CompFarmingSummaryProxyContract;

module.exports = function(callback) {
    main();
}

async function main(){

    await renderContracts();
    //await exec();

}

async function exec(){
      try{
          await implementV1();
      }catch(e){
          console.log(e);
      }
}

async function renderContracts(){
    try{
        compFarmingSummaryProxy = await CompFarmingSummaryProxy.at("0x2bDC38f7Fc252e2632c6006271c90492a6b1acf0");
        compFarmingSummaryV1 = await CompFarmingSummaryV1.at("0x2d00355a88310FEC7513E7B868c1D9b70a6Bf66D");

    }catch(e){
        console.log(e);
    }

}

async function implementV1(){

      var estimatedGas_1 = await compFarmingSummaryProxy._setPendingImplementation.estimateGas(compFarmingSummaryV1.address);
      var gasPrice = await web3.eth.getGasPrice();
      var gasCost_1 = estimatedGas_1 * gasPrice / 10**18;

      rl.question(`_setPendingImplementation: The estimated gas is ${estimatedGas_1}, gas price is ${gasPrice}, total gas cost ${gasCost_1} eth is would you like to continue? [Y/N]`, async function(answer) {


          if(answer == "N"){
              console.log("request canceled!");
          }

          if(answer == "Y"){
              await compFarmingSummaryProxy._setPendingImplementation(compFarmingSummaryV1.address);
              console.log("pendingCompFarmingSummaryImplmentation", await compFarmingSummaryProxy.pendingCompFarmingSummaryImplmentation());

              var estimatedGas_2 = await compFarmingSummaryV1._become.estimateGas(compFarmingSummaryProxy.address);
              var gasCost_2 = estimatedGas_2 * gasPrice / 10**18;
              rl.question(`_setPendingImplementation: The estimated gas is ${estimatedGas_2}, total gas cost ${gasCost_2} eth is would you like to continue? [Y/N]`, async function(answer) {


                  if(answer == "N"){
                      console.log("request canceled!");
                  }

                  if(answer == "Y"){

                      var result = await compFarmingSummaryV1._become(compFarmingSummaryProxy.address);
                      console.log("new compFarmingSummaryImplmentation", await compFarmingSummaryProxy.compFarmingSummaryImplmentation());

                  }else{
                      console.log("invaid input!");
                  }


              })



          }else{
              console.log("invaid input!");
          }


      })





}

async function implementV2(){

      await compFarmingSummaryProxy._setPendingImplementation(compFarmingSummaryV2.address);
      console.log("pendingCompFarmingSummaryImplmentation", await compFarmingSummaryProxy.pendingCompFarmingSummaryImplmentation());

      var result = await compFarmingSummaryV2._become(compFarmingSummaryProxy.address);
      console.log("new compFarmingSummaryImplmentation", await compFarmingSummaryProxy.compFarmingSummaryImplmentation());

      CompFarmingSummaryProxyContract = await CompFarmingSummaryV2.at(compFarmingSummaryProxy.address);
}





async function log() {
    var loggings_uint = await CompFarmingSummaryContract.getLoggings_uint();
    console.log("Loggings_uint: ", loggings_uint.toString());

    var loggings_address = await CompFarmingSummaryContract.getLoggings_address();
    console.log("loggings_address: ", loggings_address.toString());

    var loggins_string = await CompFarmingSummaryContract.getLoggins_string();
    console.log("loggins_string: ", loggins_string.toString());

    await CompFarmingSummaryContract.clearLogs();

}
