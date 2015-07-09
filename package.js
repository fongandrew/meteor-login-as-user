Package.describe({
  name: 'fongandrew:login-as-user',
  summary: 'Adds methods to let an (admin) user login as another user',
  version: '0.1.0',
  git: 'https://github.com/fongandrew/meteor-login-as-user.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('accounts-base');
  api.use('random');
  api.addFiles('login_as_user_client.js', 'client');
  api.addFiles('login_as_user_server.js', 'server');
});
