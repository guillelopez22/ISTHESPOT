var hapi = require('hapi');
const Inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
const Auth = require('hapi-auth-cookie');
var bcrypt = require('bcrypt');
//var usuariosController = require('./controllers/usuariosController');
//var usuario = require('../schemas/usuario.js');

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

mongoose.connect('mongodb://admin:admin@ds123361.mlab.com:23361/thespot', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

async function start() {
  console.log("aqui entra");
  await server.register({
    plugin: require('hapi-auth-cookie')
  });

  server.auth.strategy('session', 'cookie', {

    cookie: {
      name: 'angular-scaffold-cookie',
      password: 'secretpasswordforencryption',
      ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
      isSecure: true
    },// only allow HS256 algorithm 
    redirectTo: '/login',

    validateFunc: async (request, session) => {

      const account = internals.usuairo.find((usuario) => (usuario._id = session._id));

      if (!account) {
        console.log("aqui esta el coso que no sirve el server");
        return { valid: false };
      }
      console.log("aqui esta el SI SIRVE");
      return { valid: true, credentials: account };
    }
  });
  server.route(routes.endpoints);
  try {
    await server.start((err) => {
      console.log('Server running at:', server.info.uri);
    });
  } catch (error) {
    console.error(error);
  }


};
start();
