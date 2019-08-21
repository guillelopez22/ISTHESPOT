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
    handler: function(request, reply) {
      console.log('reply', request.payload.usuario)
      console.log('reply', request.payload.contrasena)
      
      usuario.find({usuario: request.payload.usuario}, function(err, usuario){
        if(err) {
          console.log(err)
          return reply.response(boom.notAcceptable('Error Executing Query'));
        }
        console.log(usuario);
        if(usuario.length > 0) {
          bcrypt.compare(request.payload.contrasena, usuario[0].contrasena, function(err, res){
            console.log("esto es el ReSSS:"+res);
            if(err) {
              console.log(err);
              return reply.response(('ERROR')).code(401);
            }
            if(res){
              
              console.log("entro al if");
              // console.log('before setting cookie', request.cookieAuth);
              request.cookieAuth.set({ usuario: usuario });
              
              // console.log('after setting cookie', request.cookieAuth);
              //console.log('cookie: ', request.cookieAuth)
              // const response =reply.response('entro heheheh');
              // response.type('text/plain');
              
              const enviar={...usuario[0],success:true};
              console.log("aqui esta el coso que envia las mergas: \n",enviar);
              
              return enviar;
              
              
            }else{
              return reply.response(('ERROR')).code(401);
            }
          });
        } else {
          return reply.response(('Usuario no existe')).code(401);
        }
      });
      // if(usuario !== undefined)
      // return reply.response({usuario: usuario[0].usuario, id: usuario[0]._id, nombre: usuario[0].nombre, scope: usuario[0].scope}).code(201);
      return null;
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
