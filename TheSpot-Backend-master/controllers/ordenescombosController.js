var ordencombo = require('../schemas/ordencombo.js');
var mongoose = require('mongoose');

exports.getOrdenesCombos = {
  
  handler: function(request, reply){
    var ordenescombos = ordencombo.find({});
    return(ordenescombos);
  }
}
exports.getOrdenComboId = {
  
  handler : function(request, reply){
    ordencombo.findOne({'_id' : request.params._id}, function(err, OrdenCombo){
      if(!err && OrdenCombo){
        return (OrdenCombo);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'OrdenCombo not found'));
      }
    });
  }
}

exports.getOrdenComboOrden = {
  
  handler : function(request, reply){
    ordencombo.find({'idOrden' : request.params.idOrden}, function(err, OrdenesCombos){
      if(!err && OrdenesCombos){
        return (OrdenesCombos);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'OrdenesCombos not found'));
      }
    });
  }
}

exports.getOrdenComboCombo = {
  
    handler : function(request, reply){
      ordencombo.find({'idCombo' : request.params.idCombo}, function(err, OrdenesCombos){
        if(!err && OrdenesCombos){
          return (OrdenesCombos);
        }else if(!err){
          return (boom.notFound());
        }else if(err){
          return (boom.wrap(err, 'OrdenesCombos not found'));
        }
      });
    }
  }

exports.modifyOrdenCombo = {
  
  handler: function(request, reply){
    ordencombo.update(
      {'_id': request.params._id},
      {$set:
        {
          idOrden : request.payload.idOrden,
          idCombo : request.payload.idCombo,
          cantidad_combo : request.payload.cantidad_combo
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'OrdenCombo not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
  }
}
exports.deleteOrdenCombo = {
  
  handler: function(request, reply){
    ordencombo.deleteMany({'idOrden' : request.params._id}, function(err, OrdenCombo){
      if(err){
        return (boom.badRequest("Could not delete OrdenCombo"));
      }else if(!err && OrdenCombo){
        //OrdenBebida.remove();
        return ('OrdenCombo deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
  }
}
exports.createOrdenCombo = {
  
  handler: function(request, reply){
    var newOrdenCombo = new ordencombo({
        idOrden : request.payload.idOrden,
        idCombo : request.payload.idCombo,
        cantidad_combo : request.payload.cantidad_combo
    });
    newOrdenCombo.save(function(err){
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
