var producto_elaborado = require('../schemas/producto_elaborado.js');
var mongoose = require('mongoose');

exports.getProductos_elaborados = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var productos_elaborados = producto_elaborado.find({});
    reply(productos_elaborados);
  }
}
exports.getProductos_elaboradoId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado.findOne({'_id' : request.params._id}, function(err, Producto_elaborado){
      if(!err && Producto_elaborado){
        return reply(Producto_elaborado);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado not found'));
      }
    });
  }
}
exports.getIdProducto_Elaborado_Detail = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado.find({'idProducto_Elaborado_Detail' : request.params.idProducto_Elaborado_Detail}, function(err, Productos_elaborados){
      if(!err && Productos_elaborados){
        return reply(Productos_elaborados);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto_elaborado not found'));
      }
    });
  }
}
exports.getIdProducto_Elaborado_Tipo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    producto_elaborado.find({'tipo' : request.params.idProveedor}, function(err, Productos_elaborados){
      if(!err && Productos_elaborados){
        return reply(Productos_elaborados);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos_elaborados not found'));
      }
    });
  }
}
exports.modifyProductos_elaborado = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    producto_elaborado.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto_Elaborado_Detail : request.payload.idProducto_Elaborado_Detail,
          tipo : request.payload.tipo,
          descripcion : request.payload.descripcion
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Producto_elaborado not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProducto_elaborado = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    producto_elaborado.findOne({'_id' : request.params._id}, function(err, Producto_elaborado){
      if(err){
        return reply(boom.badRequest("Could not delete bebida"));
      }else if(!err && Producto_elaborado){
        Producto_elaborado.remove();
        return reply('Producto_elaborado deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProducto_elaborado = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newProducto_Elaborado = new producto_elaborado({
      idProducto_Elaborado_Detail : request.payload.idProducto_Elaborado_Detail,
      tipo : request.payload.tipo,
      descripcion : request.payload.descripcion
    });
    newProducto_Elaborado.save(function(err){
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
