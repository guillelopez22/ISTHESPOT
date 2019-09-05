var joi = require('joi');
var boom = require('boom');
var usuario = require('../schemas/usuario.js');
var bcrypt = require('bcrypt');


exports.login = {
    handler: async function(request, reply) {
      console.log(request.payload.usuario);
      try {
        Usuario = await usuario.find({ 'usuario': request.payload.usuario }).exec();

        // console.log(Usuario[0].contrasena, request.payload.contrasena);
        return (Usuario[0].contrasena === request.payload.contrasena) ? reply.response({loggedIn: true, usuario: Usuario[0]}) : false;
      } catch( error) {
        throw boom.notFound();
      }
      // usuario.find({ usuario: request.payload.usuario }, function(err, usuario){
      //   if(err) {
      //     console.log(err)
      //     return reply.response(boom.notAcceptable('Error Executing Query'));
      //   }
      //   console.log("usuario" + usuario);
      //   if(usuario !== undefined) {
      //     if(request.payload.contrasena === usuario.contrasena)
      //       return reply.response({ loggedin: true, usuario: usuario, s}).code(200);
      //   } else {
      //     return reply.response(('Usuario no existe')).code(401);
      //   }
      // });
      // // if(usuario !== undefined)
      // // return reply.response({usuario: usuario[0].usuario, id: usuario[0]._id, nombre: usuario[0].nombre, scope: usuario[0].scope}).code(201);
      // return null;
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