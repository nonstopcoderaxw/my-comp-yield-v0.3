pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;


interface CompFarmingSummaryInterface {

     struct CompProfile{
          uint balance;
          uint yetToClaimed;
     }

     function getPriceCOMP() external view returns (uint256 priceInUSD);
     function sortedCompDistSpeedAllMarkets() external view returns (string[] memory sortedCTokenNameList, uint[] memory sortedCompSpeedList);
     function compProfile(address account) external returns(CompProfile memory _compProfile);
     function totalCompIncomePerYear(address _account) external view returns(uint errCode, string memory errCTokenSymbol, uint256 totalCompIncomeMantissa);
}
