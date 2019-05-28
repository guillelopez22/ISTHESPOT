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
      console.log(request.payload.contrasena);
      usuario.find({usuario: request.payload.usuario}, function(err, usuario){
        console.log('usuario: ', request.payload.usuario, 'usuario', usuario)
        if(err)
          return reply(boom.notAcceptable('Error Executing Query'));
        if(usuario.length > 0){
          bcrypt.compare(request.payload.contrasena, usuario[0].contrasena, function(err, res){
            console.log('res',res);
            if(err)
                return reply(boom.unauthorized('ERROR'));
            if(res){
              console.log('before setting cookie');
              request.cookieAuth.set(usuario[0]);
              console.log('after setting cookie')
              return reply({usuario: usuario[0].usuario, scope: usuario[0].scope});
            }else{
              return reply(boom.unauthorized('Wrong contrasena'))
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
