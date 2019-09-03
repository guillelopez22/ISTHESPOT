var promocion = require('../schemas/promocion.js');
var mongoose = require('mongoose');

exports.getPromociones = {
  handler: function(request, reply){
    var promociones = promocion.find({});
    return(promociones);
  }
}
exports.getPromocionId = {

  handler : function(request, reply){
    this.envio = "w"
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });
    return envio;
  }
}
exports.getPromocionProductos = {

  handler : function(request, reply){
    this.envio = "w"
    promocion.find({'idProducto' : request.params.idProducto}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });
    return envio;
  }
}
exports.getPromocionDescuento = {
 
  handler : function(request, reply){
    this.envio = "w"
    promocion.find({'idProveedor' : request.params.descuento}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });return envio;
  }
}
exports.getPromocionName = {

  handler : function(request, reply){
    this.envio = "w"
    promocion.find({'nombre' : request.params.nombre}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });return envio;
  }
}
exports.getPromocionHora_Inicio = {
  
  handler : function(request, reply){
    this.envio = "w"
    promocion.find({'hora_inicio' : request.params.hora_inicio}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });return envio;
  }
}
exports.getPromocionHora_Final = {
  handler : function(request, reply){
    this.envio = "w"
    promocion.find({'hora_final' : request.params.hora_final}, function(err, Promocion){
      if(!err && Promocion){
        this.envio =(Promocion);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Promocion not found'));
      }
    });return envio;
  }
}
exports.modifyPromocion = {
  handler: function(request, reply){
    this.envio = "w"
    promocion.update(
      {'_id': request.params._id},
      {$set:
        {
          idProducto : request.payload.idProducto,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          cantidad : request.payload.cantidad,
          descuento : request.payload.descuento,
          hora_inicio : request.payload.hora_inicio,
          hora_final : request.payload.hora_final
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'Promocion not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deletePromocion = {

  handler: function(request, reply){
    this.envio = "w"
    promocion.findOne({'_id' : request.params._id}, function(err, Promocion){
      if(err){
        this.envio =(boom.badRequest("Could not delete promocion"));
      }else if(!err && Promocion){
        Promocion.remove();
        this.envio =('Promocion deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createPromocion = {
  handler: function(request, reply){
    this.envio = "w"
    var newPromocion = new promocion({
      idProducto : request.payload.idProducto,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      cantidad : request.payload.cantidad,
      descuento : request.payload.descuento,
      hora_inicio : request.payload.hora_inicio,
      hora_final : request.payload.hora_final
    });
    newPromocion.save(function(err){
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
