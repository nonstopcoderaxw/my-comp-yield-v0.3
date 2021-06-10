listening at http://:::8301
============================================================================================================
Running from block number 11333037 to 11333037
Starting the ganache node at block number: 11333037
cmd ganache-cli --account="0x5268ff7a2a5fbffd8e2dbc1c857f8cf4b28fdea7d7c4efe7f7b9e08e7460e4fc,100000000000000000000" --account "0xad867370fa88acdc65408c3af6f67461dc69a9b5ffcdcdde5450c144f278ed68,100000000000000000000" --account "0x4be17529c42cfd8eee16dd74214ddc79bdb595c355faaee8002ac839a42b041c,1000000000000000000000000000000" --fork https://cocky-shannon:jimmy-mating-charm-same-malt-stable@nd-265-322-919.p2pify.com@11333037 
Ganache PID: null
============================================================================================================
The ganache node is up - block number: 11333037
Not receiving test coins!
============================================================================================================
Migrating contracts at block number: 11333037
Migrating contracts...
The project migrated! Testing will start soon!
============================================================================================================
Start testing contracts at block number: 11333037
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
Test Data Set Block Number: 11333037
============================================================================================================
Testing on 0x737d5f02975318e35e830c23f8962727b9ac1fc8
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "162941164637899354596",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "79188591308195896836883",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "59391443481146922627662"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "71876486683140514133",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "78726243987557121989",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "59044682990667841491"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "59445360307",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "59445360307000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "79267317552183453958872",
    "totalBorrowedInUSD_": "59445360307000000000000",
    "totalSuppliedInUsdAsCollateral_": "59450488164137590469153",
    "accountCapital_": "19821957245183453958872",
    "borrowLimitPCTMantissa_": "999913745752205887",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Testing on 0xee2826453a4fd5afeb7ceffeef3ffa2320081268
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "7992511849110808968606856",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "8754190235819219952506120",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "6565642676864414964379590"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "5992415532336624131879728",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "6563486740152772075023734",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "8754190235819219952506120",
    "totalBorrowedInUSD_": "6563486740152772075023734",
    "totalSuppliedInUsdAsCollateral_": "6565642676864414964379590",
    "accountCapital_": "2190703495666447877482386",
    "borrowLimitPCTMantissa_": "999671633560071759",
    "borrowLimitPCTLineItemMantissaList": [
        "999671633560071759"
    ]
}
Testing on 0x7e6f6621388047c8a481d963210b514dbd5ea1b9
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "151830890453518881521331090",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "166300222482848777411432421",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "124725166862136583058574315"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "43905381031691",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "43905381031691000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "32929035773768250000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "113669342627236495325825851",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "124501917310269506093881728",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "7777387054206475",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3779771221409075817",
                "compSpeed_": "1993607545525854"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "32856362058916",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "32856362058916000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "210205603514539777411432421",
    "totalBorrowedInUSD_": "157358283148956727502957545",
    "totalSuppliedInUsdAsCollateral_": "157654202635904833058574315",
    "accountCapital_": "52847320365583049908474876",
    "borrowLimitPCTMantissa_": "998122983834236769",
    "borrowLimitPCTLineItemMantissaList": [
        "998210068124311727",
        "997793020258730353"
    ]
}
Testing on 0xaf289894855061fed86ab7713981a9310fd0c1cf
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "8826714270682",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4289739001980098",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3217304251485073"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "5000903331046054912789609",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "5477484417591412899923545",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "4108113313193559674942658"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "3743282804077569355390779",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4100013912023357637390164",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "5477484421881151901903643",
    "totalBorrowedInUSD_": "4100013912023357637390164",
    "totalSuppliedInUsdAsCollateral_": "4108113316410863926427731",
    "accountCapital_": "1377470509857794264513479",
    "borrowLimitPCTMantissa_": "998028436957872793",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "998028437739487342"
    ]
}
Testing on 0xdec15f1de39eb785bbea91adf8fa6390ecf066f7
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "723764239979603312136408",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "792738248285419528179695",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "594553686214064646134771"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "541667604576846733355551",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "593287985625415650197601",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "792738248285419528179695",
    "totalBorrowedInUSD_": "593287985625415650197601",
    "totalSuppliedInUsdAsCollateral_": "594553686214064646134771",
    "accountCapital_": "199450262660003877982094",
    "borrowLimitPCTMantissa_": "997871175273155585",
    "borrowLimitPCTLineItemMantissaList": [
        "997871175273155585"
    ]
}
Testing on 0x161fac24d54698755dab0fcd65e2c883928ca724
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "980772753836527309673162",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3056725403244612839692860",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "1834035241946767703815716"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "86511077268579846594",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "42043950997143462545451",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "31532963247857596909088"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "1886540175",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "3104166026881245982500000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "1862499616128747589500000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1868159425600344654459966",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2046193150700631899685346",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "3104166029980015336741756302238311",
    "totalBorrowedInUSD_": "2046193150700631899685346",
    "totalSuppliedInUsdAsCollateral_": "1862499617994315794694625300724804",
    "accountCapital_": "3104166027933822186041124402552965",
    "borrowLimitPCTMantissa_": "1098627420",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0"
    ]
}
Testing on 0x57adad5729e839acd4019fc9e79c2685a42ed489
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "49208723430014292117",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "23915193543369795897401",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "17936395157527346923050"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "25062425964162500056495",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "27450850096121222149378",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "20588137572090916612033"
        },
        {
            "asset": {
                "cTokenAddr": "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
                "amount": "128523617783055911059961",
                "underlyingSymbol_": "ZRX",
                "underlyingDecimals_": "18",
                "valueInUSD_": "47918745654234565879595",
                "compSpeed_": "1924466158925044"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "28751247392540739527757"
        },
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "231253986698517712227970",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "48394290542412103120235",
                "compSpeed_": "15481773966017"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "29036574325447261872141"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "6223405811",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "6223405811000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "4667554358250000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "9717772929806434273346",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "30286897001681223378023",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "18172138201008734026813"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "6394626798695232359",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "635466038120338715675",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "381279622872203229405"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "54249723",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "89264013211019027700000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "53558407926611416620000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "156823155919856560",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "32818225016192462",
                "compSpeed_": "15481773966017"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "94780770306602814826351",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "103813282936051756476487",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "15702995745",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "15702995745000000000000",
                "compSpeed_": "33092681687527897"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "5001892536",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "5001892536000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "89264013395843876386939249140307",
    "totalBorrowedInUSD_": "124518204035276772668949",
    "totalSuppliedInUsdAsCollateral_": "53558408046144743249737202191199",
    "accountCapital_": "89264013271325672351662476471358",
    "borrowLimitPCTMantissa_": "2324904876",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "5042383390558845643",
        "0",
        "1130237494559",
        "3364287706097011259",
        "0",
        "0",
        "0"
    ]
}
Testing on 0x432ccec6705eabe42629913136de07d741803cf5
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "591063599470406791984557",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "647391369436337088853893",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "485543527077252816640419"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "993158832920",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "993158832920000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "744869124690000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "441065541431788754338759",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "483098646464696790838488",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "743189740172",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "743189740172000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1640550202356337088853893",
    "totalBorrowedInUSD_": "1226288386636696790838488",
    "totalSuppliedInUsdAsCollateral_": "1230412651767252816640419",
    "accountCapital_": "414261815719640298015405",
    "borrowLimitPCTMantissa_": "996648063456896101",
    "borrowLimitPCTLineItemMantissaList": [
        "994964652031769273",
        "997745396523585365"
    ]
}
Testing on 0x2f89f40485f32276434a4ebe29a5d3a4b04cc1b0
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "52652871463736165421296128",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "57670637461358758249780227",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "43252978096019068687335170"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "39333535355808237484635164",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "43081981941681406708683410",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "57670637461358758249780227",
    "totalBorrowedInUSD_": "43081981941681406708683410",
    "totalSuppliedInUsdAsCollateral_": "43252978096019068687335170",
    "accountCapital_": "14588655519677351541096817",
    "borrowLimitPCTMantissa_": "996046603913421624",
    "borrowLimitPCTLineItemMantissaList": [
        "996046603913421624"
    ]
}
Testing on 0x6196ab64867361dae333f0b67dcb8d047ec34306
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "294816550459463723051441",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "322912272901700156394520",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "242184204676275117295890"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "220141148954837708843654",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "241120380309084787658745",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "322912272901700156394520",
    "totalBorrowedInUSD_": "241120380309084787658745",
    "totalSuppliedInUsdAsCollateral_": "242184204676275117295890",
    "accountCapital_": "81791892592615368735775",
    "borrowLimitPCTMantissa_": "995607375102714350",
    "borrowLimitPCTLineItemMantissaList": [
        "995607375102714350"
    ]
}
Testing on 0x04e921c430f41d3692d959b457fe82cfe73538c6
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2310309866132624971790818",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2530480086065197998977511",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1897860064548898499233133"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1724520170682584989358071",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1888865218428464656258905",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2530480086065197998977511",
    "totalBorrowedInUSD_": "1888865218428464656258905",
    "totalSuppliedInUsdAsCollateral_": "1897860064548898499233133",
    "accountCapital_": "641614867636733342718606",
    "borrowLimitPCTMantissa_": "995260532486850223",
    "borrowLimitPCTLineItemMantissaList": [
        "995260532486850223"
    ]
}
Testing on 0x240edc6143e1859f4c06bc3d7f7a7962be1ebbd7
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1532927022870778434197573",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1679013435223340748198167",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1259260076417505561148625"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1144245667065008487297314",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1253291134890636731128260",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1679013435223340748198167",
    "totalBorrowedInUSD_": "1253291134890636731128260",
    "totalSuppliedInUsdAsCollateral_": "1259260076417505561148625",
    "accountCapital_": "425722300332704017069907",
    "borrowLimitPCTMantissa_": "995259961275156127",
    "borrowLimitPCTLineItemMantissaList": [
        "995259961275156127"
    ]
}
Testing on 0xce11288fc510a2e5391d04505601915e4bd32061
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1150337715629696554112804",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1259963749591491006023200",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "944972812193618254517400"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "858476332569833302288300",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "940288268587405846163072",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1259963749591491006023200",
    "totalBorrowedInUSD_": "940288268587405846163072",
    "totalSuppliedInUsdAsCollateral_": "944972812193618254517400",
    "accountCapital_": "319675481004085159860128",
    "borrowLimitPCTMantissa_": "995042668375465834",
    "borrowLimitPCTLineItemMantissaList": [
        "995042668375465834"
    ]
}
Testing on 0xf63d52337c1a2dc613ea760797bd730fca72a07c
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "281525463745159273169149",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "308354558914609206742895",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "231265919185956905057171"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "210075576052500464338608",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "230095568374727706089613",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "308354558914609206742895",
    "totalBorrowedInUSD_": "230095568374727706089613",
    "totalSuppliedInUsdAsCollateral_": "231265919185956905057171",
    "accountCapital_": "78258990539881500653282",
    "borrowLimitPCTMantissa_": "994939371891246369",
    "borrowLimitPCTLineItemMantissaList": [
        "994939371891246369"
    ]
}
Testing on 0xccb06b8026cb33ee501476af87d5ccaf56883112
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "184658699381244938017184733",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "202256488773578199365284420",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "151692366580183649523963315"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "40708442959559",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "40708442959559000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "30531332219669250000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "138090403490567649275905193",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "151250280852815255684249681",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "30002767398183",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "30002767398183000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "242964931733137199365284420",
    "totalBorrowedInUSD_": "181253048250998255684249681",
    "totalSuppliedInUsdAsCollateral_": "182223698799852899523963315",
    "accountCapital_": "61711883482138943681034739",
    "borrowLimitPCTMantissa_": "994673302346250983",
    "borrowLimitPCTLineItemMantissaList": [
        "997085642888070375",
        "982687790441527742"
    ]
}
Testing on 0xb8e4f6dedfa4d4063d465536bcb5926744319c69
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1971326750698430816315563",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2159192218713240574679619",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1619394164034930431009714"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1470494035929560465104239",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1610630647059611647868207",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2159192218713240574679619",
    "totalBorrowedInUSD_": "1610630647059611647868207",
    "totalSuppliedInUsdAsCollateral_": "1619394164034930431009714",
    "accountCapital_": "548561571653628926811412",
    "borrowLimitPCTMantissa_": "994588397828059757",
    "borrowLimitPCTLineItemMantissaList": [
        "994588397828059757"
    ]
}
Testing on 0x375f2e62350d9970d8261914812d08afed6ab794
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "32775962576167664723939862",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "35899479033713867004466606",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "26924609275285400253349954"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "24448240665657020085585164",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "26778133552853468442721344",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "35899479033713867004466606",
    "totalBorrowedInUSD_": "26778133552853468442721344",
    "totalSuppliedInUsdAsCollateral_": "26924609275285400253349954",
    "accountCapital_": "9121345480860398561745262",
    "borrowLimitPCTMantissa_": "994559782801885091",
    "borrowLimitPCTLineItemMantissaList": [
        "994559782801885091"
    ]
}
Testing on 0x5e34bc93a7506ecc8562ade4d5c8b090247a6349
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1744037446832",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1744037446832000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1308028085124000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1300374063062",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1300374063062000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1744037446832000000000000",
    "totalBorrowedInUSD_": "1300374063062000000000000",
    "totalSuppliedInUsdAsCollateral_": "1308028085124000000000000",
    "accountCapital_": "443663383770000000000000",
    "borrowLimitPCTMantissa_": "994148426819692938",
    "borrowLimitPCTLineItemMantissaList": [
        "994148426819692938"
    ]
}
Testing on 0x9bf5533bede7de66cd5a32dcd8d24b6e73f8eb08
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "20063060845864310977376176",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "21975050481414333949209148",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "16481287861060750461906861"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "14952538247859070295220309",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "16377500190341791835284509",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "21975050481414333949209148",
    "totalBorrowedInUSD_": "16377500190341791835284509",
    "totalSuppliedInUsdAsCollateral_": "16481287861060750461906861",
    "accountCapital_": "5597550291072542113924639",
    "borrowLimitPCTMantissa_": "993702696561464053",
    "borrowLimitPCTLineItemMantissaList": [
        "993702696561464053"
    ]
}
Testing on 0x47f12c9ff89d0278fd75a291c6e7d7d94f7cfabe
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "103457",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "103457000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "77592750000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "157039607850962408347208",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "172005325439551274900288",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "129003994079663456175216"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "117036869586245836718633",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "128190366220945478712082",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "602675",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "602675000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "172005428896551274900288",
    "totalBorrowedInUSD_": "128190968895945478712082",
    "totalSuppliedInUsdAsCollateral_": "129004071672413456175216",
    "accountCapital_": "43814460000605796188206",
    "borrowLimitPCTMantissa_": "993697076643187431",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "993693002573117695"
    ]
}
Testing on 0xb6c0276ad1d87c6cf6dfa323d0c3f6840121c0ba
errored! Error: Returned error: VM Exception while processing transaction: invalid opcode
Testing on 0x273e05a3d93e2d091b0aa836e68d8696aaaaaaaa
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2884157213429730278754329",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3159014511712370144589337",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2369260883784277608442002"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2146998889668300265619528",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2351605736854799612632803",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "3159014511712370144589337",
    "totalBorrowedInUSD_": "2351605736854799612632803",
    "totalSuppliedInUsdAsCollateral_": "2369260883784277608442002",
    "accountCapital_": "807408774857570531956534",
    "borrowLimitPCTMantissa_": "992548246986934383",
    "borrowLimitPCTLineItemMantissaList": [
        "992548246986934383"
    ]
}
Testing on 0xc6bbfe0ce06f85ed6edbfd015cd5920e17b128da
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "4454781116428512211692826",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4879317302043032996954940",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3659487976532274747716205"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "3315715133419408724034730",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3631699469919144956026515",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "4879317302043032996954940",
    "totalBorrowedInUSD_": "3631699469919144956026515",
    "totalSuppliedInUsdAsCollateral_": "3659487976532274747716205",
    "accountCapital_": "1247617832123888040928425",
    "borrowLimitPCTMantissa_": "992406449538478293",
    "borrowLimitPCTLineItemMantissaList": [
        "992406449538478293"
    ]
}
Testing on 0x554bd2947df1c8d8d38897bdc92b3b97692b2845
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "16000794113703175743916",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "7776305935289174895664456",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "5832229451466881171748342"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "528813024297469556961387559",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "579208376699994108270250831",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "434406282524995581202688123"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "48040296",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "48040296000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "36030222000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "398751745409420585565039297",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "436752387995192957948801976",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "586984730675579283165915287",
    "totalBorrowedInUSD_": "436752387995192957948801976",
    "totalSuppliedInUsdAsCollateral_": "440238548006684462374436465",
    "accountCapital_": "150232342680386325217113311",
    "borrowLimitPCTMantissa_": "992081202277092346",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1005400717173242959",
        "0"
    ]
}
Testing on 0xf3373969cea17f5f83c416836debce6356f8ee0c
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "35064281599",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "35064281599000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "26298211199250000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "92636045656184374204184",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "101464168171173088881468",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "76098126128379816661101"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "92681172221436180448031",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "101513595252966827008547",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "136528449770173088881468",
    "totalBorrowedInUSD_": "101513595252966827008547",
    "totalSuppliedInUsdAsCollateral_": "102396337327629816661101",
    "accountCapital_": "35014854517206261872921",
    "borrowLimitPCTMantissa_": "991379163574586202",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1333982851058781042"
    ]
}
Testing on 0xbaec26c7662b005706f39ae4919ef88624f02b31
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1465743056156",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1465743056156000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1099307292117000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1089366532630",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1089366532630000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1465743056156000000000000",
    "totalBorrowedInUSD_": "1089366532630000000000000",
    "totalSuppliedInUsdAsCollateral_": "1099307292117000000000000",
    "accountCapital_": "376376523526000000000000",
    "borrowLimitPCTMantissa_": "990957251390685764",
    "borrowLimitPCTLineItemMantissaList": [
        "990957251390685764"
    ]
}
Testing on 0xfa27c46701a4724ae55c916c4c9de2b4da05f16b
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1254497941005",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1254497941005000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "940873455753750000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "932074061940",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "932074061940000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1254497941005000000000000",
    "totalBorrowedInUSD_": "932074061940000000000000",
    "totalSuppliedInUsdAsCollateral_": "940873455753750000000000",
    "accountCapital_": "322423879065000000000000",
    "borrowLimitPCTMantissa_": "990647633047846319",
    "borrowLimitPCTLineItemMantissaList": [
        "990647633047846319"
    ]
}
Testing on 0x196386b94cb536c0a94e944485217fd03e2f44f6
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "125887812418684374914226",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "137884795054372577159176",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "103413596290779432869382"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "93437213599069202064807",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "102341686617846897952381",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "137884795054372577159176",
    "totalBorrowedInUSD_": "102341686617846897952381",
    "totalSuppliedInUsdAsCollateral_": "103413596290779432869382",
    "accountCapital_": "35543108436525679206795",
    "borrowLimitPCTMantissa_": "989634731685391463",
    "borrowLimitPCTLineItemMantissaList": [
        "989634731685391463"
    ]
}
Testing on 0x73372fd360663a0688c7db7017331495a192f28a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "16050930037973919306775",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "50025131102851415607460",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "30015078661710849364476"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "280427822159281118438",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "136286519430299827155275",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "102214889572724870366456"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "108917524767281482393",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "10823679023748597312804",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "6494207414249158387682"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "414929610",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "682736798281587039000000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "409642078968952223400000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "177707255505",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "177707255505000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "682736798478722368556899840075539",
    "totalBorrowedInUSD_": "177707255505000000000000",
    "totalSuppliedInUsdAsCollateral_": "409642079107676399048684878118614",
    "accountCapital_": "682736798301015113051899840075539",
    "borrowLimitPCTMantissa_": "433811037",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0",
        "0"
    ]
}
Testing on 0x0bcbab2fecc30b7341132b4ebb36d352e035f1bd
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "12877231351271101439771244",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "14104418621815886135880003",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "10578313966361914601910002"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "9548893385126546552139970",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "10458893375835721312012357",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "14104418621815886135880003",
    "totalBorrowedInUSD_": "10458893375835721312012357",
    "totalSuppliedInUsdAsCollateral_": "10578313966361914601910002",
    "accountCapital_": "3645525245980164823867646",
    "borrowLimitPCTMantissa_": "988710810540702421",
    "borrowLimitPCTLineItemMantissaList": [
        "988710810540702421"
    ]
}
Testing on 0x393ad6fecaac3b3928c7e042cb3b46127a22044a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "3109924995631988119825358",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3406297737790720955656594",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2554723303343040716742445"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2305478682858799493237235",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2525188495856560226143250",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "3406297737790720955656594",
    "totalBorrowedInUSD_": "2525188495856560226143250",
    "totalSuppliedInUsdAsCollateral_": "2554723303343040716742445",
    "accountCapital_": "881109241934160729513344",
    "borrowLimitPCTMantissa_": "988439136462319792",
    "borrowLimitPCTLineItemMantissaList": [
        "988439136462319792"
    ]
}
Testing on 0xc6f7cb66f28954d1eb265d3ae3e24ff20d45d433
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "3038047955024773870239324",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3327570887090679795299261",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2495678165318009846474445"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2251482296048516155171640",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2466046307379643696243342",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "3327570887090679795299261",
    "totalBorrowedInUSD_": "2466046307379643696243342",
    "totalSuppliedInUsdAsCollateral_": "2495678165318009846474445",
    "accountCapital_": "861524579711036099055919",
    "borrowLimitPCTMantissa_": "988126731102529666",
    "borrowLimitPCTLineItemMantissaList": [
        "988126731102529666"
    ]
}
Testing on 0x0ece9e5a2388157d02e5ba443fd92171102bc15d
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "239815483436242028941187",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "262669659192232458057253",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "197002244394174343542939"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "177712401706634714781293",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "194648215876875296465235",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "262669659192232458057253",
    "totalBorrowedInUSD_": "194648215876875296465235",
    "totalSuppliedInUsdAsCollateral_": "197002244394174343542939",
    "accountCapital_": "68021443315357161592018",
    "borrowLimitPCTMantissa_": "988050752799602828",
    "borrowLimitPCTLineItemMantissaList": [
        "988050752799602828"
    ]
}
Testing on 0xcd2567cf050c154a518e8fd90a6607d3a1ccd9c6
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1039896846396616192299081",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1138997975961367318808991",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "854248481971025489106743"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "770254217269007585582191",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "843658673920526739480588",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1138997975961367318808991",
    "totalBorrowedInUSD_": "843658673920526739480588",
    "totalSuppliedInUsdAsCollateral_": "854248481971025489106743",
    "accountCapital_": "295339302040840579328403",
    "borrowLimitPCTMantissa_": "987603363337486227",
    "borrowLimitPCTLineItemMantissaList": [
        "987603363337486227"
    ]
}
Testing on 0x44b793c5c57889ede87529add8175f2f3c968774
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "96398114054488844374906",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "105584757925767576754990",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "79188568444325682566242"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "71397368913334206568640",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "78201466773406043120424",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "105584757925767576754990",
    "totalBorrowedInUSD_": "78201466773406043120424",
    "totalSuppliedInUsdAsCollateral_": "79188568444325682566242",
    "accountCapital_": "27383291152361533634566",
    "borrowLimitPCTMantissa_": "987534795863703090",
    "borrowLimitPCTLineItemMantissaList": [
        "987534795863703090"
    ]
}
Testing on 0xc9ea97c4e75729caaf9e6f76e1907f39b4eb5ce4
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1315031492661",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1315031492661000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "986273619495750000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "973970960560",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "973970960560000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1315031492661000000000000",
    "totalBorrowedInUSD_": "973970960560000000000000",
    "totalSuppliedInUsdAsCollateral_": "986273619495750000000000",
    "accountCapital_": "341060532101000000000000",
    "borrowLimitPCTMantissa_": "987526119838792855",
    "borrowLimitPCTLineItemMantissaList": [
        "987526119838792855"
    ]
}
Testing on 0xbea828430c546b7a439ad6322e1d7fb428b0bed0
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "76452903939590092620965",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "83738789232129088857650",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "62804091924096816643237"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "56613924032775283778838",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "62009174379174735547677",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "83738789232129088857650",
    "totalBorrowedInUSD_": "62009174379174735547677",
    "totalSuppliedInUsdAsCollateral_": "62804091924096816643237",
    "accountCapital_": "21729614852954353309973",
    "borrowLimitPCTMantissa_": "987342902021690001",
    "borrowLimitPCTLineItemMantissaList": [
        "987342902021690001"
    ]
}
Testing on 0xeade721157bb1cf4271d5962e90544d01b1b8809
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2007225827638974199806953",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2198512441787140802074355",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1648884331340355601555766"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1486132939585777332876123",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1627759922595362326921884",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2198512441787140802074355",
    "totalBorrowedInUSD_": "1627759922595362326921884",
    "totalSuppliedInUsdAsCollateral_": "1648884331340355601555766",
    "accountCapital_": "570752519191778475152471",
    "borrowLimitPCTMantissa_": "987188665485212337",
    "borrowLimitPCTLineItemMantissaList": [
        "987188665485212337"
    ]
}
Testing on 0xb7904059e7f4863ad9efe7778dbe5f663e379501
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "3637884955762405862403582",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3984571754161607378684780",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2988428815621205534013585"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "3723327956390592537",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "779177118105902909",
                "compSpeed_": "15481773966017"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2693175169900056572095658",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2949832070416362063359802",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "2006575676184765",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "975185745747414866",
                "compSpeed_": "1993607545525854"
            }
        }
    ],
    "totalSuppliedInUSD_": "3984571754161607378684780",
    "totalBorrowedInUSD_": "2949833824779225916677577",
    "totalSuppliedInUsdAsCollateral_": "2988428815621205534013585",
    "accountCapital_": "1034737929382381462007203",
    "borrowLimitPCTMantissa_": "987085189836132380",
    "borrowLimitPCTLineItemMantissaList": [
        "987084602784215773"
    ]
}
Testing on 0xf460888fd9ead1f41e1d0e531e298aa9f22417c8
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "949808436774143747131443",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1040324230990282872089322",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "780243173242712154066991"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "703028638782059727815233",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "770026565029351237816296",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1040324230990282872089322",
    "totalBorrowedInUSD_": "770026565029351237816296",
    "totalSuppliedInUsdAsCollateral_": "780243173242712154066991",
    "accountCapital_": "270297665960931634273026",
    "borrowLimitPCTMantissa_": "986905866576313111",
    "borrowLimitPCTLineItemMantissaList": [
        "986905866576313111"
    ]
}
Testing on 0xffffa57756e1c19c1e0026487559982e721cffff
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "605958063097529123551766",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "663705260552660551497125",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "497778945414495413622843"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "448467489482415784528019",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "491205992762600526377754",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "663705260552660551497125",
    "totalBorrowedInUSD_": "491205992762600526377754",
    "totalSuppliedInUsdAsCollateral_": "497778945414495413622843",
    "accountCapital_": "172499267790060025119371",
    "borrowLimitPCTMantissa_": "986795438592884524",
    "borrowLimitPCTLineItemMantissaList": [
        "986795438592884524"
    ]
}
Testing on 0x83108969c9c6d35d65ce13f21afd041e74500795
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "114944686405401379026972",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "125898800075149725046863",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "94424100056362293785147"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "85036027605815545847648",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "93139876000622161551383",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "125898800075149725046863",
    "totalBorrowedInUSD_": "93139876000622161551383",
    "totalSuppliedInUsdAsCollateral_": "94424100056362293785147",
    "accountCapital_": "32758924074527563495480",
    "borrowLimitPCTMantissa_": "986399403807146994",
    "borrowLimitPCTLineItemMantissaList": [
        "986399403807146994"
    ]
}
Testing on 0x3a37e2f98577d548574cef753010bf05ceb0c707
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1235032727649303173553500",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1352730111561554116689974",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1014547583671165587517480"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "913203562027491706143636",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1000230948285149638247418",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1352730111561554116689974",
    "totalBorrowedInUSD_": "1000230948285149638247418",
    "totalSuppliedInUsdAsCollateral_": "1014547583671165587517480",
    "accountCapital_": "352499163276404478442556",
    "borrowLimitPCTMantissa_": "985888650649375311",
    "borrowLimitPCTLineItemMantissaList": [
        "985888650649375311"
    ]
}
Testing on 0xd09a6dd8ff69c6269922df90b7756df3d0950506
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1133768382787284346046453",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1241815375898529756940333",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "931361531923897317705249"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "838174310029534554868459",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "918051483601039168412868",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1241815375898529756940333",
    "totalBorrowedInUSD_": "918051483601039168412868",
    "totalSuppliedInUsdAsCollateral_": "931361531923897317705249",
    "accountCapital_": "323763892297490588527465",
    "borrowLimitPCTMantissa_": "985709042228355927",
    "borrowLimitPCTLineItemMantissaList": [
        "985709042228355927"
    ]
}
Testing on 0xe21623cdf2a6f464ad21c920521980ebde28ba91
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "2562211919",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "4215935233200110808100000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "2529561139920066484860000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "122000106383451707342",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "59291441701825612509675",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "44468581276369209382256"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "267598175171658179057756",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "293100013667342031863781",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "4215935233259402249801825612509675",
    "totalBorrowedInUSD_": "293100013667342031863781",
    "totalSuppliedInUsdAsCollateral_": "2529561139964535066136369209382256",
    "accountCapital_": "4215935232966302236134483580645894",
    "borrowLimitPCTMantissa_": "115869906",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Testing on 0x741d4defd75b782fd8f77ba407d247c4c645ac5e
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1843741801773387485906876",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2019448551740589539926315",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1514586413805442154944736"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "10013250788696477018",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4866389817052544348362",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3649792362789408261271"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1364562016644392840987870",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1494603412268586834341173",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2024314941557642084274677",
    "totalBorrowedInUSD_": "1494603412268586834341173",
    "totalSuppliedInUsdAsCollateral_": "1518236206168231563206007",
    "accountCapital_": "529711529289055249933504",
    "borrowLimitPCTMantissa_": "984434046689421366",
    "borrowLimitPCTLineItemMantissaList": [
        "986806298171758023",
        "0"
    ]
}
Testing on 0xcdcbf3ee731b5dd68f9d880eed9c83c490242f82
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "481001189709977692981",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "233764173193100608900301",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "175323129894825456675225"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "158507",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "158507000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "118880250000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "355072112128263114756",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "172563271133775232455842",
                "compSpeed_": "1993607545525854"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1055215",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1055215000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "233764331700100608900301",
    "totalBorrowedInUSD_": "172564326348775232455842",
    "totalSuppliedInUsdAsCollateral_": "175323248775075456675225",
    "accountCapital_": "61200005351325376444459",
    "borrowLimitPCTMantissa_": "984263795899426420",
    "borrowLimitPCTLineItemMantissaList": [
        "984258444606220325",
        "8876285169319546350"
    ]
}
Testing on 0xc945525e11008399b584e0a2fb16c87b1bff8bbc
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "911169471690589780152173",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "998003011173231295610894",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "748502258379923471708170"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "672562377487970624060521",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "736656899500196736562864",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "998003011173231295610894",
    "totalBorrowedInUSD_": "736656899500196736562864",
    "totalSuppliedInUsdAsCollateral_": "748502258379923471708170",
    "accountCapital_": "261346111673034559048030",
    "borrowLimitPCTMantissa_": "984174584983397219",
    "borrowLimitPCTLineItemMantissaList": [
        "984174584983397219"
    ]
}
Testing on 0xed3c4c5d7a9abfd74f33c1042793dfd6a6daef42
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1168201696323431471",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1279530149781358166",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "959647612336018624"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "8893198643237",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "8893198643237000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "6669898982427750000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "5990317924198233350585048",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "6561189232056400790662452",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "8893199922767149781358166",
    "totalBorrowedInUSD_": "6561189232056400790662452",
    "totalSuppliedInUsdAsCollateral_": "6669899942075362336018624",
    "accountCapital_": "2332010690710748990695714",
    "borrowLimitPCTMantissa_": "983701298225901746",
    "borrowLimitPCTLineItemMantissaList": [
        "6837081807649008112657919",
        "0"
    ]
}
Testing on 0x0f189fcfeb7335447b5ace6f65da1ac81ff9169a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "32100737574",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "32100737574000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "24075553180500000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "81230224841815380338897",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "88971384039015544269813",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "66728538029261658202359"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "81477754346339022155296",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "89242502857790784627673",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "121072121613015544269813",
    "totalBorrowedInUSD_": "89242502857790784627673",
    "totalSuppliedInUsdAsCollateral_": "90804091209761658202359",
    "accountCapital_": "31829618755224759642140",
    "borrowLimitPCTMantissa_": "982802665263577913",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1337396344854076525"
    ]
}
Testing on 0xfd05ea37578db0e1fa0a46376ec215c4c52c26b1
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2187260532414285986557077",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2395704273892835026789979",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1796778205419626270092484"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "24322483125575677794",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "11820605186614151529495",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "8865453889960613647121"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "5164044968297453",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "513176968724559391",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "307906181234735634"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1618943096165401930953617",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1773226754286868569571565",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2407525392256417902878865",
    "totalBorrowedInUSD_": "1773226754286868569571565",
    "totalSuppliedInUsdAsCollateral_": "1805643967215768118475239",
    "accountCapital_": "634298637969549333307300",
    "borrowLimitPCTMantissa_": "982046730408937917",
    "borrowLimitPCTLineItemMantissaList": [
        "986892399372543921",
        "0",
        "0"
    ]
}
Testing on 0xa8e89e85add59aba7000ed1aecbf798385bfe6c3
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "217255068107959057629475",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "237959258843579447862506",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "178469444132684585896879"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "160010374432693910325522",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "175259203105755207285633",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "237959258843579447862506",
    "totalBorrowedInUSD_": "175259203105755207285633",
    "totalSuppliedInUsdAsCollateral_": "178469444132684585896879",
    "accountCapital_": "62700055737824240576873",
    "borrowLimitPCTMantissa_": "982012377286597596",
    "borrowLimitPCTLineItemMantissaList": [
        "982012377286597596"
    ]
}
Testing on 0xfab90d837b82ec306257115c022a624049d2ec21
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "352663583867",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "352663583867000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "264497687900250000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "7022950065629219953716226",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "7692230183933618986085428",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "5769172637950214239564071"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "1292590501449502527450",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "628192520751950980828062",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "471144390563963235621046"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "5816170197881708488501628",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "6370445401569637425747344",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "161716834394204696934",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "16070610417924091757816",
                "compSpeed_": "427047063411319"
            }
        }
    ],
    "totalSuppliedInUSD_": "8673086288552569966913490",
    "totalBorrowedInUSD_": "6386516011987561517505160",
    "totalSuppliedInUsdAsCollateral_": "6504814716414427475185117",
    "accountCapital_": "2286570276565008449408330",
    "borrowLimitPCTMantissa_": "981813670398889645",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1104221662507408560",
        "0"
    ]
}
Testing on 0xb1adceddb2941033a090dd166a462fe1c2029484
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "91000645115427754337304",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "44225858522872311469158057",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "33169393892154233601868542"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1460946",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1460946000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1095709500000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "218838175408",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "360082461263350806459200000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "216049476758010483875520000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "45741434447828122479270113",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "50100547409271694723422075",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "3501407984958",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "3501407984958000000000000",
                "compSpeed_": "4187294013512035"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "1348799724569993111024",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "134036972629143065408010",
                "compSpeed_": "427047063411319"
            }
        }
    ],
    "totalSuppliedInUSD_": "360082461307576666443018311469158057",
    "totalBorrowedInUSD_": "53735992366858837788830085",
    "totalSuppliedInUsdAsCollateral_": "216049476791179878863383733601868542",
    "accountCapital_": "360082461253840674076159473680327972",
    "borrowLimitPCTMantissa_": "248720770",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0"
    ]
}
Testing on 0x8c863333c2e92f02e01f7a3c6d131e4d59f78990
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1027367192712491879948375",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1125274258810799643615575",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "843955694108099732711681"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "755522168359765540405775",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "827522675482282836640904",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1125274258810799643615575",
    "totalBorrowedInUSD_": "827522675482282836640904",
    "totalSuppliedInUsdAsCollateral_": "843955694108099732711681",
    "accountCapital_": "297751583328516806974671",
    "borrowLimitPCTMantissa_": "980528576629625724",
    "borrowLimitPCTLineItemMantissaList": [
        "980528576629625724"
    ]
}
Testing on 0x6655459bab7a5e99f2d61279316f6d0a465be784
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "102895513242",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "102895513242000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "77171634931500000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "69081849055187240919928",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "75665280188297529792356",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "102895513242000000000000",
    "totalBorrowedInUSD_": "75665280188297529792356",
    "totalSuppliedInUsdAsCollateral_": "77171634931500000000000",
    "accountCapital_": "27230233053702470207644",
    "borrowLimitPCTMantissa_": "980480460929205936",
    "borrowLimitPCTLineItemMantissaList": [
        "0"
    ]
}
Testing on 0xd7e1c9e62acb63dd868dafa6b60009b86712b5a0
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "121694448809430354913759",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "133291808086520258306685",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "99968856064890193730013"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "89471269062734362451467",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "97997791533143884458729",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "133291808086520258306685",
    "totalBorrowedInUSD_": "97997791533143884458729",
    "totalSuppliedInUsdAsCollateral_": "99968856064890193730013",
    "accountCapital_": "35294016553376373847956",
    "borrowLimitPCTMantissa_": "980283214099530325",
    "borrowLimitPCTLineItemMantissaList": [
        "980283214099530325"
    ]
}
Testing on 0x84c35f982496982b916f15d21026bc8d1d3cbc59
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "22563486973752",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "22563486973752000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "16922615230314000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "16582194638982",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "16582194638982000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "22563486973752000000000000",
    "totalBorrowedInUSD_": "16582194638982000000000000",
    "totalSuppliedInUsdAsCollateral_": "16922615230314000000000000",
    "accountCapital_": "5981292334770000000000000",
    "borrowLimitPCTMantissa_": "979883688974846266",
    "borrowLimitPCTLineItemMantissaList": [
        "979883688974846266"
    ]
}
Testing on 0x9b3611abceb1550b7ff2ebd46cf6ae4319130014
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "2543188807338501328654134",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2785552157489053166773544",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2089164118116789875080158"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "130076721555814169233",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "63216636292517907176391",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "47412477219388430382293"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1910421028556173818621895",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2092482242156548627362742",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2848768793781571073949935",
    "totalBorrowedInUSD_": "2092482242156548627362742",
    "totalSuppliedInUsdAsCollateral_": "2136576595336178305462451",
    "accountCapital_": "756286551625022446587193",
    "borrowLimitPCTMantissa_": "979362147242518267",
    "borrowLimitPCTLineItemMantissaList": [
        "1001588254369766684",
        "0"
    ]
}
Testing on 0x5a769b086e99062d8627b58e8c2f0187deb5e2ae
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1473149271262",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1473149271262000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1104861953446500000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "126614448236971",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "61533988770926721",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "46150491578195040"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1081848865963",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1081848865963000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1473149332795988770926721",
    "totalBorrowedInUSD_": "1081848865963000000000000",
    "totalSuppliedInUsdAsCollateral_": "1104861999596991578195040",
    "accountCapital_": "391300466832988770926721",
    "borrowLimitPCTMantissa_": "979171033448171964",
    "borrowLimitPCTLineItemMantissaList": [
        "979171074348507424",
        "0"
    ]
}
Testing on 0x166f347ff5fb9340d1916205ab87be759451ff63
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "69263345831734347277564",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "75864073426152798838768",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "56898055069614599129076"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "50828599570164107692911",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "55672514280601176991937",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "75864073426152798838768",
    "totalBorrowedInUSD_": "55672514280601176991937",
    "totalSuppliedInUsdAsCollateral_": "56898055069614599129076",
    "accountCapital_": "20191559145551621846831",
    "borrowLimitPCTMantissa_": "978460761312245617",
    "borrowLimitPCTLineItemMantissaList": [
        "978460761312245617"
    ]
}
Testing on 0x7905ddebe57a7e191038f3baaf9804966d27b61c
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "45309981346218016",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "22020424384355224685",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "16515318288266418513"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "225481307411574635264969",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "246969450526590286431085",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "185227087894942714823313"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "165469627800869115116593",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "181238717860664140918089",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "350021",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "350021000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "246991470950974641655770",
    "totalBorrowedInUSD_": "181239067881664140918089",
    "totalSuppliedInUsdAsCollateral_": "185243603213230981241826",
    "accountCapital_": "65752403069310500737681",
    "borrowLimitPCTMantissa_": "978382328662883527",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "978467674034044623"
    ]
}
Testing on 0x60d231e8da6673b20b2aee67bdf2d8251784625b
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "273769048108599428674558",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "299858964624300845627814",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "224894223468225634220860"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "200640291637527902453896",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "219761110790292674029849",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "299858964624300845627814",
    "totalBorrowedInUSD_": "219761110790292674029849",
    "totalSuppliedInUsdAsCollateral_": "224894223468225634220860",
    "accountCapital_": "80097853834008171597965",
    "borrowLimitPCTMantissa_": "977175435639154172",
    "borrowLimitPCTLineItemMantissaList": [
        "977175435639154172"
    ]
}
Testing on 0x325c52dcb6a4dd63e57b539967d634a634f68fee
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "199079196485687130725",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "96751494096061517096696",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "72563620572046137822522"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "145887589591114576407",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "70900639103333728560919",
                "compSpeed_": "1993607545525854"
            }
        }
    ],
    "totalSuppliedInUSD_": "96751494096061517096696",
    "totalBorrowedInUSD_": "70900639103333728560919",
    "totalSuppliedInUsdAsCollateral_": "72563620572046137822522",
    "accountCapital_": "25850854992727788535777",
    "borrowLimitPCTMantissa_": "977082435308457531",
    "borrowLimitPCTLineItemMantissaList": [
        "977082435308457531"
    ]
}
Testing on 0xb352eab4ae5864281b95cf1de234b9b8ca2c5b1c
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "101310693229418478495858",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "110965500983488830078034",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "83224125737616622558525"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "74236337764656820615241",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "81310986517290850963052",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "110965500983488830078034",
    "totalBorrowedInUSD_": "81310986517290850963052",
    "totalSuppliedInUsdAsCollateral_": "83224125737616622558525",
    "accountCapital_": "29654514466197979114982",
    "borrowLimitPCTMantissa_": "977012204052976331",
    "borrowLimitPCTLineItemMantissaList": [
        "977012204052976331"
    ]
}
Testing on 0x2f5f2223ba5756eb5403d05fd0b9df9fffed253f
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "440649292",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "725056683192911070800000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "435034009915746642480000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "838349585811473608593495",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "918243462989721232018846",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "688682597242290924014134"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "85044496730373321928",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "41331200188477782590398",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "30998400141358336942798"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "680760683577177318445513",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "745636495961398739716051",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "725056684152485733978199014609244",
    "totalBorrowedInUSD_": "745636495961398739716051",
    "totalSuppliedInUsdAsCollateral_": "435034010635427639863649260956932",
    "accountCapital_": "725056683406849238016800274893193",
    "borrowLimitPCTMantissa_": "1713972879",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1082699779182993366",
        "0"
    ]
}
Testing on 0x1eb038f9c4d3a081577a061dfa644ec2ea3288c3
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "405449162416885674209648",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "444088062146052462076153",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "333066046609539346557114"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "297018980995536279426338",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "325324592865429891319388",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "444088062146052462076153",
    "totalBorrowedInUSD_": "325324592865429891319388",
    "totalSuppliedInUsdAsCollateral_": "333066046609539346557114",
    "accountCapital_": "118763469280622570756765",
    "borrowLimitPCTMantissa_": "976757001132616403",
    "borrowLimitPCTLineItemMantissaList": [
        "976757001132616403"
    ]
}
Testing on 0x1f5be3c931deb102a9e2c489c8abd074a6450e1a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1111811235474511252012196",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1217765734403996699817706",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "913324300802997524863279"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "814279745602989735766463",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "891879791079209054595271",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1217765734403996699817706",
    "totalBorrowedInUSD_": "891879791079209054595271",
    "totalSuppliedInUsdAsCollateral_": "913324300802997524863279",
    "accountCapital_": "325885943324787645222435",
    "borrowLimitPCTMantissa_": "976520377586653074",
    "borrowLimitPCTLineItemMantissaList": [
        "976520377586653074"
    ]
}
Testing on 0x86af94e5e8d3d583575bbafdd2dcb6b898a555e4
errored! Error: Returned error: VM Exception while processing transaction: invalid opcode
Testing on 0x8313722178211283cf5b2e9a07987ff26574b37d
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "654278167",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "1076567615705048183300000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "645940569423028909980000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "83350365206167400320",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "40507860738371325718518",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "30380895553778494288888"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "676178701498740917",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "67195258461437378626",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "40317155076862427175"
        },
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "297636153850398327791",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "927627718897843948309",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "556576631338706368985"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "42520275858573476219861",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "46572415627619669930137",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "46652644975",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "46652644975000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "1076567615746550867015730607045453",
    "totalBorrowedInUSD_": "93225060602619669930137",
    "totalSuppliedInUsdAsCollateral_": "645940569454006699320194063085048",
    "accountCapital_": "1076567615653325806413110937115316",
    "borrowLimitPCTMantissa_": "144324516",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0",
        "0"
    ]
}
Testing on 0x51463a9bf35c7374cab5bf559a49b3833f306f65
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "7427696485668971407192303",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "8135548533056738713326322",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "6101661399792554034994741"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "5431846261053957458944903",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "5949495777886138550824893",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "8135548533056738713326322",
    "totalBorrowedInUSD_": "5949495777886138550824893",
    "totalSuppliedInUsdAsCollateral_": "6101661399792554034994741",
    "accountCapital_": "2186052755170600162501429",
    "borrowLimitPCTMantissa_": "975061608316779286",
    "borrowLimitPCTLineItemMantissaList": [
        "975061608316779286"
    ]
}
Testing on 0xd854119e7b053d17c4a4a3494e4381a6828784a7
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "807393639478249786596638",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "884337445926887513009511",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "663253084445165634757133"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "590432886282144377777551",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "646700549911946454835373",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "884337445926887513009511",
    "totalBorrowedInUSD_": "646700549911946454835373",
    "totalSuppliedInUsdAsCollateral_": "663253084445165634757133",
    "accountCapital_": "237636896014941058174138",
    "borrowLimitPCTMantissa_": "975043411148150252",
    "borrowLimitPCTLineItemMantissaList": [
        "975043411148150252"
    ]
}
Testing on 0xf2b5a1aa79355ee5784160d69b04ff985aed19fb
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "223927694897368516594",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "108827740081646612222101",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "81620805061234959166575"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "25238998380242899980807",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "27644249686881668106077",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "51927713172",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "51927713172000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "108827740081646612222101",
    "totalBorrowedInUSD_": "79571962858881668106077",
    "totalSuppliedInUsdAsCollateral_": "81620805061234959166575",
    "accountCapital_": "29255777222764944116024",
    "borrowLimitPCTMantissa_": "974898039772871958",
    "borrowLimitPCTLineItemMantissaList": [
        "0"
    ]
}
Testing on 0x8ac5c1cbafc564fbd01ee4b116dea85e6a593ab4
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "214168853723093342002185",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "234578931314050414401651",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "175934198485537810801238"
        },
        {
            "asset": {
                "cTokenAddr": "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
                "amount": "24559509688835280776191",
                "underlyingSymbol_": "ZRX",
                "underlyingDecimals_": "18",
                "valueInUSD_": "9156767592385346084595",
                "compSpeed_": "1924466158925044"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "5494060555431207650757"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "10003269583702838510",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4861539001331661001667",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3646154250998745751250"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "164711001615365682625197",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "180407795358308416813695",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "248597237907767421487913",
    "totalBorrowedInUSD_": "180407795358308416813695",
    "totalSuppliedInUsdAsCollateral_": "185074413291967764203245",
    "accountCapital_": "68189442549459004674218",
    "borrowLimitPCTMantissa_": "974785180454429252",
    "borrowLimitPCTLineItemMantissaList": [
        "1025427670750086406",
        "0",
        "0"
    ]
}
Testing on 0x649dc48921d9d8c2382cfeb68e7ff53541709ce9
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "308060569601968884885256",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "337418433824466917645936",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "253063825368350188234452"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "225011257108673216716850",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "246454604899872665596749",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "337418433824466917645936",
    "totalBorrowedInUSD_": "246454604899872665596749",
    "totalSuppliedInUsdAsCollateral_": "253063825368350188234452",
    "accountCapital_": "90963828924594252049187",
    "borrowLimitPCTMantissa_": "973883187536356135",
    "borrowLimitPCTLineItemMantissaList": [
        "973883187536356135"
    ]
}
Testing on 0xdbbc0936a867487d3cf6cf3ae968b1c8f17f2a76
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "141872",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "141872000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "106404000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "523469216208127881776016",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "573355309043546260781388",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "430016481782659695586041"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "382327159050602330851897",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "418762554980965682379751",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "573355450915546260781388",
    "totalBorrowedInUSD_": "418762554980965682379751",
    "totalSuppliedInUsdAsCollateral_": "430016588186659695586041",
    "accountCapital_": "154592895934580578401637",
    "borrowLimitPCTMantissa_": "973828839363729586",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "973829080329572091"
    ]
}
Testing on 0x189c2c1834b1414a6aee9eba5dc4b4d547c9a44c
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "10004303014344691936131",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4862041243456448557499985",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3646530932592336418124988"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "12000234474431126299817001",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "13143844819609938205063261",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "9857883614707453653797445"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "12003906184173890999478832",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "13147866439619478637838165",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "18005886063066386762563246",
    "totalBorrowedInUSD_": "13147866439619478637838165",
    "totalSuppliedInUsdAsCollateral_": "13504414547299790071922433",
    "accountCapital_": "4858019623446908124725081",
    "borrowLimitPCTMantissa_": "973597662717514600",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "1333741293111184674"
    ]
}
Testing on 0x2d1b8c783646e146312d317e550ef80ec1cb08c3
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "67108081141100401479788",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "73503414165766128640410",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "55127560624324596480307"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "48989233721320665762548",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "53657858705728803889053",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "73503414165766128640410",
    "totalBorrowedInUSD_": "53657858705728803889053",
    "totalSuppliedInUsdAsCollateral_": "55127560624324596480307",
    "accountCapital_": "19845555460037324751357",
    "borrowLimitPCTMantissa_": "973339979096639035",
    "borrowLimitPCTLineItemMantissaList": [
        "973339979096639035"
    ]
}
Testing on 0x19bb0fe231f6e27d8978ef332eda60691b921f37
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "74006017988",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "74006017988000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "55504513491000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "54005683329",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "54005683329000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "74006017988000000000000",
    "totalBorrowedInUSD_": "54005683329000000000000",
    "totalSuppliedInUsdAsCollateral_": "55504513491000000000000",
    "accountCapital_": "20000334659000000000000",
    "borrowLimitPCTMantissa_": "972996247192707422",
    "borrowLimitPCTLineItemMantissaList": [
        "972996247192707422"
    ]
}
Testing on 0x78f6e7921a4b00da93e43396db8f7bdf7fed462e
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "83265736045117902201828",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "91200877424481593163760",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "68400658068361194872820"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "60761390829847511045861",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "66551890614541149001020",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "91200877424481593163760",
    "totalBorrowedInUSD_": "66551890614541149001020",
    "totalSuppliedInUsdAsCollateral_": "68400658068361194872820",
    "accountCapital_": "24648986809940444162740",
    "borrowLimitPCTMantissa_": "972971496093322010",
    "borrowLimitPCTLineItemMantissaList": [
        "972971496093322010"
    ]
}
Testing on 0xe0497d23c68118db8f1e8439864c6774dfe0e825
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "22200",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "22200000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "16650000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "19187426650",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "31571529055937457335000000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "18942917433562474401000000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "10144219842475345169469545",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "11110953849243403088774823",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "8333215386932552316581117"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "9075500839925232188820656",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "9940386994469266891183075",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "22411",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "22411000000000000",
                "compSpeed_": "33092681687527897"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "3324637",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "3324637000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "31571529067048411206443403088774823",
    "totalBorrowedInUSD_": "9940390341517266891183075",
    "totalSuppliedInUsdAsCollateral_": "18942917441895689804582552316581117",
    "accountCapital_": "31571529057108020864926136197591748",
    "borrowLimitPCTMantissa_": "524754984",
    "borrowLimitPCTLineItemMantissaList": [
        "1346006006006006006",
        "0",
        "1192863322608575070"
    ]
}
Testing on 0xf8a1856759c84023010af2139241fc411aa57489
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1208171173026944997341649",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1323308677645239828643310",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "992481508233929871482482"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "880448079896506145119733",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "964353901462563284243498",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "1323308677645239828643310",
    "totalBorrowedInUSD_": "964353901462563284243498",
    "totalSuppliedInUsdAsCollateral_": "992481508233929871482482",
    "accountCapital_": "358954776182676544399812",
    "borrowLimitPCTMantissa_": "971659314014405944",
    "borrowLimitPCTLineItemMantissaList": [
        "971659314014405944"
    ]
}
Testing on 0x797c89b95122844131bad581e7cebaa7b57c4a98
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "4142423910438",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "4142423910438000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "3106817932828500000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "151234851469754069788105",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "165647381579970162884841",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "1841658382209",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1841658382209000000000000",
                "compSpeed_": "33092681687527897"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "1011058321873",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "1011058321873000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "4142423910438000000000000",
    "totalBorrowedInUSD_": "3018364085661970162884841",
    "totalSuppliedInUsdAsCollateral_": "3106817932828500000000000",
    "accountCapital_": "1124059824776029837115159",
    "borrowLimitPCTMantissa_": "971529117869485210",
    "borrowLimitPCTLineItemMantissaList": [
        "592779629198394261"
    ]
}
Testing on 0x90d6c86da580bd36a47784e83dbe92a75b8c417a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "1109980021786612071433",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "539444740688184533656080",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "404583555516138400242060"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "808353934540389594858",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "392855970416956641153013",
                "compSpeed_": "1993607545525854"
            }
        }
    ],
    "totalSuppliedInUSD_": "539444740688184533656080",
    "totalBorrowedInUSD_": "392855970416956641153013",
    "totalSuppliedInUsdAsCollateral_": "404583555516138400242060",
    "accountCapital_": "146588770271227892503067",
    "borrowLimitPCTMantissa_": "971013193840217862",
    "borrowLimitPCTLineItemMantissaList": [
        "971013193840217862"
    ]
}
Testing on 0x6774305359234f12e766e07f36462104f00ab0b2
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "175000611742009908317",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "85049422303558105392520",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "63787066727668579044390"
        },
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "6925",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "6925000000000000",
                "compSpeed_": "4187294013512035"
            },
            "collateralFactorMantissa_": "0",
            "suppliedInUsdAsCollateral_": "0"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "105904118728525681333",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "10524221798647239582466",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "6314533079188343749479"
        },
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "5886098907003097157266",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "18344910158511202755193",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "11006946095106721653115"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "3000003123",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "4936289138371643687700000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "2961773483022986212620000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
                "amount": "366291881026",
                "underlyingSymbol_": "USDT",
                "underlyingDecimals_": "6",
                "valueInUSD_": "366291881026000000000000",
                "compSpeed_": "4187294013512035"
            }
        }
    ],
    "totalSuppliedInUSD_": "4936289138485562248885716547730179",
    "totalBorrowedInUSD_": "366291881026000000000000",
    "totalSuppliedInUsdAsCollateral_": "2961773483104094758521963644446984",
    "accountCapital_": "4936289138119270367859716547730179",
    "borrowLimitPCTMantissa_": "123673158",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        "0",
        "0",
        "0"
    ]
}
Testing on 0xd72b0b5f4005f421f3c70cbf02e2f0aa3b497a86
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "73564258202277550590337",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "80574858444696398884045",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "60431143833522299163033"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "53498726388364991846095",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "58597101514449787204036",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "80574858444696398884045",
    "totalBorrowedInUSD_": "58597101514449787204036",
    "totalSuppliedInUsdAsCollateral_": "60431143833522299163033",
    "accountCapital_": "21977756930246611680009",
    "borrowLimitPCTMantissa_": "969650709837215856",
    "borrowLimitPCTLineItemMantissaList": [
        "969650709837215856"
    ]
}
Testing on 0x8a6f60edd941a501d44deb1ff5130c1d4a221a5f
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "1000860692711255684",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "486413292354206706145",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "364809969265655029608"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "93270915699",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "93270915699000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "69953186774250000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "62195531151207377574030",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "68122703074386289449457",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "93757328991354206706145",
    "totalBorrowedInUSD_": "68122703074386289449457",
    "totalSuppliedInUsdAsCollateral_": "70317996743515655029608",
    "accountCapital_": "25634625916967917256688",
    "borrowLimitPCTMantissa_": "968780486208435628",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Testing on 0x141f59a0283303a6b882b4d6973e418f8d75f9b3
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "2767847694800016318566",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1345160140434333930741483",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "1008870105325750448056112"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "1561716040",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "2569691300108948396000000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "1541814780065369037600000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "71784146285960",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "7133549537167275",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "4280129722300365"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "1027993859536858957393400",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1125960646356862079174033",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2569691301454108543567883467908758",
    "totalBorrowedInUSD_": "1125960646356862079174033",
    "totalSuppliedInUsdAsCollateral_": "1541814781074239147205880170356477",
    "accountCapital_": "2569691300328147897211021388734725",
    "borrowLimitPCTMantissa_": "730282690",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0"
    ]
}
Testing on 0xbd178fe085a12505473a96a57d6f2ce0bbf3a490
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "310867796325780747318",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "151080194675347814292811",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "113310146006510860719608"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "99341751",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "163459698654493824900000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "98075819192696294940000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "63355883512736316654721",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "69393635855616574895599",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "49788552359",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "49788552359000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "163459698805574019575347814292811",
    "totalBorrowedInUSD_": "119182188214616574895599",
    "totalSuppliedInUsdAsCollateral_": "98075819306006440946510860719608",
    "accountCapital_": "163459698686391831360731239397212",
    "borrowLimitPCTMantissa_": "1215204614",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Testing on 0x7d411873898ab53ee8260273ee9232213524ad62
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "5636220898092354816170",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "2739175175368393978884539",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "2054381381526295484163404"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "13435134270937962368859",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "1335116468174460010405363",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "801069880904676006243217"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "2763557785361",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "2763557785361000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "4074291643542853989289902",
    "totalBorrowedInUSD_": "2763557785361000000000000",
    "totalSuppliedInUsdAsCollateral_": "2855451262430971490406621",
    "accountCapital_": "1310733858181853989289902",
    "borrowLimitPCTMantissa_": "967818229546058326",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0"
    ]
}
Testing on 0x753d276cc308a3410a1377aa0d79c36a5c57456a
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "91739401",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "91739401000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "68804550750000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "519613825255142056",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "108739065597318322",
                "compSpeed_": "15481773966017"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "65243439358390993"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "71110626068367965412087",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "77887397622057364147893",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "58415548216543023110919"
        },
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "1311730685737268745198",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4088205441703058634721",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "2452923265021835180832"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "6150740",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "10120599816104926000000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "6072359889662955600000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "54372061400469184041055",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "59553664479872496810983",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "10120599898172377203826020100936",
    "totalBorrowedInUSD_": "59553664479872496810983",
    "totalSuppliedInUsdAsCollateral_": "6072359950600296875754216682744",
    "accountCapital_": "10120599838618712723953523289953",
    "borrowLimitPCTMantissa_": "9807334374",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "1019483105064948517",
        "0",
        "0"
    ]
}
Testing on 0xd15f82fb56e2e6f42c85d7bdb008abbf479b55a9
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "107689589129549078200432",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "117952299284005975803854",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "88464224463004481852890"
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "404177110890005685372",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "196428055006988313062365",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "147321041255241234796773"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "62211346",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "102364290619866865400000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "61418574371920119240000000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "79604966001799918685948",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "87191239656805449136800",
                "compSpeed_": "132536259187093674"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "301985484530040769492",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "146763435554177163769264",
                "compSpeed_": "1993607545525854"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "4532",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "7457079695546800000000000000",
                "compSpeed_": "435891381302109"
            }
        }
    ],
    "totalSuppliedInUSD_": "102364290934247219690994288866219",
    "totalBorrowedInUSD_": "7457313650222010982612906064",
    "totalSuppliedInUsdAsCollateral_": "61418574607705384958245716649663",
    "accountCapital_": "102356833620596997680011675960155",
    "borrowLimitPCTMantissa_": "121417888608675",
    "borrowLimitPCTLineItemMantissaList": [
        "985610173898812713",
        "996215030138851716",
        "121414079890400"
    ]
}
Testing on 0x16c809eabd811044b8d6ef7c4f563a475b9818f3
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "441862482378285991924657",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "483971535086454268669084",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "362978651314840701501813"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "320190524151688847673267",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "350704360912820643167681",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "483971535086454268669084",
    "totalBorrowedInUSD_": "350704360912820643167681",
    "totalSuppliedInUsdAsCollateral_": "362978651314840701501813",
    "accountCapital_": "133267174173633625501403",
    "borrowLimitPCTMantissa_": "966184539069837540",
    "borrowLimitPCTLineItemMantissaList": [
        "966184539069837540"
    ]
}
Testing on 0xd1efb42da848fe7ba4c2017b96b7023bb6edd4ee
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "91049006358951795185390",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "99725885615953542314762",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "74794414211965156736071"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "65927478571877317721517",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "72210301352298654223059",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "99725885615953542314762",
    "totalBorrowedInUSD_": "72210301352298654223059",
    "totalSuppliedInUsdAsCollateral_": "74794414211965156736071",
    "accountCapital_": "27515584263654888091703",
    "borrowLimitPCTMantissa_": "965450456603039858",
    "borrowLimitPCTLineItemMantissaList": [
        "965450456603039858"
    ]
}
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
                "amount": "462654929986688646",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "506745482159490087",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "380059111619617565"
        },
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "6197960098421",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "6197960098421000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "4648470073815750000000000"
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
                "amount": "4486801101423",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "4486801101423000000000000",
                "compSpeed_": "33092681687527897"
            }
        }
    ],
    "totalSuppliedInUSD_": "6198325884195111520445315",
    "totalBorrowedInUSD_": "4486801101423000000000000",
    "totalSuppliedInUsdAsCollateral_": "4648742361063294177176423",
    "accountCapital_": "1711524782772111520445315",
    "borrowLimitPCTMantissa_": "965164501049429249",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "965221036206426049",
        "0"
    ]
}
Testing on 0x7f25a2535ad09f1eadac3bf29ffc1dd02e51263f
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "181018036298405058119527",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "198268874139606761753259",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "148701655604705071314944"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "130984245788024884846372",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "143466913427377868347346",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "198268874139606761753259",
    "totalBorrowedInUSD_": "143466913427377868347346",
    "totalSuppliedInUsdAsCollateral_": "148701655604705071314944",
    "accountCapital_": "54801960712228893405913",
    "borrowLimitPCTMantissa_": "964797014827845868",
    "borrowLimitPCTLineItemMantissaList": [
        "964797014827845868"
    ]
}
Testing on 0xd4c5226e2108c722bb86ff8327727410dc120b42
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
                "amount": "136449821939",
                "underlyingSymbol_": "USDC",
                "underlyingDecimals_": "6",
                "valueInUSD_": "136449821939000000000000",
                "compSpeed_": "33092681687527897"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "102337366454250000000000"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "90109013908879091607634",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "98696312825381360158749",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "136449821939000000000000",
    "totalBorrowedInUSD_": "98696312825381360158749",
    "totalSuppliedInUsdAsCollateral_": "102337366454250000000000",
    "accountCapital_": "37753509113618639841251",
    "borrowLimitPCTMantissa_": "964421073601729083",
    "borrowLimitPCTLineItemMantissaList": [
        "0"
    ]
}
Testing on 0xdb16bb1e9208c46fa0cd1d64fd290d017958f476
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
                "amount": "385002146315039303586",
                "underlyingSymbol_": "ETH",
                "underlyingDecimals_": "18",
                "valueInUSD_": "187109118098377526346278",
                "compSpeed_": "1993607545525854"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "140331838573783144759708"
        },
        {
            "asset": {
                "cTokenAddr": "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
                "amount": "1530043219",
                "underlyingSymbol_": "WBTC",
                "underlyingDecimals_": "8",
                "valueInUSD_": "2517575953599727678100000000000000",
                "compSpeed_": "435891381302109"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "1510545572159836606860000000000000"
        },
        {
            "asset": {
                "cTokenAddr": "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
                "amount": "2872212635483176486746",
                "underlyingSymbol_": "UNI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "8951681510378641997416",
                "compSpeed_": "1387271188736046"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "5371008906227185198449"
        },
        {
            "asset": {
                "cTokenAddr": "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
                "amount": "33949152902079417826",
                "underlyingSymbol_": "COMP",
                "underlyingDecimals_": "18",
                "valueInUSD_": "3373697069644142146458",
                "compSpeed_": "427047063411319"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "2024218241786485287874"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "262894349916594006043007",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "287947918569295498224899",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "2517575953799162174778400310490152",
    "totalBorrowedInUSD_": "287947918569295498224899",
    "totalSuppliedInUsdAsCollateral_": "1510545572307563672581796815246031",
    "accountCapital_": "2517575953511214256209104812265253",
    "borrowLimitPCTMantissa_": "190625111",
    "borrowLimitPCTLineItemMantissaList": [
        "0",
        "0",
        "0",
        "0"
    ]
}
Testing on 0x915fb54cf1bbae77dd1ae2c8987350784220861e
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "262965069932791545398101",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "288025378132316646882994",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "216019033599237485162245"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "190062101387233634153387",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "208174829587335612254570",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "288025378132316646882994",
    "totalBorrowedInUSD_": "208174829587335612254570",
    "totalSuppliedInUsdAsCollateral_": "216019033599237485162245",
    "accountCapital_": "79850548544981034628424",
    "borrowLimitPCTMantissa_": "963687440494458531",
    "borrowLimitPCTLineItemMantissaList": [
        "963687440494458531"
    ]
}
Testing on 0x3076f3fc626761a9cf29de76e6c4147303e6e8e7
AccountProfile {
    "suppliedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "51714220167565518858685",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "10822183140246268566038",
                "compSpeed_": "15481773966017"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "6493309884147761139622"
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "259804607256639349591331",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "284563726523589822968035",
                "compSpeed_": "132536259187093674"
            },
            "collateralFactorMantissa_": "750000000000000000",
            "suppliedInUsdAsCollateral_": "213422794892692367226026"
        },
        {
            "asset": {
                "cTokenAddr": "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
                "amount": "11535697822243401645213",
                "underlyingSymbol_": "ZRX",
                "underlyingDecimals_": "18",
                "valueInUSD_": "4300969576045229869401",
                "compSpeed_": "1924466158925044"
            },
            "collateralFactorMantissa_": "600000000000000000",
            "suppliedInUsdAsCollateral_": "2580581745627137921640"
        }
    ],
    "borrowedAssets": [
        {
            "asset": {
                "cTokenAddr": "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
                "amount": "102413421703667621",
                "underlyingSymbol_": "BAT",
                "underlyingDecimals_": "18",
                "valueInUSD_": "21431954346504819",
                "compSpeed_": "15481773966017"
            }
        },
        {
            "asset": {
                "cTokenAddr": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
                "amount": "195685073716738254259315",
                "underlyingSymbol_": "DAI",
                "underlyingDecimals_": "18",
                "valueInUSD_": "214333665556869693151973",
                "compSpeed_": "132536259187093674"
            }
        }
    ],
    "totalSuppliedInUSD_": "299686879239881321403474",
    "totalBorrowedInUSD_": "214333686988824039656792",
    "totalSuppliedInUsdAsCollateral_": "222496686522467266287288",
    "accountCapital_": "85353192251057281746682",
    "borrowLimitPCTMantissa_": "963311815284858440",
    "borrowLimitPCTLineItemMantissaList": [
        "3300620905037",
        "1004267916483032217",
        "0"
    ]
}
============================================================================================================
End Testing!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
The project migrated! Testing will not start util a manual run!
