const network = "private_mainnet";
//const compFarmingSummary = artifacts.require("./CompFarmingSummary.sol");
const CompFarmingSummaryProxy = artifacts.require("./CompFarmingSummaryProxy.sol");
const CompFarmingSummaryV1 = artifacts.require("./CompFarmingSummaryV1.sol");
const CompFarmingSummaryV2 = artifacts.require("./CompFarmingSummaryV2.sol");

module.exports = function(deployer) {
    estimatedGas();
    deployer.deploy(CompFarmingSummaryV1);
    deployer.deploy(CompFarmingSummaryProxy);
    //deployer.deploy(CompFarmingSummaryV2);

}

async function estimatedGas(){
  console.log("estimated gas to deploy CompFarmingSummaryV1: ", await CompFarmingSummaryV1.new.estimateGas());
  console.log("estimated gas to deploy CompFarmingSummaryProxy: ", await CompFarmingSummaryProxy.new.estimateGas());

}
