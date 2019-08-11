var cuenta = require('../schemas/cuenta.js');
var mongoose = require('mongoose');

exports.getCuentas = {
  
  handler: function(request, reply){
    var cuentas = cuenta.find({});
    reply(cuentas);
  }
}
exports.getCuentaId = {
  
  handler : function(request, reply){
    cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
      if(!err && Cuenta){
        return reply(Cuenta);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Cuenta not found'));
      }
    });
  }
}
exports.getCuentaUsuario = {
  handler : function(request, reply){
    cuenta.find({'idUsuario' : request.params.idUsuario}, function(err, Usuarios){
      if(!err && Usuarios){
        return reply(Usuarios);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getCuentaTotal = {
  
  handler : function(request, reply){
    cuenta.find({'total' : request.params.total}, function(err, Cuentas){
      if(!err && Cuentas){
        return reply(Cuentas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'total not found'));
      }
    });
  }
}
exports.getCuentaEstado = {
  handler : function(request, reply){
    cuenta.find({'estado' : request.params.estado}, function(err, Cuentas){
      if(!err && Cuentas){
        return reply(Cuentas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'estado not found'));
      }
    });
  }
}
exports.modifyCuenta = {
  
  handler: function(request, reply){
    cuenta.update(
      {'_id': request.params._id},
      {$set:
        {
          idUsuario : request.payload.idUsuario,
          total : request.payload.total,
          estado : request.payload.estado,
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'cuenta not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteCuenta = {
  
  handler: function(request, reply){
    cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
      if(err){
        return reply(boom.badRequest("Could not delete cuenta"));
      }else if(!err && Cuenta){
        Cuenta.remove();
        return reply('cuenta deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createCuenta = {
  
  handler: function(request, reply){
    var newCuenta = new cuenta({
        idUsuario : request.payload.idUsuario,
        total : request.payload.total,
        estado : request.payload.estado,
    });
    newCuenta.save(function(err){
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
