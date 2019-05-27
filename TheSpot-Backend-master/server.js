var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');
var bcrypt = require('bcrypt');

var server = new hapi.Server();
server.connection({
    port: ~~process.env.PORT || 8000,
    routes: {
      cors: {//cross origin request service: permite rquests de afuera del server
        credentials: true,
        origin: ["*"]
      }
    }
});

mongoose.connect('mongodb://admin:admin@ds123361.mlab.com:23361/thespot');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth], function(err){

  server.auth.strategy('session', 'cookie', {
  password: 'secretpasswordforencryption',
  cookie: 'angular-scaffold-cookie',
  ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
  isSecure: true
  });
	server.route(routes.endpoints);

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
