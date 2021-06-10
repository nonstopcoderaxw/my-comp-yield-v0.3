const network = "private_mainnet";

const CompFarmingSummaryV3 = artifacts.require("./V3/CompFarmingSummaryV3.sol");
const TestMyCompFarmingPrediction = artifacts.require("./V3/TestMyCompFarmingPrediction.sol");


module.exports = function(deployer) {
    estimatedGas();
    deployer.deploy(CompFarmingSummaryV3);
    deployer.deploy(TestMyCompFarmingPrediction);
}

async function estimatedGas(){
  console.log("estimated gas to deploy CompFarmingSummaryV3: ", await CompFarmingSummaryV3.new.estimateGas());
}
