(function() {
  'use strict';

  Accounts.impSvc = {};

  // Call from a Meteor method to set/get a token that client can use to login
  Accounts.impSvc.set = function(userId) {
    var token = Random.secret();
    Meteor.users.update(userId, {
      $set: {"services.impersonate.token": token}
    });
    return token;
  };

  //////

  Accounts.registerLoginHandler("impersonate", function(options) {
    if (! (options.impToken && typeof options.impToken === 'string')) 
      return undefined; // Don't handle

    var user = Meteor.users.findOne({
      "services.impersonate.token": options.impToken
    });

    if (user) {
      return {
        userId: user._id
      };
    } else {
      return {
        error: new Meteor.Error(403, "invalid-token")
      };
    }
  });

})();