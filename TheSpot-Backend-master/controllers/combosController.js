var combo = require('../schemas/combo.js');
var mongoose = require('mongoose');

exports.getCombos = {
  handler: function(request, reply){
    var combos = combo.find({});
    return(combos);
  }
}
exports.getComboId = {
  handler : function(request, reply){
    this.envio = "w";
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(!err && Combo){
        this.envio =(Combo);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'Combo not found'));
      }
    });return envio;
  }
}
exports.getComboName = {
  
  handler : function(request, reply){
    this.envio = "w";
    combo.find({'nombre' : request.params.nombre}, function(err, Combos){
      if(!err && Combos){
        this.envio = (Combos);
      }else if(!err){
        this.envio = (boom.notFound());
      }else if(err){
        this.envio = (boom.wrap(err, 'Combo not found'));
      }
    });return envio;
  }
}
exports.getComboPrecio = {
  
  handler : function(request, reply){
    this.envio = "w";
    combo.find({'precio' : request.params.precio}, function(err, Combos){
      if(!err && Combos){
        this.envio = (Combos);
      }else if(!err){
        this.envio = (boom.notFound());
      }else if(err){
        this.envio = (boom.wrap(err, 'Combo not found'));
      }
    });return envio;
  }
}
exports.modifyCombo = {
  
  handler: function(request, reply){
    this.envio = "w";
    combo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          descripcion : request.payload.descripcion,
          precio : request.payload.precio
        }
      }, function(err){
        if(err){
          this.envio = (boom.wrap(err, 'Combo not found'));
        }else{
          this.envio = ('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteCombo = {
 
  handler: function(request, reply){
    this.envio = "w";
    combo.findOne({'_id' : request.params._id}, function(err, Combo){
      if(err){
        this.envio =(boom.badRequest("Could not delete Combo"));
      }else if(!err && Combo){
        Combo.remove();
        this.envio =('Combo deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });return envio;
  }
}
exports.createCombo = {
  
  handler: function(request, reply){
    this.envio = "w";
    var newCombo = new combo({
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      precio : request.payload.precio
    });
    newCombo.save(function(err){
      if(!err){
        this.envio = {
          success: true
        };
      }else{
        this.envio = {
          success: false
        }
      }
    });
  }
}
