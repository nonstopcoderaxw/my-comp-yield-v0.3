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
Testing on 0x0457F40b63aF465a7a31efCD060095679491a248
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "83999999999999817904444",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "92005115999999800550919",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "69003836999999850413189"
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "7499999999",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "7499999999000000000000",
                "compSpeed_": "4187294013512035"
            },
            "collateralFactorMantissa_": "0",
            "suppliedInUsdAsCollateral_": "0"
        }
    ],
    "borrowedAssets": [],
    "totalSuppliedInUSD_": "99505115998999800550919",
    "totalBorrowedInUSD_": "0",
    "totalSuppliedInUsdAsCollateral_": "69003836999999850413189",
    "accountCapital_": "99505115998999800550919",
    "borrowLimitPCTMantissa_": "0",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Supply Asset Testing - Returned vs Actual
============================================================================================================
┌───────────────┬───────────────────┬───────────────────┬────────────────────────────┐
│    (index)    │      amount       │    valueInUSD_    │ suppliedInUsdAsCollateral_ │
├───────────────┼───────────────────┼───────────────────┼────────────────────────────┤
│ DAI returned  │ 83999.99999999983 │ 92005.1159999998  │     69003.83699999985      │
│  DAI actual   │ 83999.99999999981 │ 92005.11599999979 │     69003.83699999984      │
│ USDT returned │    7499.999999    │ 7499.999999000001 │             0              │
│ USDT actual   │ 7499.999999999846 │ 7499.999999999846 │             0              │
└───────────────┴───────────────────┴───────────────────┴────────────────────────────┘
Borrow Asset Testing - Returned vs Actual
============================================================================================================
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
Addresses.findAddress(`c${symbol}`, forkedBlockNumber) 0x5d3a536e4d6dbd6114cc1ead35777bab948e3643
supplyAmount[symbol] 84000
result 0
Addresses.findAddress(`c${symbol}`, forkedBlockNumber) 0x39aa39c021dfbae8fac545936693ac917d5e7563
supplyAmount[symbol] 0
result 92005.11600000001
Addresses.findAddress(`c${symbol}`, forkedBlockNumber) 0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9
supplyAmount[symbol] 7500
result 92005.11600000001
Addresses.findAddress(`c${symbol}`, forkedBlockNumber) 0xC11b1268C1A384e55C48c2391d8d480264A3A7F4
supplyAmount[symbol] 0
result 99505.11600000001
Addresses.findAddress(`c${symbol}`, forkedBlockNumber) 0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e
supplyAmount[symbol] 0
result 99505.11600000001
Account Profile - returned vs actual
============================================================================================================
┌──────────────────────────┬─────────────────────┬─────────────────────┬─────────────────────────────────┬─────────────────────────┐
│         (index)          │ totalSuppliedInUSD_ │ totalBorrowedInUSD_ │ totalSuppliedInUsdAsCollateral_ │ borrowLimitPCTMantissa_ │
├──────────────────────────┼─────────────────────┼─────────────────────┼─────────────────────────────────┼─────────────────────────┤
│ Account Profile returned │  99505.11599899981  │          0          │        69003.83699999985        │            0            │
│ Account Profile actual   │  99505.11600000001  │   11027.07243989    │            69003.837            │   0.15980375757785759   │
└──────────────────────────┴─────────────────────┴─────────────────────┴─────────────────────────────────┴─────────────────────────┘
borrowLimitPCTLineItemMantissaList - returned vs actual
============================================================================================================
┌─────────────────────────────────────────────┬───────────────────────┬──────────┬───┬──────────┬──────────┐
│                   (index)                   │           0           │    1     │ 2 │    3     │    4     │
├─────────────────────────────────────────────┼───────────────────────┼──────────┼───┼──────────┼──────────┤
│ borrowLimitPCTLineItemMantissaList returned │           0           │    0     │   │          │          │
│  borrowLimitPCTLineItemMantissaList actual  │ 0.0025396825396825397 │ Infinity │ 1 │ Infinity │ Infinity │
└─────────────────────────────────────────────┴───────────────────────┴──────────┴───┴──────────┴──────────┘
============================================================================================================
End Testing!
