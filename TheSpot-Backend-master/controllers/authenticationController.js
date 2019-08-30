var joi = require('joi');
var boom = require('boom');
var usuario = require('../schemas/usuario.js');
var bcrypt = require('bcrypt');

exports.login = {
  auth: false,
  validate: {
    payload: {
      usuario: joi.string().required(),
      contrasena: joi.string().min(2).max(200).required()
    }
  },
  handler: function (request, reply) {
    console.log(request.payload.contrasena);
    console.log("entro a login")
    usuario.find({ usuario: request.payload.usuario }, function (err, usuario) {

      console.log('usuario: ', request.payload.usuario, 'usuario', usuario)
      if (err) {
        console.log(err);
        return reply.response(boom.notAcceptable('Error Executing Query'));
      }
      console.log("este es el usuario :", usuario);
      if (usuario.length > 0) {
        bcrypt.compare(request.payload.contrasena, usuario[0].contrasena, function (err, res) {
          console.log("esto es el ReSSS:" + res);
          if (err) {
            console.log(err);
            return reply.response(('ERROR')).code(401);
          }
          if (res) {
            console.log('before setting cookie');
            request.cookieAuth.set({ usuario: usuario });
            request.cookieAuth.set(usuario[0]);
            console.log('after setting cookie')
            return reply.response({ usuario: usuario[0].usuario, scope: usuario[0].scope, status: "ok" });
          } else {
            return reply.response(('ERROR')).code(401);
          }
        });
      }
      else {
        return reply.response(('Usuario no existe')).code(401);
      }
    });
    return null;
  }
};
exports.logout = {
  // auth: {
  //   mode:'required',
  //   strategy:'session'
  // },
  handler: function (request, reply) {
    request.cookieAuth.clear();
    return reply('Logout Successful!');
  }
};
