var cuenta = require('../schemas/cuenta.js');
var mongoose = require('mongoose');

exports.getCuentas = {
  
  handler: function(request, reply){
    var cuentas = cuenta.find({});
    return(cuentas);
  }
}
exports.getCuentaId = {
  
  handler : function(request, reply){
    cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
      if(!err && Cuenta){
        return (Cuenta);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Cuenta not found'));
      }
    });
    
  }
}
exports.getCuentaUsuario = {
  handler : function(request, reply){
    cuenta.find({'idUsuario' : request.params.idUsuario}, function(err, Usuarios){
      if(!err && Usuarios){
        return (Usuarios);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getCuentaTotal = {
  
  handler : function(request, reply){
    cuenta.find({'total' : request.params.total}, function(err, Cuentas){
      if(!err && Cuentas){
        return (Cuentas);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'total not found'));
      }
    });
  }
}
exports.getCuentaEstado = {
  handler : function(request, reply){
    cuenta.find({'estado' : request.params.estado}, function(err, Cuentas){
      if(!err && Cuentas){
        return (Cuentas);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'estado not found'));
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
          return (boom.wrap(err, 'cuenta not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deleteCuenta = {
  
  handler: function(request, reply){
    cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
      if(err){
        return (boom.badRequest("Could not delete cuenta"));
      }else if(!err && Cuenta){
        Cuenta.remove();
        return ('cuenta deleted succesfully');
      }else if(!err){
        return (boom.notFound());
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
        return ({
          success: true
        });
      }else{
        return ({
          success: false
        })
      }
    });
  }
}
