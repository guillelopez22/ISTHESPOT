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
    return(facturas);
  }
}
exports.getFacturaId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    this.envio ="w";
    factura.findOne({'_id' : request.params._id}, function(err, Factura){
      if(!err && Factura){
        this.envio =(Factura);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Factura not found'));
      }
    });
    return envio;
  }
}
exports.getFacturaName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },
  handler : function(request, reply){
    this.envio = "w";
    factura.find({'nombre' : request.params.nombre}, function(err, Facturas){
      if(!err && Facturas){
        this.envio =(Facturas);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Facturas not found'));
      }
    });return envio;
  }
}
exports.getFacturaIdOrden = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler : function(request, reply){
    this.envio = "w"
    factura.find({'idOrden' : request.params.idOrden}, function(err, Facturas){
      if(!err && Facturas){
        this.envio =(Facturas);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Factura not found'));
      }
    });return envio;
  }
}
exports.modifyFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    this.envio = "w"
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
          this.envio =(boom.wrap(err, 'Factura not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    this.envio = "w"
    factura.findOne({'_id' : request.params._id}, function(err, Facturas){
      if(err){
        this.envio =(boom.badRequest("Could not delete factura"));
      }else if(!err && Facturas){
        Facturas.remove();
        this.envio =('Factura deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createFactura = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal']
  },
  handler: function(request, reply){
    this.envio = "w"
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
        this.envio ={
          success: true
        }
      }else{
        this.envio ={
          success: false
        }
      }
    });
    return envio;
  }
}
