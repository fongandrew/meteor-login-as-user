(function() {
  'use strict';

  // Login with token obtained with Accounts.impSvc.set on server
  Accounts.loginWithImpersonate = function(token, callback) {
    Accounts.callLoginMethod({
      methodArguments: [{
        impToken: token
      }],
      userCallback: callback
    });
  };

})();