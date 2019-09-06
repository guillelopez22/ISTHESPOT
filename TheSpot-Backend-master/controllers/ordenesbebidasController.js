var ordenbebida = require('../schemas/ordenbebida.js');
var mongoose = require('mongoose');

exports.getOrdenesBebidas = {

  handler: function (request, reply) {
    var ordenesbebidas = ordenbebida.find({});
    return (ordenesbebidas);
  }
}
exports.getOrdenBebidaId = {
  handler: async function (request, reply) {
    try {
      var orden = await ordenbebida.findById(request.params._id).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }

    // return reply.response(envio);
  }
  /*handler : function(request, reply){
    this.envio ="w"
    ordenbebida.findOne({'_id' : request.params._id}, function(err, OrdenBebida){
      if(!err && OrdenBebida){
        this.envio =(OrdenBebida);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'OrdenBebida not found'));
      }
    });return envio;
  }*/
}

exports.getOrdenBebidaOrden = {
  handler: async function (request, reply) {
    try {
      var orden = await ordenbebida.find({ 'idOrden': request.params.idOrden }).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler : function(request, reply){
    this.envio ="w"
    ordenbebida.find({'idOrden' : request.params.idOrden}, function(err, OrdenesBebidas){
      if(!err && OrdenesBebidas){
        this.envio =(OrdenesBebidas);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'OrdenesBebidas not found'));
      }
    });return envio;
  }*/
}

exports.getOrdenBebidaBebida = {
  handler: async function (request, reply) {
    try {
      var orden = await ordenbebida.find({ 'idBebida': request.params.idBebida }).exec();
      return reply.response(orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler: function (request, reply) {
    this.envio = "w"
    ordenbebida.find({ 'idBebida': request.params.idBebida }, function (err, OrdenesBebidas) {
      if (!err && OrdenesBebidas) {
        this.envio = (OrdenesBebidas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'OrdenesBebidas not found'));
      }
    }); return envio;
  }*/
}

exports.modifyOrdenBebida = {

  handler: async function (request, reply) {
    try {
      var result = await ordenbebida.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
    /*this.envio = "w"
    ordenbebida.update(
      { '_id': request.params._id },
      {
        $set:
        {
          idOrden: request.payload.idOrden,
          idBebida: request.payload.idBebida,
          cantidad_bebida: request.payload.cantidad_bebida
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'OrdenBebida not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    ); return envio;*/
  }
}
exports.deleteOrdenBebida = {

  handler: async function (request, reply) {
    try {
      var result = await ordenbebida.deleteMany({ 'idOrden': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
    /*this.envio = "w"
    ordenbebida.deleteMany({ 'idOrden': request.params._id }, function (err, OrdenBebida) {
      if (err) {
        this.envio = (boom.badRequest("Could not delete OrdenBebida"));
      } else if (!err && OrdenBebida) {
        //OrdenBebida.remove();
        this.envio = ('OrdenBebida deleted succesfully');
      } else if (!err) {
        this.envio = (boom.notFound());
      }
    }); return envio;*/
  }
}
exports.createOrdenBebida = {

  handler: async function (request, reply) {
    try {
        var newOrdenBebida = new ordenbebida({
            idOrden: request.payload.idOrden,
            idBebida: request.payload.idBebida,
            cantidad_bebida: request.payload.cantidad_bebida
        });
        var result = await newOrdenBebida.save(); 
        return reply.response({success: true, orden: result});
    } catch (error) {
         throw boom.badRequest();
    }
}
}
