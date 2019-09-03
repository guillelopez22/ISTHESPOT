var mesaempleado = require('../schemas/mesaempleado.js');
var mongoose = require('mongoose');

exports.getMesasEmpleados = {
  
  handler: function(request, reply){
    var mesasempleados = mesaempleado.find({});
    return(mesasempleados);
  }
}
exports.getMesaEmpleadoId = {
  
  handler : function(request, reply){
    this.envio = "w"
    mesaempleado.findOne({'_id' : request.params._id}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        this.envio = (MesaEmpleado);
      }else if(!err){
        this.envio = (boom.notFound());
      }else if(err){
        this.envio = (boom.wrap(err, 'mesa empleado not found'));
      }
    });
    return envio;
  }
}
exports.getMesaEmpleadoMesa = {
  handler : function(request, reply){
    this.envio = "w"
    mesaempleado.find({'idMesa' : request.params.idMesa}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        this.envio = (MesaEmpleado);
      }else if(!err){
        this.envio = (boom.notFound());
      }else if(err){
        this.envio = (boom.wrap(err, 'mesa not found'));
      }
    });
    return envio;
  }
}
exports.getMesaEmpleadoEmpleado = {
  
  handler : function(request, reply){
    this.envio = "w"
    mesaempleado.find({'idEmpleado' : request.params.idEmpleado}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        this.envio = (MesaEmpleado);
      }else if(!err){
        this.envio = (boom.notFound());
      }else if(err){
        this.envio = (boom.wrap(err, 'empleado not found'));
      }
    });
    return envio;
  }
}
exports.modifyMesaEmpleado = {
  
  handler: function(request, reply){
    this.envio = "w"
    mesaempleado.update(
      {'_id': request.params._id},
      {$set:
        {
          idMesa : request.payload.idMesa,
          idEmpleado : request.payload.idEmpleado,
        }
      }, function(err){
        if(err){
          this.envio =(boom.wrap(err, 'mesa empleado not found'));
        }else{
          this.envio =('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteMesaEmpleado = {
  
  handler: function(request, reply){
    this.envio = "w"
    mesaempleado.deleteMany({'idMesa' : request.params._id}, function(err, MesaEmpleado){
      if(err){
        this.envio =(boom.badRequest("Could not delete MesaEmpleado"));
      }else if(!err && MesaEmpleado){
        this.envio =('MesaEmpleado deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createMesaEmpleado = {
  
  handler: function(request, reply){
    this.envio ="w"
    var newMesaEmpleado = new mesaempleado({
        idMesa : request.payload.idMesa,
        idEmpleado : request.payload.idEmpleado,
    });
    newMesaEmpleado.save(function(err){
      if(!err){
        this.envio ={
          success: true
        }
      }else{
        this.envio ={
          success: false
        }
      }
    });
  }
}
