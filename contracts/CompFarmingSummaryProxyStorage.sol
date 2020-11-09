pragma solidity ^0.5.16;

contract CompFarmingSummaryProxyStorage {
    address public admin;
    address public pendingAdmin;
    address public compFarmingSummaryImplmentation;
    address public pendingCompFarmingSummaryImplmentation;
}


contract CompFarmingSummaryStorageV1 is CompFarmingSummaryProxyStorage{
  
}
