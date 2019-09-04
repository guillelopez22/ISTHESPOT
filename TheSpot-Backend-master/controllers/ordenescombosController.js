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
    this.envio = "w"
    ordencombo.findOne({'_id' : request.params._id}, function(err, OrdenCombo){
      if(!err && OrdenCombo){
        this.envio =(OrdenCombo);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'OrdenCombo not found'));
      }
    });return envio;
  }
}

exports.getOrdenComboOrden = {
  
  handler : function(request, reply){
    this.envio = "w"
    ordencombo.find({'idOrden' : request.params.idOrden}, function(err, OrdenesCombos){
      if(!err && OrdenesCombos){
        this.envio =(OrdenesCombos);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'OrdenesCombos not found'));
      }
    });
    return envio;
  }
}

exports.getOrdenComboCombo = {
  
    handler : function(request, reply){
      this.envio = "w"
      ordencombo.find({'idCombo' : request.params.idCombo}, function(err, OrdenesCombos){
        if(!err && OrdenesCombos){
          this.envio =(OrdenesCombos);
        }else if(!err){
          this.envio =(boom.notFound());
        }else if(err){
          this.envio =(boom.wrap(err, 'OrdenesCombos not found'));
        }
      });
      return envio;
    }
  }

exports.modifyOrdenCombo = {
  
  handler: function(request, reply){
    this.envio = "w"
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
          return reply(boom.wrap(err, 'OrdenCombo not found'));
        }else{
          return reply('updated succesfully');
        }
      }
    );return envio;
  }
}
exports.deleteOrdenCombo = {
  
  handler: function(request, reply){
    this.envio = "w"
    ordencombo.deleteMany({'idOrden' : request.params._id}, function(err, OrdenCombo){
      if(err){
        this.envio =(boom.badRequest("Could not delete OrdenCombo"));
      }else if(!err && OrdenCombo){
        this.envio =('OrdenCombo deleted succesfully');
      }else if(!err){
        this.envio =(boom.notFound());
      }
    });
    return envio;
  }
}
exports.createOrdenCombo = {
  
  handler: function(request, reply){
    this.envio ="w "
    var newOrdenCombo = new ordencombo({
        idOrden : request.payload.idOrden,
        idCombo : request.payload.idCombo,
        cantidad_combo : request.payload.cantidad_combo
    });
    newOrdenCombo.save(function(err){
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
