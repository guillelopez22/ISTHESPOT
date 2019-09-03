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
    this.envio = "w"
    productoorden.findOne({'_id' : request.params._id}, function(err, ProductoOrden){
      if(!err && ProductoOrden){
        this.envio =(ProductoOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'ProductoOrden not found'));
      }
    });
    return envio;
  }
}

exports.getProductoOrdenProducto = {
  
  handler : function(request, reply){
    this.envio = "w"
    productoorden.find({'idProducto' : request.params.idProducto}, function(err, ProductosOrdenes){
      if(!err && ProductosOrdenes){
        this.envio =(ProductosOrdenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'id producto not found'));
      }
    });
    return envio;
  }
}

exports.getProductoOrdenOrden = {
  
    handler : function(request, reply){
      this.envio ="w"
      productoorden.find({'idOrden' : request.params.idOrden}, function(err, ProductosOrdenes){
        if(!err && ProductosOrdenes){
          this.envio =(ProductosOrdenes);
        }else if(!err){
          this.envio =(boom.notFound());
        }else if(err){
          this.envio =(boom.wrap(err, 'id orden not found'));
        }
      });
      return envio;
    }
  }

exports.modifyProductoOrden = {
  
  handler: function(request, reply){
    this.envio = "w"
    productoorden.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto : request.payload.idProducto,
          idOrden : request.payload.idOrden,
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'ProductoOrden not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteProductoOrden = {
  
  handler: function(request, reply){
    this.envio ="w"
    productoorden.deleteMany({'idOrden' : request.params._id}, function(err, ProductoOrden){
      if(err){
        this.envio =(boom.badRequest("Could not delete producto orden"));
      }else if(!err && ProductoOrden){
        //ProductoOrden.remove();
        this.envio =('producto orden deleted succesfully');
      }else if(!err){
        this.envio =y(boom.notFound());
      }
    });return envio;
  }
}
exports.createProductoOrden = {
  
  handler: function(request, reply){
    this.envio = "w"
    var newProductoOrden = new productoorden({
      idProducto : request.payload.idProducto,
      idOrden : request.payload.idOrden,
      cantidad_producto : request.payload.cantidad_producto
    });
    newProductoOrden.save(function(err){
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
