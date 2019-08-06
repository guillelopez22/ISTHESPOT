var joi = require('joi');
var boom = require('boom');
var usuario = require('../schemas/usuario');
var bcrypt = require('bcrypt');


exports.login = {
    auth: false,
    validate: {
      payload: {
        usuario: joi.string().required(),
        contrasena: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      console.log('reply', reply)
      usuario.find({usuario: request.payload.usuario}, function(err, usuario){
        if(err)
          return repl1y(boom.notAcceptable('Error Executing Query'));
        if(usuario.length > 0) {
          bcrypt.compare(request.payload.contrasena, usuario[0].contrasena, function(err, res){
            if(err) {
              console.log(err);
              return reply(boom.unauthorized('ERROR'));
            }
            console.log("esto es el ReSSS:"+res);
            if(res){
              // console.log('before setting cookie', request.cookieAuth);
              request.cookieAuth.set({ usuario: usuario });
              // console.log('after setting cookie', request.cookieAuth);
              console.log(request.cookieAuth)
              const response =reply.response('entro heheheh');
              response.type('text/plain');
              return response;
              
            }else{
              const response =reply.response('fallo');
              response.type('text/plain');
              return response;
            }
          });
        }
      });
    }
};
exports.logout = {
    // auth: {
    //   mode:'required',
    //   strategy:'session'
    // },
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
