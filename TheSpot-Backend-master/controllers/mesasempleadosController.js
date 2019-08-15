var mesaempleado = require('../schemas/mesaempleado.js');
var mongoose = require('mongoose');

exports.getMesasEmpleados = {
  
  handler: function(request, reply){
    var mesasempleados = mesaempleado.find({});
    reply(mesasempleados);
  }
}
exports.getMesaEmpleadoId = {
  
  handler : function(request, reply){
    mesaempleado.findOne({'_id' : request.params._id}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return reply(MesaEmpleado);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'mesa empleado not found'));
      }
    });
  }
}
exports.getMesaEmpleadoMesa = {
  handler : function(request, reply){
    mesaempleado.find({'idMesa' : request.params.idMesa}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return reply(MesaEmpleado);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'mesa not found'));
      }
    });
  }
}
exports.getMesaEmpleadoEmpleado = {
  
  handler : function(request, reply){
    mesaempleado.find({'idEmpleado' : request.params.idEmpleado}, function(err, MesaEmpleado){
      if(!err && MesaEmpleado){
        return reply(MesaEmpleado);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'empleado not found'));
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
          return reply(boom.wrap(err, 'mesa empleado not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteMesaEmpleado = {
  
  handler: function(request, reply){
    mesaempleado.findOne({'_id' : request.params._id}, function(err, MesaEmpleado){
      if(err){
        return reply(boom.badRequest("Could not delete MesaEmpleado"));
      }else if(!err && MesaEmpleado){
        MesaEmpleado.remove();
        return reply('MesaEmpleado deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
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
