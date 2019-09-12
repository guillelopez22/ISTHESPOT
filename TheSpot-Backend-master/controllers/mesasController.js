var mesa = require('../schemas/mesa.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getMesas = {
  handler: function (request, reply) {
    var Mesas = mesa.find({});
    return (Mesas);
  }
}
exports.getMesaId = {

  handler: async function (request, reply) {
    try {
      var Mesa = await mesa.findById(request.params._id).exec();
      return reply.response(Mesa);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getMesaName = {
  handler: async function (request, reply) {
    try {
      var Mesa = await mesa.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Mesa);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getMesaNumero = {
  handler: async function (request, reply) {
    try {
      var Mesa = await mesa.find({ 'numero': request.params.numero }).exec();
      return reply.response(Mesa);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getMesaIdOrdenes = {
  handler: async function (request, reply) {
    try {
      var Mesa = await mesa.find({ 'idOrden': request.params.idOrden }).exec();
      return reply.response(Mesa);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyMesa = {
  handler: async function (request, reply) {
    try {
      var result = await mesa.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}

exports.deleteMesa = {
  handler: async function (request, reply) {
    try {
      var result = await mesa.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createMesa = {

  handler: async function (request, reply) {
    try {
      var newMesa = new mesa({
        idOrden: null,
        nombre: request.payload.nombre,
        numero: request.payload.numero
      });
      var result = await newMesa.save();
      return reply.response({ success: true, mesa: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
