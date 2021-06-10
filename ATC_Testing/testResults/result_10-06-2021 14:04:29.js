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
Testing on 0xb00ba6778cf84100da676101e011b3d229458270
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "739546567826613012",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "359415934230894790766",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "269561950673171093074"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "462655029456445710",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "506745591108615529",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "380059193331461646"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "6197961669267",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "6197961669267000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "4648471251950250000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
                "amount": "417896963539997467",
                "underlyingSymbol_": "REP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "5863094398466164462",
                "compSpeed_": "0"
            },
            "collateralFactorMantissa_": "400000000000000000",
            "suppliedInUsdAsCollateral_": "2345237759386465784"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "4486802617709",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "4486802617709000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "6198327455041220469570757",
    "totalBorrowedInUSD_": "4486802617709000000000000",
    "totalSuppliedInUsdAsCollateral_": "4648743539197875889020504",
    "accountCapital_": "1711524837332220469570757",
    "borrowLimitPCTMantissa_": "965164582618206076",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "965221117765669200",
        "0"
    ]
}
errored!
============================================================================================================
End Testing!
