var ordenbebida = require('../schemas/ordenbebida.js');
var mongoose = require('mongoose');
const boom = require('boom');

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
  }
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
}

exports.modifyOrdenBebida = {

  handler: async function (request, reply) {
    try {
      var result = await ordenbebida.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
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
      return reply.response({ success: true, orden: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
