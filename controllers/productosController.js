var producto = require('../schemas/producto.js');
var mongoose = require('mongoose');

exports.getProductos = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}
exports.getProductoId = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.findOne({'_id' : request.params._id}, function(err, Producto){
      if(!err && Producto){
        return reply(Producto);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Producto not found'));
      }
    });
  }
}
exports.getProductoIdBebida = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.find({'idBebida' : request.params.idBebida}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}

exports.getProductoIdInsumo = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.find({'idInsumo' : request.params.idInsumo}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}

exports.getProductoTipo = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler : function(request, reply){
    producto.find({'tipo' : request.params.tipo}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}

exports.getProductoNombre = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.find({'nombre' : request.params.nombre}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}
exports.getProductoPrecio = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.find({'precio' : request.params.precio}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}

exports.getProductoCantidad = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente', 'personal', 'cliente']
  },*/
  handler : function(request, reply){
    producto.find({'cantidad' : request.params.cantidad}, function(err, Productos){
      if(!err && Productos){
        return reply(Productos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Productos not found'));
      }
    });
  }
}


exports.modifyProducto = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    producto.update(
      {'_id': request.params._id},
      {$set:
        {
          //id : request.payload.id,
          nombre : request.payload.nombre,
          tipo : request.payload.tipo,
          descripcion : request.payload.descripcion,
          idBebida : request.payload.idBebida,
          idInsumo : request.payload.idInsumo,
          cantidad : request.payload.cantidad,
          precio : request.payload.precio
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Producto not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProducto = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    producto.findOne({'_id' : request.params._id}, function(err, Producto){
      if(err){
        return reply(boom.badRequest("Could not delete producto"));
      }else if(!err && Producto){
        Producto.remove();
        return reply('Producto deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProducto = {
  /*auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },*/
  handler: function(request, reply){
    var newProducto = new producto({
          nombre : request.payload.nombre,
          tipo : request.payload.tipo,
          descripcion : request.payload.descripcion,
          idBebida : request.payload.idBebida,
          idInsumo : request.payload.idInsumo,
          cantidad : request.payload.cantidad,
          precio : request.payload.precio
    });
    newProducto.save(function(err){
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
