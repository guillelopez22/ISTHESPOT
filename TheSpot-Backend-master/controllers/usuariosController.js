var usuario = require('../schemas/usuario.js');
var mongoose = require('mongoose');

exports.getUsuarios = {

  handler: function(request, reply){
    var usuarios = usuario.find({});
    return(usuarios);
  }
}
exports.getUsuarioId = {
 
  handler : function(request, reply){
    this.envio = "r"
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(!err && Usuario){
        this.envio =(Usuario);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Usuario not found'));
      }
    });
    return envio;
  }
}
exports.getUsuarioIdPersonal = {

  handler : function(request, reply){
    this.envio = "r"
    usuario.findOne({'IdPersonal' : request.params.IdPersonal}, function(err, Usuario){
      if(!err && Usuario){
        this.envio =(Usuario);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Usuario not found'));
      }
    });return envio;
  }
}
exports.getUsuarioIdOrdenes = {

  handler : function(request, reply){
    this.envio = "r"
    usuario.findOne({'idOrdenes' : request.params.idOrdenes}, function(err, Usuario){
      if(!err && Usuario){
        this.envio =(Usuario);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Usuario not found'));
      }
    });return envio;
  }
}
exports.getUsuarioName = {

  handler : function(request, reply){
    this.envio = "r"
    usuario.findOne({'nombre' : request.params.nombre}, function(err, Usuario){
      if(!err && Usuario){
        this.envio =(Usuario);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Usuario not found'));
      }
    });return envio;
  }
}
exports.modifyUsuario = {

  handler: function(request, reply){
    this.envio = "r"
    usuario.update(
      {'_id': request.params._id},
      {$set:
        {
          IdPersonal : request.payload.IdPersonal,
          idOrdenes : request.payload.idOrdenes,
          usuario : request.payload.usuario,
          contrasena : request.payload.contraseña,
          nombre : request.payload.nombre,
          telefono : request.payload.telefono,
          scope: request.payload.scope
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'Usuario not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteUsuario = {

  handler: function(request, reply){
    this.envio = "r"
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(err){
        this.envio =(boom.badRequest("Could not delete Usuario"));
      }else if(!err && Usuario){
        Usuario.remove();
        this.envio =('Usuario deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createUsuario = {
  handler: async function(request, reply){
    console.log(request.payload);
    try {
      var newUsuario = new usuario({
        IdPersonal : request.payload.IdPersonal,
        idOrdenes : request.payload.idOrdenes,
        usuario : request.payload.usuario,
        contrasena : request.payload.contrasena,
        nombre : request.payload.nombre,
        telefono : request.payload.telefono,
        scope: request.payload.scope
      });
      result = await newUsuario.save();
      console.log({'result': result})
      return reply.response({success : true}).code(201);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
