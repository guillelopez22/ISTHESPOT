var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');

exports.getInsumos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var insumos = insumo.find({});
    reply(insumos);
  }
}
exports.getInsumoId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(!err && Insumo){
        return reply(Insumo);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumo not found'));
      }
    });
  }
}
exports.getInsumoName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'nombre' : request.params.nombre}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.getInsumoProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'idProveedor' : request.params.idProveedor}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.getInsumoInventario = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    insumo.find({'inventario' : request.params.inventario}, function(err, Insumos){
      if(!err && Insumos){
        return reply(Insumos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Insumos not found'));
      }
    });
  }
}
exports.modifyInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    insumo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          inventario : request.payload.inventario,
          idProveedor : request.payload.idProveedor
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Insumo not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(err){
        return reply(boom.badRequest("Could not delete insumo"));
      }else if(!err && Insumo){
        Insumo.remove();
        return reply('Insumo deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newInsumo = new insumo({
      nombre : request.payload.nombre,
      inventario : request.payload.inventario,
      idProveedor : request.payload.idProveedor
    });
    newInsumo.save(function(err){
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
