var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getInsumos = {
 
  handler: function(request, reply){
    var insumos = insumo.find({});
    return(insumos);
  }
}
exports.getInsumoId = {
  
  handler : async function(request, reply){
    try {
      var Insumo = await insumo.findById(request.params._id).exec();
      return reply.response(Insumo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w"
    // insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
    //   if(!err && Insumo){
    //     this.envio =(Insumo);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Insumo not found'));
    //   }
    // });return envio;
  }
}
exports.getInsumoName = {
  handler : async function(request, reply){
    try {
      var Insumo = await insumo.find({'nombre': request.params.nombre}).exec();
      return reply.response(Insumo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w"
    // insumo.find({'nombre' : request.params.nombre}, function(err, Insumos){
    //   if(!err && Insumos){
    //     this.envio =(Insumos);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Insumos not found'));
    //   }
    // }); return envio;
  }
}
exports.getInsumoProveedor = {
 
  handler : async function(request, reply){
    try {
      var Insumo = await insumo.find({'idProveedor': request.params.idProveedor}).exec();
      return reply.response(Insumo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w"
    // insumo.find({'idProveedor' : request.params.idProveedor}, function(err, Insumos){
    //   if(!err && Insumos){
    //     this.envio =(Insumos);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Insumos not found'));
    //   }
    // });return envio;
  }
}
exports.getInsumoInventario = {
  
  handler : async function(request, reply){
    try {
      var Insumo = await insumo.find({'inventario': request.params.inventario}).exec();
      return reply.response(Insumo);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w"
    // insumo.find({'inventario' : request.params.inventario}, function(err, Insumos){
    //   if(!err && Insumos){
    //     this.envio =(Insumos);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Insumos not found'));
    //   }
    // });return envio
  }
}
exports.modifyInsumo = {

  handler: async function(request, reply){
    try {
      var result = await insumo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
        throw boom.badRequest();
    }
    // this.envio = "w"
    // insumo.update(
    //   {'_id': request.params._id},
    //   {$set:
    //     {
    //       nombre : request.payload.nombre,
    //       inventario : request.payload.inventario,
    //       idProveedor : request.payload.idProveedor
    //     }
    //   }, function(err){
    //     if(err){
    //       this.envio =(boom.wrap(err, 'Insumo not found'));
    //     }else{
    //       this.envio =('updated succesfully');
    //     }
    //   }
    // );return envio;
  }
}
exports.deleteInsumo = {
  handler: async function(request, reply){
    try {
      var result = await insumo.findByIdAndDelete(request.params._id);
      return reply.response({success: true});
  } catch (error) {
    throw boom.badRequest();
  }
    // this.envio = "w";
    // insumo.findOne({'_id' : request.params._id}, function(err, Insumo){
    //   if(err){
    //     this.envio =(boom.badRequest("Could not delete insumo"));
    //   }else if(!err && Insumo){
    //     Insumo.remove();
    //     this.envio =('Insumo deleted succesfully');
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }
    // });return envio;
  }
}
exports.createInsumo = {

  handler: async function(request, reply){
    try {
      var newInsumo = new insumo({
        nombre : request.payload.nombre,
        inventario : request.payload.inventario,
        idProveedor : request.payload.idProveedor
      });
      var result = await newInsumo.save();
      return reply.response({success: true, insumo: result});
    } catch(error) {
      throw boom.badRequest();
    }
    // this.envio = "w"
    // var newInsumo = new insumo({
    //   nombre : request.payload.nombre,
    //   inventario : request.payload.inventario,
    //   idProveedor : request.payload.idProveedor
    // });
    // newInsumo.save(function(err){
    //   if(!err){
    //     this.envio ={
    //       success: true
    //     };
    //   }else{
    //     this.envio ={
    //       success: false
    //     }
    //   }
    // });return envio;
  }
}
