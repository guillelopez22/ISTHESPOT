var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');

exports.getProveedores = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var proveedores = proveedor.find({});
    reply(proveedores);
  }
}
exports.getProveedorId = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.findOne({'_id' : request.params._id}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply(Proveedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proveedor not found'));
      }
    });
  }
}
exports.getProveedorInsumos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'idInsumo' : request.params.idInsumo}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply(Proveedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proveedor not found'));
      }
    });
  }
}
exports.getProveedorBebidas = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'idBebidas' : request.params.idBebidas}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply(Proveedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proveedor not found'));
      }
    });
  }
}
exports.getProveedorName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'nombre' : request.params.idInsumo}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply(Proveedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proveedor not found'));
      }
    });
  }
}
exports.getProveedorContacto = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    proveedor.find({'contacto' : request.params.contacto}, function(err, Proveedor){
      if(!err && Proveedor){
        return reply(Proveedor);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Proveedor not found'));
      }
    });
  }
}
exports.modifyProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    proveedor.update(
      {'_id': request.params._id},
      {$set:
        {
          idInsumo : request.payload.idInsumo,
          idBebidas : request.payload.idBebidas,
          nombre : request.payload.nombre,
          pais : request.payload.pais,
          telefono : request.payload.telefono,
          contacto : request.payload.contacto,
          email : request.payload.email,
          direccion : request.payload.direccion
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Proveedor not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    proveedor.findOne({'_id' : request.params._id}, function(err, Proveedor){
      if(err){
        return reply(boom.badRequest("Could not delete Proveedor"));
      }else if(!err && Proveedor){
        Proveedor.remove();
        return reply('Proveedor deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createProveedor = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newProveedor = new proveedor({
      idInsumo : request.payload.idInsumo,
      idBebidas : request.payload.idBebidas,
      nombre : request.payload.nombre,
      pais : request.payload.pais,
      telefono : request.payload.telefono,
      contacto : request.payload.contacto,
      email : request.payload.email,
      direccion : request.payload.direccion
    });
    newProveedor.save(function(err){
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
