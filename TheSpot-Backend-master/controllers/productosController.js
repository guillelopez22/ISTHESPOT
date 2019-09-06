var producto = require('../schemas/producto.js');
var mongoose = require('mongoose');

exports.getProductos = {
  handler: function(request, reply){
    var productos = producto.find({});
    return(productos);
  }
}
exports.getProductoId = {
  handler : function(request, reply){
    this.envio = "w"
    producto.findOne({'_id' : request.params._id}, function(err, Producto){
      if(!err && Producto){
        this.envio =(Producto);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Producto not found'));
      }
    });
    return envio;
  }
}
exports.getProductoIdBebida = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'idBebida' : request.params.idBebida}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });
    return envio;
  }
}

exports.getProductoIdInsumo = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'idInsumo' : request.params.idInsumo}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });return envio;
  }
}

exports.getProductoTipo = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'tipo' : request.params.tipo}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });
    return envio;
  }
}

exports.getProductoNombre = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'nombre' : request.params.nombre}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });return envio;
  }
}
exports.getProductoPrecio = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'precio' : request.params.precio}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });
    return envio;
  }
}

exports.getProductoCantidad = {
  handler : function(request, reply){
    this.envio = "w"
    producto.find({'cantidad' : request.params.cantidad}, function(err, Productos){
      if(!err && Productos){
        this.envio =(Productos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Productos not found'));
      }
    });return envio;
  }
}


exports.modifyProducto = {
  handler: function(request, reply){
    this.envio = "w"
    producto.update(
      {'_id': request.params._id},
      {$set:
        {
          //id : request.payload.id,
          nombre : request.payload.nombre,
          tipo : request.payload.tipo,
          descripcion : request.payload.descripcion,
          cantidad : request.payload.cantidad,
          precio : request.payload.precio,
          imagen: request.payload.imagen
        }
      }, function(err){
        if(err){
          
          this.envio =(boom.wrap(err, 'Producto not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteProducto = {
  handler: function(request, reply){
    this.envio = "w"
    producto.findOne({'_id' : request.params._id}, function(err, Producto){
      if(err){
        this.envio =(boom.badRequest("Could not delete producto"));
      }else if(!err && Producto){
        Producto.remove();
        this.envio =('Producto deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createProducto = {
  handler: function(request, reply){
    this.envio=true;
    var newProducto = new producto({
          nombre : request.payload.nombre,
          tipo : request.payload.tipo,
          descripcion : request.payload.descripcion,
          cantidad : request.payload.cantidad,
          precio : request.payload.precio,
          imagen: request.payload.imagen
    });
    newProducto.save(function(err){
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
