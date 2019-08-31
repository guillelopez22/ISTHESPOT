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
<<<<<<< HEAD
        return (ProductoOrden);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'ProductoOrden not found'));
=======
        return reply.response(ProductoOrden);
      }else if(!err){
        return reply.response(boom.notFound());
      }else if(err){
        return reply.response(boom.wrap(err, 'ProductoOrden not found'));
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
      }
    });
  }
}

exports.getProductoOrdenProducto = {
  
  handler : function(request, reply){
    productoorden.find({'idProducto' : request.params.idProducto}, function(err, ProductosOrdenes){
      if(!err && ProductosOrdenes){
<<<<<<< HEAD
        return (ProductosOrdenes);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'id producto not found'));
=======
        return reply.response(ProductosOrdenes);
      }else if(!err){
        return reply.response(boom.notFound());
      }else if(err){
        return reply.response(boom.wrap(err, 'id producto not found'));
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
      }
    });
  }
}

exports.getProductoOrdenOrden = {
  
    handler : function(request, reply){
      productoorden.find({'idOrden' : request.params.idOrden}, function(err, ProductosOrdenes){
        if(!err && ProductosOrdenes){
<<<<<<< HEAD
          return (ProductosOrdenes);
        }else if(!err){
          return (boom.notFound());
        }else if(err){
          return (boom.wrap(err, 'id orden not found'));
=======
          return reply.response(ProductosOrdenes);
        }else if(!err){
          return reply.response(boom.notFound());
        }else if(err){
          return reply.response(boom.wrap(err, 'id orden not found'));
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
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
<<<<<<< HEAD
          return (boom.wrap(err, 'ProductoOrden not found'));
        }else{
          return ('updated succesfully');
=======
          return reply.response(boom.wrap(err, 'ProductoOrden not found'));
        }else{
          return reply.response('updated succesfully');
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
        }
      }
    );
  }
}
exports.deleteProductoOrden = {
  
  handler: function(request, reply){
    productoorden.deleteMany({'idOrden' : request.params._id}, function(err, ProductoOrden){
      if(err){
<<<<<<< HEAD
        return (boom.badRequest("Could not delete producto orden"));
      }else if(!err && ProductoOrden){
        //ProductoOrden.remove();
        return ('producto orden deleted succesfully');
      }else if(!err){
        return (boom.notFound());
=======
        return reply.response(boom.badRequest("Could not delete producto orden"));
      }else if(!err && ProductoOrden){
        //ProductoOrden.remove();
        return reply.response('producto orden deleted succesfully');
      }else if(!err){
        return reply.response(boom.notFound());
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
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
<<<<<<< HEAD
        return ({
          success: true
        });
      }else{
        return ({
=======
        return reply.response({
          success: true
        });
      }else{
        return reply.response({
>>>>>>> f4ceb5a5dcfdfcff8e423f31eb6708078f583a4e
          success: false
        })
      }
    });
  }
}
