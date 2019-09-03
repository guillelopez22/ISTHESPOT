var orden = require('../schemas/orden.js');
var mongoose = require('mongoose');

exports.getOrdenes = {

  handler: function(request, reply){
    var ordenes = orden.find({});
    return(ordenes);
  }
}
exports.getOrdenesId = {
  
  handler : function(request, reply){
    this.envio = "w"
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(!err && Orden){
        this.envio =(Orden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Orden not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenesName = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'nombre' : request.params.nombre}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenesIdCombos = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'idProveedor' : request.params.idCombos}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;;
  }
}
exports.getOrdenesProductos = {
  
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'idProductos' : request.params.idProductos}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenesPromociones = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'idPromociones' : request.params.idPromociones}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenesMesa = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'idMesa' : request.params.idMesa}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =y(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenesFecha = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'fecha' : request.params.fecha}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =y(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.getOrdenPersonal = {
  handler : function(request, reply){
    this.envio = "w"
    orden.find({'idPersonal' : request.params.idPersonal}, function(err, Ordenes){
      if(!err && Ordenes){
        this.envio =(Ordenes);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Ordenes not found'));
      }
    });
    return envio;
  }
}
exports.modifyOrden = {
  handler: function(request, reply){
    this.envio = "w"
    orden.update(
      {'_id': request.params._id},
      {$set:
        {
          idMesa: request.payload.idMesa,
          idEmpleado: request.payload.idEmpleado,
          idBebidas: request.payload.idBebidas,
          idProductos: request.payload.idProductos,
          idCombos: request.payload.idCombos
          
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'Orden not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteOrden = {
  handler: function(request, reply){
    this.envio ="w"
    orden.findOne({'_id' : request.params._id}, function(err, Orden){
      if(err){
        this.envio =(boom.badRequest("Could not delete Orden"));
      }else if(!err && Orden){
        Orden.remove();
        this.envio =('Orden deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createOrden = {
  handler: function(request, reply){
    this.envio ="w"
    var newOrden = new orden({
      idMesa: request.payload.idMesa,
          idEmpleado: request.payload.idEmpleado,
          idBebidas: request.payload.idBebidas,
          idProductos: request.payload.idProductos,
          idCombos: request.payload.idCombos
    });
    newOrden.save(function(err){
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
