var combo = require('../schemas/combo.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getCombos = {
  handler: function(request, reply){
    var combos = combo.find({});
    return(combos);
  }
}
exports.getComboId = {
  handler : async function(request, reply){
    try {
      var Combo = await combo.findById(request.params._id).exec();
      return reply.response(Combo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // combo.findOne({'_id' : request.params._id}, function(err, Combo){
    //   if(!err && Combo){
    //     this.envio =(Combo);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Combo not found'));
    //   }
    // });return envio;
  }
}
exports.getComboName = {
  
  handler : async function(request, reply){
    try {
      var Combo = await combo.find({'nombre': request.params.nombre}).exec();
      return reply.response(Combo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // combo.find({'nombre' : request.params.nombre}, function(err, Combos){
    //   if(!err && Combos){
    //     this.envio = (Combos);
    //   }else if(!err){
    //     this.envio = (boom.notFound());
    //   }else if(err){
    //     this.envio = (boom.wrap(err, 'Combo not found'));
    //   }
    // });return envio;
  }
}
exports.getComboPrecio = {
  
  handler : async function(request, reply){
    try {
      var Combo = await combo.find({'precio': request.params.precio}).exec();
      return reply.response(Combo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // combo.find({'precio' : request.params.precio}, function(err, Combos){
    //   if(!err && Combos){
    //     this.envio = (Combos);
    //   }else if(!err){
    //     this.envio = (boom.notFound());
    //   }else if(err){
    //     this.envio = (boom.wrap(err, 'Combo not found'));
    //   }
    // });return envio;
  }
}
exports.modifyCombo = {
  
  handler: async function(request, reply){
    try {
      var result = await combo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
        throw boom.badRequest();
    }
    // this.envio = "w";
    // combo.update(
    //   {'_id': request.params._id},
    //   {$set:
    //     {
    //       nombre : request.payload.nombre,
    //       descripcion : request.payload.descripcion,
    //       precio : request.payload.precio
    //     }
    //   }, function(err){
    //     if(err){
    //       this.envio = (boom.wrap(err, 'Combo not found'));
    //     }else{
    //       this.envio = ('updated succesfully');
    //     }
    //   }
    // );return envio;
  }
}
exports.deleteCombo = {
 
  handler: async function(request, reply){
    try {
      var result = await combo.findByIdAndDelete(request.params._id);
      return reply.response({success: true});
  } catch (error) {
    throw boom.badRequest();
  }
    // this.envio = "w";
    // combo.findOne({'_id' : request.params._id}, function(err, Combo){
    //   if(err){
    //     this.envio =(boom.badRequest("Could not delete Combo"));
    //   }else if(!err && Combo){
    //     Combo.remove();
    //     this.envio =('Combo deleted succesfully');
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }
    // });return envio;
  }
}
exports.createCombo = {
  
  handler: async function(request, reply){
    try {
      var newCombo = new combo({
        nombre : request.payload.nombre,
        descripcion : request.payload.descripcion,
        precio : request.payload.precio
      });
      var result = await newCombo.save();
      return reply.response({success: true, combo: result});
  } catch (error) {
     throw boom.badRequest();
  }
    // this.envio = "w";
    // var newCombo = new combo({
    //   nombre : request.payload.nombre,
    //   descripcion : request.payload.descripcion,
    //   precio : request.payload.precio
    // });
    // newCombo.save(function(err){
    //   if(!err){
    //     this.envio = {
    //       success: true
    //     };
    //   }else{
    //     this.envio = {
    //       success: false
    //     }
    //   }
    // });return envio;
  }
}
