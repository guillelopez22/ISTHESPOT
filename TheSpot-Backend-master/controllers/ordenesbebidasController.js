var ordenbebida = require('../schemas/ordenbebida.js');
var mongoose = require('mongoose');

exports.getOrdenesBebidas = {
  
  handler: function(request, reply){
    var ordenesbebidas = ordenbebida.find({});
    reply(ordenesbebidas);
  }
}
exports.getOrdenBebidaId = {
  
  handler : function(request, reply){
    ordenbebida.findOne({'_id' : request.params._id}, function(err, OrdenBebida){
      if(!err && OrdenBebida){
        return reply(OrdenBebida);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'OrdenBebida not found'));
      }
    });
  }
}

exports.getOrdenBebidaOrden = {
  
  handler : function(request, reply){
    ordenbebida.find({'idOrden' : request.params.idOrden}, function(err, OrdenesBebidas){
      if(!err && OrdenesBebidas){
        return reply(OrdenesBebidas);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'OrdenesBebidas not found'));
      }
    });
  }
}

exports.getOrdenBebidaBebida = {
  
    handler : function(request, reply){
      ordenbebida.find({'idBebida' : request.params.idBebida}, function(err, OrdenesBebidas){
        if(!err && OrdenesBebidas){
          return reply(OrdenesBebidas);
        }else if(!err){
          return reply(boom.notFound());
        }else if(err){
          return reply(boom.wrap(err, 'OrdenesBebidas not found'));
        }
      });
    }
  }

exports.modifyOrdenBebida = {
  
  handler: function(request, reply){
    ordenbebida.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idOrden,
          idBebida : request.payload.idBebida,
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'OrdenBebida not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteOrdenBebida = {
  
  handler: function(request, reply){
    ordenbebida.findOne({'_id' : request.params._id}, function(err, OrdenBebida){
      if(err){
        return reply(boom.badRequest("Could not delete OrdenBebida"));
      }else if(!err && OrdenBebida){
        OrdenBebida.remove();
        return reply('OrdenBebida deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createOrdenBebida = {
  
  handler: function(request, reply){
    var newOrdenBebida = new ordenbebida({
        idOrden : request.payload.idOrden,
        idBebida : request.payload.idBebida,
    });
    newOrdenBebida.save(function(err){
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
