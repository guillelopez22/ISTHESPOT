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
    this.envio = "w"
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(!err && Personal){
        this.envio =(Personal);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Personal not found'));
      }
    });
    return envio;
  }
}
exports.getPersonalUsuario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    this.envio ="w"
    personal.find({'idUsuario' : request.params.idUsuario}, function(err, Personal){
      if(!err && Personal){
        this.envio =(Personal);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Personal not found'));
      }
    });return envio;
  }
}
exports.getPersonalOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    this.envio = "w"
    personal.find({'idOrdenes' : request.params.idOrdenes}, function(err, Personal){
      if(!err && Personal){
        this.envio =(Personal);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Personal not found'));
      }
    });
    return envio;
  }
}
exports.getPersonalIdentidad = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    this.envio ="w"
    personal.find({'identidad' : request.params.identidad}, function(err, Personal){
      if(!err && Personal){
        this.envio =(Personal);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Personal not found'));
      }
    });return envio;
  }
}
exports.getPersonalTipo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    this.envio ="retu"
    personal.find({'tipo' : request.params.tipo}, function(err, Personal){
      if(!err && Personal){
        rthis.envio =(Personal);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Personal not found'));
      }
    });return envio;
  }
}
exports.modifyPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    this.envio = "w"
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
          this.envio =(boom.wrap(err, 'Personal not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deletePersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    this.envio = "w"
    personal.findOne({'_id' : request.params._id}, function(err, Personal){
      if(err){
        this.envio =(boom.badRequest("Could not delete Personal"));
      }else if(!err && Personal){
        Personal.remove();
        this.envio =('Personal deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createPersonal = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    this.envio = "w"
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
        this.envio ={
          success: true
        }
      }else{
        this.envio ={
          success: false
        }
      }
    });return envio;
  }
}
