var producto_elaborado_detail = require('../schemas/producto_elaborado_detail.js');
var mongoose = require('mongoose');

exports.getProd_elaborado_details = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var producto_elaborado_details = producto_elaborado_detail.find({});
    reply(producto_elaborado_details);
  }
}
exports.getProd_elaborado_detailId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado_detail.findOne({'_id' : request.params._id}, function(err, Producto_elaborado_detail){
      if(!err && Producto_elaborado_detail){
        return reply(Producto_elaborado_detail);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado_detail not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdElaborado = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado_detail.find({'idProducto_Elaborado' : request.params.idProducto_Elaborado}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply(Producto_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado_details not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdBebida = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado_detail.find({'idBebida' : request.params.idBebida}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply(Producto_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado_details not found'));
      }
    });
  }
}
exports.getProd_elaborado_detailIdInsumo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado_detail.find({'idInsumo' : request.params.idInsumo}, function(err, Producto_elaborado_details){
      if(!err && Producto_elaborado_details){
        return reply(Producto_elaborado_details);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado_details not found'));
      }
    });
  }
}
exports.modifyProd_elaborado_detail = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    producto_elaborado_detail.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto_Elaborado : request.payload.idProducto_Elaborado,
          idBebida : request.payload.idBebida,
          idInsumo : request.payload.idInsumo,
          cantidad : request.payload.cantidad
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'rod_elaborado_detail not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProd_elaborado_detail = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    producto_elaborado_detail.findOne({'_id' : request.params._id}, function(err, Producto_elaborado_detail){
      if(err){
        return reply(boom.badRequest("Could not delete Producto_elaborado_detail"));
      }else if(!err && Producto_elaborado_detail){
        Producto_elaborado_detail.remove();
        return reply('Producto_elaborado_detail deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProd_elaborado_detail = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newProducto_elaborado_detail = new producto_elaborado_detail({
      idProducto_Elaborado : request.payload.idProducto_Elaborado,
      idBebida : request.payload.idBebida,
      idInsumo : request.payload.idInsumo,
      cantidad : request.payload.cantidad
    });
    newProducto_elaborado_detail.save(function(err){
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
