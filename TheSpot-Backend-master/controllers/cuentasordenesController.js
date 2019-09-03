var cuentaorden = require('../schemas/cuentaorden.js');
var mongoose = require('mongoose');

exports.getCuentaOrden = {
  
  handler: function(request, reply){
    var cuentasordenes = cuentaorden.find({});
    return(cuentasordenes);
  }
}
exports.getCuentaOrdenId = {
  
  handler : function(request, reply){
    this.envio ="w"
    cuentaorden.findOne({'_id' : request.params._id}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        this.envio =(CuentaOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'cuenta orden not found'));
      }
    });return envio;
  }
}
exports.getCuentaOrdenCuenta = {
  handler : function(request, reply){
    this.envio ="w";
    cuentaorden.find({'idCuenta' : request.params.idCuenta}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        this.envio =(CuentaOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'cuenta not found'));
      }
    });return envio;
  }
}
exports.getCuentaOrdenOrden = {
  
  handler : function(request, reply){
    this.envio ="w";
    cuentaorden.find({'idOrden' : request.params.idOrden}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        this.envio =(CuentaOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'orden not found'));
      }
    });
    return envio;
  }
}
exports.getCuentaOrdenDescripcion = {
  handler : function(request, reply){
    this.envio ="w";
    cuentaorden.find({'descripcion' : request.params.descripcion}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        this.envio =(CuentaOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'descripcion not found'));
      }
    });return envio;
  }
}
exports.modifyCuentaOrden = {
  
  handler: function(request, reply){
    this.envio ="w";
    cuentaorden.update(
      {'_id': request.params._id},
      {$set:
        {
          idCuenta : request.payload.idCuenta,
          idOrden : request.payload.idOrden,
          descripcion : request.payload.descripcion,
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'CuentaOrden not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteCuentaOrden = {
  
  handler: function(request, reply){
    this.envio ="w"
    cuentaorden.deleteMany({'idCuenta' : request.params._id}, function(err, CuentaOrden){
      if(err){
        this.envio =(boom.badRequest("Could not delete CuentaOrden"));
      }else if(!err && CuentaOrden){
        //CuentaOrden.remove();
        this.envio =('CuentaOrden deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createCuentaOrden = {
  
  handler: function(request, reply){
    this.envio ="w";
    var newCuentaOrden = new cuentaorden({
      idCuenta : request.payload.idCuenta,
      idOrden : request.payload.idOrden,
      descripcion : request.payload.decripcion,
    });
    newCuentaOrden.save(function(err){
      if(!err){
        this.envio ={
          success: true
        };
      }else{
        this.envio ={
          success: false
        }
      }
    });
  }
}
