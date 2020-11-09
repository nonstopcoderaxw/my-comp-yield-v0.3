pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract ERC20{
    uint public decimals;

    function balanceOf(address _address) external view returns (uint256 balance);
}

contract CTokenInterface{

    uint public totalBorrows;
    uint public totalReserves;
    string public symbol;

    function getCash() external view returns (uint);
    function totalBorrowsCurrent() external view returns (uint);
    function borrowRatePerBlock() external view returns (uint);
    function supplyRatePerBlock() external view returns (uint);
    function getAccountSnapshot(address account) external view returns (uint, uint, uint, uint);
}

contract Comptroller{
   struct Market {
          bool isListed;
          uint collateralFactorMantissa;
          bool isComped;
    }

    mapping(address => Market) public markets;
    mapping(address => uint) public compAccrued;
    function compSpeeds(address cTokenAddress) external view returns(uint);
    function getAllMarkets() public view returns (CToken[] memory) {}
}

contract PriceOracle{

    function getUnderlyingPrice(CToken cToken) public view returns (uint);
}

contract CToken{

}

contract CompoundLens {

    struct CompBalanceMetadataExt {
            uint balance;
            uint votes;
            address delegate;
            uint allocated;
    }

    function getCompBalanceMetadataExt(Comp comp, ComptrollerLensInterface comptroller, address account) external returns (CompBalanceMetadataExt memory);

}

contract Comp{

}

interface ComptrollerLensInterface {

}




contract UniswapAnchoredView{
    function price(string calldata symbol) external view returns (uint);
    function getUnderlyingPrice(address cToken) external view returns (uint);
}

contract CErc20{
    address public underlying;
}
