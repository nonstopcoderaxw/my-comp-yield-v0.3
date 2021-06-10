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
Testing Method - getAccountProfile_bulk
============================================================================================================
Test Data Set Block Number: 11333037
============================================================================================================
Testing on 0xb6c0276ad1d87c6cf6dfa323d0c3f6840121c0ba
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "1000021370663397721005",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "486005386035557975419824",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "364504039526668481564868"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "270342126732671624315326",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "296105461068168497440952",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "400076072",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "65829637095880839280000",
                "compSpeed_": "435891381302109"
            }
        }
    ],
    "totalSuppliedInUSD_": "486005386035557975419824",
    "totalBorrowedInUSD_": "361935098164049336720952",
    "totalSuppliedInUsdAsCollateral_": "364504039526668481564868",
    "accountCapital_": "124070287871508638698872",
    "borrowLimitPCTMantissa_": "992952228002863624",
    "borrowLimitPCTLineItemMantissaList": [
        "0"
    ]
}
Supply Asset Testing - Returned vs Actual
============================================================================================================
┌──────────────┬────────────────────┬────────────────────┬────────────────────────────┐
│   (index)    │       amount       │    valueInUSD_     │ suppliedInUsdAsCollateral_ │
├──────────────┼────────────────────┼────────────────────┼────────────────────────────┤
│ ETH returned │ 1000.0213706633978 │ 486005.38603555795 │     364504.0395266685      │
│ ETH actual   │ 1000.0213706633976 │ 486005.38603555795 │     364504.0395266685      │
└──────────────┴────────────────────┴────────────────────┴────────────────────────────┘
Borrow Asset Testing - Returned vs Actual
============================================================================================================
┌───────────────┬────────────────────┬───────────────────┐
│    (index)    │       amount       │    valueInUSD_    │
├───────────────┼────────────────────┼───────────────────┤
│ DAI returned  │ 270342.12673267163 │ 296105.4610681685 │
│  DAI actual   │ 270342.12673267163 │ 296105.4610681685 │
│ WBTC returned │     4.00076072     │ 65829.63709588084 │
│ WBTC actual   │     4.00076072     │ 65829.63709588083 │
└───────────────┴────────────────────┴───────────────────┘
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
│ Account Profile returned │ 486005.38603555795  │  361935.0981640493  │        364504.0395266685        │   0.9929522280028636    │
│ Account Profile actual   │  99505.11600000001  │   11027.07243989    │            69003.837            │   0.15980375757785759   │
└──────────────────────────┴─────────────────────┴─────────────────────┴─────────────────────────────────┴─────────────────────────┘
borrowLimitPCTLineItemMantissaList - returned vs actual
============================================================================================================
┌─────────────────────────────────────────────┬───────────────────────┬──────────┬───┬──────────┬──────────┐
│                   (index)                   │           0           │    1     │ 2 │    3     │    4     │
├─────────────────────────────────────────────┼───────────────────────┼──────────┼───┼──────────┼──────────┤
│ borrowLimitPCTLineItemMantissaList returned │           0           │          │   │          │          │
│  borrowLimitPCTLineItemMantissaList actual  │ 0.0025396825396825397 │ Infinity │ 1 │ Infinity │ Infinity │
└─────────────────────────────────────────────┴───────────────────────┴──────────┴───┴──────────┴──────────┘
Testing on 0x86af94e5e8d3d583575bbafdd2dcb6b898a555e4
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "19001673143537498",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "9234718139393506340",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "6926038604545129755"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1585203737100",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1585203737100000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1188902802825000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "47192950749230122554547205",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "51690391762681004003872999",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "38767793822010753002904749"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "34173384785343380823950969",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "37430074182001819673092672",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1557180686097",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1557180686097000000000000",
                "compSpeed_": "33092681687527897"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "1065324",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "175291393856546760000",
                "compSpeed_": "435891381302109"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "230167115809188376825",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "22872857133538094946984",
                "compSpeed_": "427047063411319"
            }
        }
    ],
    "totalSuppliedInUSD_": "53275604734499143397379339",
    "totalBorrowedInUSD_": "39010303016626214314799656",
    "totalSuppliedInUsdAsCollateral_": "39956703550874357548034504",
    "accountCapital_": "14265301717872929082579683",
    "borrowLimitPCTMantissa_": "976314349029239838",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1309762818623120441",
        "965494047813228119"
    ]
}
Supply Asset Testing - Returned vs Actual
============================================================================================================
┌───────────────┬──────────────────────┬────────────────────┬────────────────────────────┐
│    (index)    │        amount        │    valueInUSD_     │ suppliedInUsdAsCollateral_ │
├───────────────┼──────────────────────┼────────────────────┼────────────────────────────┤
│ ETH returned  │ 0.019001673143537495 │ 9.234718139393507  │      6.92603860454513      │
│  ETH actual   │  0.0190016731435375  │ 9.234718139393507  │     6.9260386045451305     │
│ USDC returned │     1585203.7371     │    1585203.7371    │     1188902.8028250001     │
│ USDC actual   │  1585203.7371007702  │ 1585203.7371007702 │     1188902.8028255776     │
│ DAI returned  │  47192950.749230124  │  51690391.762681   │     38767793.822010756     │
│  DAI actual   │  47192950.74923013   │ 51690391.762681015 │     38767793.82201076      │
└───────────────┴──────────────────────┴────────────────────┴────────────────────────────┘
Borrow Asset Testing - Returned vs Actual
============================================================================================================
┌───────────────┬────────────────────┬────────────────────┐
│    (index)    │       amount       │    valueInUSD_     │
├───────────────┼────────────────────┼────────────────────┤
│ DAI returned  │ 34173384.78534338  │ 37430074.182001814 │
│  DAI actual   │ 34173384.78534338  │ 37430074.18200182  │
│ USDC returned │   1557180.686097   │   1557180.686097   │
│ USDC actual   │   1557180.686097   │   1557180.686097   │
│ WBTC returned │     0.01065324     │ 175.29139385654676 │
│ WBTC actual   │     0.01065324     │ 175.29139385654673 │
│ COMP returned │ 230.16711580918837 │ 22872.857133538095 │
│ COMP actual   │ 230.16711580918837 │ 22872.857133538095 │
└───────────────┴────────────────────┴────────────────────┘
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
│ Account Profile returned │  53275604.73449914  │  39010303.01662622  │        39956703.55087435        │   0.9763143490292399    │
│ Account Profile actual   │  99505.11600000001  │   11027.07243989    │            69003.837            │   0.15980375757785759   │
└──────────────────────────┴─────────────────────┴─────────────────────┴─────────────────────────────────┴─────────────────────────┘
borrowLimitPCTLineItemMantissaList - returned vs actual
============================================================================================================
┌─────────────────────────────────────────────┬───────────────────────┬────────────────────┬────────────────────┬──────────┬──────────┐
│                   (index)                   │           0           │         1          │         2          │    3     │    4     │
├─────────────────────────────────────────────┼───────────────────────┼────────────────────┼────────────────────┼──────────┼──────────┤
│ borrowLimitPCTLineItemMantissaList returned │           0           │ 1.3097628186231205 │ 0.9654940478132281 │          │          │
│  borrowLimitPCTLineItemMantissaList actual  │ 0.0025396825396825397 │      Infinity      │         1          │ Infinity │ Infinity │
└─────────────────────────────────────────────┴───────────────────────┴────────────────────┴────────────────────┴──────────┴──────────┘
============================================================================================================
End Testing!
