var mesa = require('../schemas/mesa.js');
var mongoose = require('mongoose');

exports.getMesas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var Mesas = mesa.find({});
    reply(Mesas);
  }
}
exports.getMesaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.findOne({'_id' : request.params._id}, function(err, Mesa){
      if(!err && Mesa){
        return reply(Mesa);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesa not found'));
      }
    });
  }
}
exports.getMesaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'cliente']
  },
  handler : function(request, reply){
    mesa.find({'nombre' : request.params.nombre}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.getMesaNumero = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.find({'numero' : request.params.numero}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.getMesaIdOrdenes = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    mesa.find({'IdOrden' : request.params.IdOrden}, function(err, Mesas){
      if(!err && Mesas){
        return reply(Mesas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Mesas not found'));
      }
    });
  }
}
exports.modifyMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    mesa.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idProveedor,
          nombre : request.payload.nombre,
          numero: request.payload.numero
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'mesa not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    mesa.findOne({'_id' : request.params._id}, function(err, mesa){
      if(err){
        return reply(boom.badRequest("Could not delete mesa"));
      }else if(!err && Mesa){
        Mesa.remove();
        return reply('Mesa deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createMesa = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newMesa = new mesa({
      idOrden : request.payload.idProveedor,
      nombre : request.payload.nombre,
      numero: request.payload.numero
    });
    newMesa.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}
