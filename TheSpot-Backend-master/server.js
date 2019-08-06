var hapi = require('hapi');
const Inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
const Auth = require('hapi-auth-cookie');
var bcrypt = require('bcrypt');

var server = new hapi.Server({
  host: 'localhost',
  port: process.env.PORT || 8000,
  routes: {
    cors: { //cross origin request service: permite rquests de afuera del server
      credentials: true,
      origin: ["*"]
    }
  }
});
// server.connection({
//     port: ~~process.env.PORT || 8000,
//     routes: {
//       cors: { //cross origin request service: permite rquests de afuera del server
//         credentials: true,
//         origin: ["*"]
//       }
//     }
// });

mongoose.connect('mongodb://admin:admin@ds123361.mlab.com:23361/thespot', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

async function vamos() {
  console.log("aqui entra");
  await server.register(require('hapi-auth-cookie', (er) => { }));

  await server.auth.strategy('session', 'cookie', {

    cookie: {
      name: 'angular-scaffold-cookie',
      password: 'secretpasswordforencryption',
      ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
      isSecure: true
    }// only allow HS256 algorithm 
  });
  server.route(routes.endpoints);
  await server.start((err) => {
    console.log('Server running at:', server.info.uri);
  });

}
vamos();
