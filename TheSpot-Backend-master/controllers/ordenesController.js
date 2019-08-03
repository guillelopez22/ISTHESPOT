var orden = require('../schemas/orden.js');
var mongoose = require('mongoose');

exports.getOrdenes = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    var ordenes = orden.find({});
    reply(ordenes);
  }
}
exports.getOrdenesId = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(!err && Orden){
        return reply(Orden);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Orden not found'));
      }
    });
  }
}
exports.getOrdenesName = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    orden.find({'nombre' : request.params.nombre}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesIdCombos = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    orden.find({'idProveedor' : request.params.idCombos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesProductos = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    orden.find({'idProductos' : request.params.idProductos}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesPromociones = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    orden.find({'idPromociones' : request.params.idPromociones}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesMesa = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },*/
  handler : function(request, reply){
    orden.find({'idMesa' : request.params.idMesa}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenesFecha = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler : function(request, reply){
    orden.find({'fecha' : request.params.fecha}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.getOrdenPersonal = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler : function(request, reply){
    orden.find({'idPersonal' : request.params.idPersonal}, function(err, Ordenes){
      if(!err && Ordenes){
        return reply(Ordenes);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Ordenes not found'));
      }
    });
  }
}
exports.modifyOrden = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },*/
  handler: function(request, reply){
    orden.update(
      {'_id': request.params._id},
      {$set:
        {
          idMesa: request.payload.idMesa,
          idEmpleado: request.payload.idEmpleado,
          idBebidas: request.payload.idBebidas,
          idProductos: request.payload.idProductos,
          idCombos: request.payload.idCombos
          
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Orden not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteOrden = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },*/
  handler: function(request, reply){
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(err){
        return reply(boom.badRequest("Could not delete Orden"));
      }else if(!err && Orden){
        Orden.remove();
        return reply('Orden deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createOrden = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler: function(request, reply){
    var newOrden = new orden({
      idMesa: request.payload.idMesa,
          idEmpleado: request.payload.idEmpleado,
          idBebidas: request.payload.idBebidas,
          idProductos: request.payload.idProductos,
          idCombos: request.payload.idCombos
    });
    newOrden.save(function(err){
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
