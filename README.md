fongandrew:login-as-user
========================
A simple token-based implementation of allowing someone to login as another 
user in Meteor.

Installation
------------
`meteor add fongandrew:login-as-user`

Usage
-----
You'll need to call `Accounts.impSvc.set(userId)` on the server with the 
userId of the user you want to login as. This will return a token you can
use to log in. How you get the token from server to client is up to you, but
you'll probably just want to use a Meteor method.

Note that this package does not provide any permission checking that the person
requesting a token to login as someone else is actually authorized to do so.
You must implement that part yourself -- e.g. check inside the Meteor method
before requesting a token.

Once you have a token on the client, call 
`Accounts.loginWithImpersonate(token, callback)`. The callback will return 
with an error if it failed or nothing upon success.
