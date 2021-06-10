listening at http://:::8302
===Retesting===
============================================================================================================
project_1 {
  projectPATH: '/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction',
  contractsMap: {
    TestMyCompFarmingPrediction: { address: '0x9221a9265e9beCe1BFae14DD463a3f04a18a782B' }
  }
}
============================================================================================================
FromAddress is set to 0x0457F40b63aF465a7a31efCD060095679491a248
============================================================================================================
============================================================================================================
Testing Method - getAccountProfile_bulk
============================================================================================================
Retesting Errored!
============================================================================================================
ReferenceError: testAccountsFileBody is not defined
    at Object.bulkTesting (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/cLibs/nodejs/Utils.js:74:48)
    at Object.getAccountProfile_bulk (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/model/myCompFarmingPredictionMethods.js:907:32)
    at Object.public_getAccountProfile_bulk [as testMethod] (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/ATC_entry.js:83:19)
    at Object.automated_testing_entry (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/ATC_entry.js:58:20)
    at async web3Testing (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/AutomatedSolidityTestingCenter/start.js:103:5)
    at async Server.<anonymous> (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/AutomatedSolidityTestingCenter/start.js:42:11)
