const { merge } = require('sol-merger');

var fs = require('fs')

async function mergeSol(savingTo, contractLocation){
  // Get the merged code as a string
  const mergedCode = await merge(contractLocation);
  // Print it out or write it to a file etc.
  //console.log(mergedCode);

  fs.writeFile(savingTo, mergedCode, function(err){
      console.log("sol merger err: ", err);
  })
}

var contractLocation = "./contracts/V3/CompFarmingSummaryV3.sol";
var savingTo = "./mergedContracts/Merged_CompFarmingSummaryV3.sol";
mergeSol(savingTo, contractLocation);
