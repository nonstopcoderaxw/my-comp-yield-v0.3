listening at http://:::8302
===Retesting===
============================================================================================================
project_1 {
  projectPATH: '/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction',
  contractsMap: {
    TestMyCompFarmingPrediction: { address: '0xB144A65998599Da0ee76Ce1168d1078231aA0973' }
  }
}
============================================================================================================
FromAddress is set to 0x0457F40b63aF465a7a31efCD060095679491a248
============================================================================================================
============================================================================================================
accountProfileAsInput [
    [
        [
            [
                "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "9999999999999866948808",
                "DAI",
                "10006329999999866864586",
                "67000000000000000"
            ],
            "750000000000000000",
            "7504747499999900148439"
        ],
        [
            [
                "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "29999999999",
                "USDC",
                "29999999999000000000000",
                "67000000000000000"
            ],
            "750000000000000000",
            "22499999999250000000000"
        ],
        [
            [
                "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "19999999999",
                "USDT",
                "19999999999000000000000",
                "9650000000000000"
            ],
            "0",
            "0"
        ],
        [
            [
                "0xccF4429DB6322D5C611ee964527D42E5d685DD6a",
                "64999999",
                "WBTC",
                "29345205048535300000000",
                "10750000000000000"
            ],
            "650000000000000000",
            "19074383281547945000000"
        ],
        [
            [
                "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "999999999999906193284",
                "BAT",
                "1120654999999894875034",
                "1950000000000000"
            ],
            "650000000000000000",
            "728425749999931668772"
        ]
    ],
    [],
    "90472190046535061739620",
    "0",
    "49807556530797776817211",
    "0",
    [
        "0",
        "0",
        "0",
        "0",
        "0"
    ]
]
Retesting Errored!
============================================================================================================
TypeError: Cannot read property 'apply' of undefined
    at ContractsUtils.call (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/cLibs/nodejs/ContractsUtils.js:182:47)
    at Object.getFarmingAccountProfile (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/model/myCompFarmingPredictionMethods.js:40:65)
    at Object.public_getFarmingAccountProfile [as testMethod] (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/ATC_entry.js:108:58)
    at async Object.automated_testing_entry (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/myCompFarmingPrediction/ATC_Testing/ATC_entry.js:58:9)
    at async web3Testing (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/AutomatedSolidityTestingCenter/start.js:103:5)
    at async Server.<anonymous> (/Users/main/Documents/macDocumentBackup062020/coding/gitProjects/AutomatedSolidityTestingCenter/start.js:42:11)
