var factura = require('../schemas/factura.js');
var mongoose = require('mongoose');

exports.getFacturas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var facturas = factura.find({});
    reply(facturas);
  }
}
exports.getFacturaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    factura.findOne({'_id' : request.params._id}, function(err, Factura){
      if(!err && Factura){
        return reply(Factura);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Factura not found'));
      }
    });
  }
}
exports.getFacturaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    factura.find({'nombre' : request.params.nombre}, function(err, Facturas){
      if(!err && Facturas){
        return reply(Facturas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Facturas not found'));
      }
    });
  }
}
exports.getFacturaIdOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler : function(request, reply){
    factura.find({'idOrden' : request.params.idOrden}, function(err, Facturas){
      if(!err && Facturas){
        return reply(Facturas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Factura not found'));
      }
    });
  }
}
exports.modifyFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    factura.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idOrden,
          nombre : request.payload.nombre,
          subtotal : request.payload.subtotal,
          isv : request.payload.isv,
          propina : request.payload.propina,
          descuento: request.payload.descuento,
          total: request.payload.total
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Factura not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    factura.findOne({'_id' : request.params._id}, function(err, Facturas){
      if(err){
        return reply(boom.badRequest("Could not delete factura"));
      }else if(!err && Facturas){
        Facturas.remove();
        return reply('Factura deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    var newFactura = new factura({
      idOrden : request.payload.idOrden,
      nombre : request.payload.nombre,
      subtotal : request.payload.subtotal,
      isv : request.payload.isv,
      propina : request.payload.propina,
      descuento: request.payload.descuento,
      total: request.payload.total
    });
    newFactura.save(function(err){
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
