var combo = require('../schemas/combo.js');
var mongoose = require('mongoose');

exports.getCombos = {
  handler: function(request, reply){
    var combos = combo.find({});
    reply(combos);
  }
}
exports.getComboId = {
  handler : function(request, reply){
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(!err && Combo){
        return reply(Combo);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Combo not found'));
      }
    });
  }
}
exports.getComboName = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    combo.find({'nombre' : request.params.nombre}, function(err, Combos){
      if(!err && Combos){
        return reply(Combos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Combo not found'));
      }
    });
  }
}
exports.getComboPrecio = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler : function(request, reply){
    combo.find({'precio' : request.params.precio}, function(err, Combos){
      if(!err && Combos){
        return reply(Combos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Combo not found'));
      }
    });
  }
}
exports.modifyCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    combo.update(
      {'_id': request.params._id},
      {$set:
        {
          idProductos : request.payload.idProductos,
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          precio : request.payload.precio
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Combo not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );
  }
}
exports.deleteCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(err){
        return reply(boom.badRequest("Could not delete Combo"));
      }else if(!err && Combo){
        Combo.remove();
        return reply('Combo deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createCombo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'gerente']
  },
  handler: function(request, reply){
    var newCombo = new combo({
      idProductos : request.payload.idProductos,
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      precio : request.payload.precio
    });
    newCombo.save(function(err){
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
