var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');

exports.getInsumos = {
 
  handler: function(request, reply){
    var insumos = insumo.find({});
    return(insumos);
  }
}
exports.getInsumoId = {
  
  handler : function(request, reply){
    this.envio = "w"
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(!err && Insumo){
        this.envio =(Insumo);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Insumo not found'));
      }
    });return envio;
  }
}
exports.getInsumoName = {
  
  handler : function(request, reply){
    this.envio = "w"
    insumo.find({'nombre' : request.params.nombre}, function(err, Insumos){
      if(!err && Insumos){
        this.envio =(Insumos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Insumos not found'));
      }
    }); return envio;
  }
}
exports.getInsumoProveedor = {
 
  handler : function(request, reply){
    this.envio = "w"
    insumo.find({'idProveedor' : request.params.idProveedor}, function(err, Insumos){
      if(!err && Insumos){
        this.envio =(Insumos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Insumos not found'));
      }
    });return envio;
  }
}
exports.getInsumoInventario = {
  
  handler : function(request, reply){
    this.envio = "w"
    insumo.find({'inventario' : request.params.inventario}, function(err, Insumos){
      if(!err && Insumos){
        this.envio =(Insumos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Insumos not found'));
      }
    });return envio
  }
}
exports.modifyInsumo = {

  handler: function(request, reply){
    this.envio = "w"
    insumo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          inventario : request.payload.inventario,
          idProveedor : request.payload.idProveedor
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'Insumo not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteInsumo = {
  handler: function(request, reply){
    this.envio = "w";
    insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
      if(err){
        this.envio =(boom.badRequest("Could not delete insumo"));
      }else if(!err && Insumo){
        Insumo.remove();
        this.envio =('Insumo deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createInsumo = {

  handler: function(request, reply){
    this.envio = "w"
    var newInsumo = new insumo({
      nombre : request.payload.nombre,
      inventario : request.payload.inventario,
      idProveedor : request.payload.idProveedor
    });
    newInsumo.save(function(err){
      if(!err){
        this.envio ={
          success: true
        };
      }else{
        this.envio ={
          success: false
        }
      }
    });return envio;
  }
}
