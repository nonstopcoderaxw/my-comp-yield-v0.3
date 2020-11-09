pragma solidity ^0.5.16;


contract CompFarmingSummaryErrorReporter {
    enum Error {
        NO_ERROR,
        CTOKEN_NOT_FOUND,
        CETH_NOT_SUPPORTED,
        ACCOUNT_SNAPSHOT_ERROR,
        UNAUTHORIZED
    }

    enum FailureInfo {
        SET_PENDING_IMPLEMENTATION_OWNER_CHECK,
        ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK,
        SET_PENDING_ADMIN_OWNER_CHECK,
        ACCEPT_ADMIN_PENDING_ADMIN_CHECK
    }


     event Failure(uint error, uint info, uint detail);

     function fail(Error err, FailureInfo info) internal returns (uint) {
         emit Failure(uint(err), uint(info), 0);

         return uint(err);
     }

     function failOpaque(Error err, FailureInfo info, uint opaqueError) internal returns (uint) {
         emit Failure(uint(err), uint(info), opaqueError);

         return uint(err);
     }

}
