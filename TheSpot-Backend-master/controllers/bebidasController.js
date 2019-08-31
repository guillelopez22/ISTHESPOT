var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');


exports.getBebidas = {
  
  handler: async function(request, reply){
    var bebidas = bebida.find({});
    return bebidas;
  }
}
exports.getBebidaId = {
  
  handler : async function(request, reply){
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(!err && Bebida){
        return (Bebida);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Bebida not found'));
      }
    });
    return (Bebida);
  }
}
exports.getBebidaName = {
  handler : async function(request, reply){
    bebida.find({'nombre' : request.params.nombre}, function(err, Bebidas){
      if(!err && Bebidas){
        return (Bebidas);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return (Bebidas);
  }
}
exports.getBebidaProveedor = {
  
  handler : async function(request, reply){
    bebida.find({'idProveedor' : request.params.idProveedor}, function(err, Bebidas){
      if(!err && Bebidas){
        return (Bebidas);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return (Bebidas);
  }
}
exports.getBebidaTipo = {
  handler : async function(request, reply){
    bebida.find({'tipo' : request.params.tipo}, function(err, Bebidas){
      if(!err && Bebidas){
        return (Bebidas);
      }else if(!err){
        return (boom.notFound());
      }else if(err){
        return (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return (Bebidas);
  }
}
exports.modifyBebida = {
  
  handler: async function(request, reply){
    bebida.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          idProveedor : request.payload.idProveedor,
          tipo : request.payload.tipo,
          inventario : request.payload.inventario,
          descripcion : request.payload.descripcion
        }
      }, function(err){
        if(err){
          return (boom.wrap(err, 'Bebida not found'));
        }else{
          return ('updated succesfully');
        }
      }
    );
    return ('updated succesfully');
  }
}
exports.deleteBebida = {
  
  handler: async(request, reply) =>{
    bebida.findOne({'_id' : request.params._id}, function(err, Bebida){
      if(err){
        return (boom.badRequest("Could not delete bebida"));
      }else if(!err && Bebida){
        Bebida.remove();
         return ('Bebida deleted succesfully');
      }else if(!err){
        return (boom.notFound());
      }
    });
    return ('Bebida deleted succesfully');
  }
  //AQUI SE DEBERIA DE RETORNAR EsVerdadero
}
exports.createBebida = {
  
  handler: async function(request, reply){
    var EsVerdadero=false;
    var newBebida = new bebida({
      nombre : request.payload.nombre,
      idProveedor : request.payload.idProveedor,
      tipo : request.payload.tipo,
      inventario : request.payload.inventario,
      descripcion : request.payload.descripcion
    });
     newBebida.save(function(err){
      if(!err){
        EsVerdadero=Boolean(true);
        console.log("entro a lo de new bebid",EsVerdadero)
        return true;
        
      }else{
        
        return ({
          success: false
        })
        
      }
    });
    return true;
  }
}