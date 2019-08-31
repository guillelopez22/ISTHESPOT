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
    mesaempleado.findOne({'_id' : request.params._id}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return (MesaEmpleado);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'mesa empleado not found'));
      }
    });
  }
}
exports.getMesaEmpleadoMesa = {
  handler : function(request, reply){
    mesaempleado.find({'idMesa' : request.params.idMesa}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return (MesaEmpleado);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'mesa not found'));
      }
    });
  }
}
exports.getMesaEmpleadoEmpleado = {
  
  handler : function(request, reply){
    mesaempleado.find({'idEmpleado' : request.params.idEmpleado}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return (MesaEmpleado);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'empleado not found'));
      }
    });
  }
}
exports.modifyMesaEmpleado = {
  
  handler: function(request, reply){
    mesaempleado.update(
      {'_id': request.params._id},
      {$set:
        {
          idMesa : request.payload.idMesa,
          idEmpleado : request.payload.idEmpleado,
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'mesa empleado not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deleteMesaEmpleado = {
  
  handler: function(request, reply){
    mesaempleado.deleteMany({'idMesa' : request.params._id}, function(err, MesaEmpleado){
      if(err){
        return (boom.badRequest("Could not delete MesaEmpleado"));
      }else if(!err && MesaEmpleado){
        //MesaEmpleado.remove();
        return ('MesaEmpleado deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
  }
}
exports.createMesaEmpleado = {
  
  handler: function(request, reply){
    var newMesaEmpleado = new mesaempleado({
        idMesa : request.payload.idMesa,
        idEmpleado : request.payload.idEmpleado,
    });
    newMesaEmpleado.save(function(err){
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
