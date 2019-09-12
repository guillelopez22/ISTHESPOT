var orden = require('../schemas/orden.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getOrdenes = {

  handler: function (request, reply) {
    var ordenes = orden.find({});
    return (ordenes);
  }
}
exports.getOrdenesId = {

  handler: async function (request, reply) {
    try {
      var Orden = await orden.findById(request.params._id).exec();
      return reply.response(Orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getOrdenesName = {
  handler: async function (request, reply) {
    try {
      var Orden = await orden.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getOrdenesMesa = {
  handler: async function (request, reply) {
    try {
      var Orden = await orden.find({ 'idMesa': request.params.idMesa }).exec();
      return reply.response(Orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getOrdenesEmpleado = {
  handler: async function (request, reply) {
    try {
      var Orden = await orden.find({ 'idEmpleado': request.params.idEmpleado }).exec();
      return reply.response(Orden);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyOrden = {
  handler: async function (request, reply) {
    try {
      var result = await orden.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteOrden = {
  handler: async function (request, reply) {
    try {
      var result = await orden.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createOrden = {
  handler: async function (request, reply) {
    try {
      var newOrden = new orden({
        idMesa: request.payload.idMesa,
        idEmpleado: request.payload.idEmpleado,
        idBebidas: request.payload.idBebidas,
        idProductos: request.payload.idProductos,
        idCombos: request.payload.idCombos
      });
      var result = await newOrden.save();
      return reply.response({ success: true, orden: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
