pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;


contract Logging{

    uint256[] loggings_uint;
    string[] loggins_string;
    address[] loggings_address;

    function getLoggings_uint() public view returns(uint256[] memory){
        return loggings_uint;
    }

    function getLoggings_address() public view returns(address[] memory){
        return loggings_address;
    }

    function getLoggins_string() public view returns(string[] memory){
        return loggins_string;
    }

    function clearLogs() public {
        delete loggings_uint;
        delete loggins_string;
        delete loggings_address;
    }

    function addLog(uint256 i) public {
        loggings_uint.push(i);
    }

    function addLog(string memory s) public {
        loggins_string.push(s);
    }

    function addLog(address a) public {
        loggings_address.push(a);
    }




}
