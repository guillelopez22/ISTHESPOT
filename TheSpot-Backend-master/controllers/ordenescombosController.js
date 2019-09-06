var ordencombo = require('../schemas/ordencombo.js');
var mongoose = require('mongoose');

exports.getOrdenesCombos = {

  handler: function (request, reply) {
    var ordenescombos = ordencombo.find({});
    return (ordenescombos);
  }
}
exports.getOrdenComboId = {

  handler: async function (request, reply) {
    try {
      var orden = await ordencombo.findById(request.params._id).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }

    // return reply.response(envio);
  }
}

exports.getOrdenComboOrden = {
  handler: async function (request, reply) {
    try {
      var orden = await ordencombo.find({ 'idOrden': request.params.idOrden }).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler : function(request, reply){
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
  }*/
}

exports.getOrdenComboCombo = {
  handler: async function (request, reply) {
    try {
      var orden = await ordencombo.find({ 'idCombo': request.params.idCombo }).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler : function(request, reply){
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
  }*/
}

exports.modifyOrdenCombo = {
  handler: async function (request, reply) {
    try {
      var result = await ordencombo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
  /*handler: function(request, reply){
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
  }*/
}
exports.deleteOrdenCombo = {
  handler: async function (request, reply) {
    try {
      var result = await ordencombo.deleteMany({ 'idOrden': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
  /*handler: function(request, reply){
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
  }*/
}
exports.createOrdenCombo = {

  handler: async function (request, reply) {
    try {
      var newOrdenCombo = new ordencombo({
        idOrden: request.payload.idOrden,
        idCombo: request.payload.idCombo,
        cantidad_combo: request.payload.cantidad_combo
      });
      var result = await newOrdenCombo.save();
      return reply.response({ success: true, orden: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
