var productoorden = require('../schemas/productoorden.js');
var mongoose = require('mongoose');

exports.getProductosOrdenes = {
  
  handler: function(request, reply){
    var productosordenes = productoorden.find({});
    return(productosordenes);
  }
}
exports.getProductoOrdenId = {
  
  handler : function(request, reply){
    productoorden.findOne({'_id' : request.params._id}, function(err, ProductoOrden){
      if(!err && ProductoOrden){
        return reply.response(ProductoOrden);
      }else if(!err){
        return reply.response(boom.notFound());
      }else if(err){
        return reply.response(boom.wrap(err, 'ProductoOrden not found'));
      }
    });
  }
}

exports.getProductoOrdenProducto = {
  
  handler : function(request, reply){
    productoorden.find({'idProducto' : request.params.idProducto}, function(err, ProductosOrdenes){
      if(!err && ProductosOrdenes){
        return reply.response(ProductosOrdenes);
      }else if(!err){
        return reply.response(boom.notFound());
      }else if(err){
        return reply.response(boom.wrap(err, 'id producto not found'));
      }
    });
  }
}

exports.getProductoOrdenOrden = {
  
    handler : function(request, reply){
      productoorden.find({'idOrden' : request.params.idOrden}, function(err, ProductosOrdenes){
        if(!err && ProductosOrdenes){
          return reply.response(ProductosOrdenes);
        }else if(!err){
          return reply.response(boom.notFound());
        }else if(err){
          return reply.response(boom.wrap(err, 'id orden not found'));
        }
      });
    }
  }

exports.modifyProductoOrden = {
  
  handler: function(request, reply){
    productoorden.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto : request.payload.idProducto,
          idOrden : request.payload.idOrden,
        }
      }, function(err){
        if(err){
          return reply.response(boom.wrap(err, 'ProductoOrden not found'));
        }else{
          return reply.response('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProductoOrden = {
  
  handler: function(request, reply){
    productoorden.deleteMany({'idOrden' : request.params._id}, function(err, ProductoOrden){
      if(err){
        return reply.response(boom.badRequest("Could not delete producto orden"));
      }else if(!err && ProductoOrden){
        //ProductoOrden.remove();
        return reply.response('producto orden deleted succesfully');
      }else if(!err){
        return reply.response(boom.notFound());
      }
    });
  }
}
exports.createProductoOrden = {
  
  handler: function(request, reply){
    var newProductoOrden = new productoorden({
      idProducto : request.payload.idProducto,
      idOrden : request.payload.idOrden,
      cantidad_producto : request.payload.cantidad_producto
    });
    newProductoOrden.save(function(err){
      if(!err){
        return reply.response({
          success: true
        });
      }else{
        return reply.response({
          success: false
        })
      }
    });
  }
}
