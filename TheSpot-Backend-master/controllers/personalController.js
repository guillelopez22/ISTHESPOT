var personal = require('../schemas/personal.js');
var mongoose = require('mongoose');

exports.getPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var _personal = personal.find({});
    return(_personal);
  }
}
exports.getPersonalId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(!err && Personal){
        return (Personal);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'idUsuario' : request.params.idUsuario}, function(err, Personal){
      if(!err && Personal){
        return (Personal);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'idOrdenes' : request.params.idOrdenes}, function(err, Personal){
      if(!err && Personal){
        return (Personal);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalIdentidad = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'identidad' : request.params.identidad}, function(err, Personal){
      if(!err && Personal){
        return (Personal);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.getPersonalTipo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    personal.find({'tipo' : request.params.tipo}, function(err, Personal){
      if(!err && Personal){
        return (Personal);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Personal not found'));
      }
    });
  }
}
exports.modifyPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    personal.update(
      {'_id': request.params._id},
      {$set:
        {
          idUsuario : request.payload.idUsuario,
          idOrdenes : request.payload.idOrdenes,
          identidad : request.payload.identidad,
          nacimiento : request.payload.nacimiento,
          direccion : request.payload.direccion,
          tipo : request.payload.tipo
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'Personal not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deletePersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(err){
        return (boom.badRequest("Could not delete Personal"));
      }else if(!err && Personal){
        Personal.remove();
        return ('Personal deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
  }
}
exports.createPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newPersonal = new personal({
      idUsuario : request.payload.idUsuario,
      idOrdenes : request.payload.idOrdenes,
      identidad : request.payload.identidad,
      nacimiento : request.payload.nacimiento,
      direccion : request.payload.direccion,
      tipo : request.payload.tipo
    });
    newPersonal.save(function(err){
      if(!err){
        return ({
          success: true
        });
      }else{
        return ({
          success: false
        })
      }
    });
  }
}
