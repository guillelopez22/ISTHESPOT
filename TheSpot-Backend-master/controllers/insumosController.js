var insumo = require('../schemas/insumo.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getInsumos = {

  handler: function (request, reply) {
    var insumos = insumo.find({});
    return (insumos);
  }
}
exports.getInsumoId = {

  handler: async function (request, reply) {
    try {
      var Insumo = await insumo.findById(request.params._id).exec();
      return reply.response(Insumo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getInsumoName = {
  handler: async function (request, reply) {
    try {
      var Insumo = await insumo.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Insumo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getInsumoProveedor = {

  handler: async function (request, reply) {
    try {
      var Insumo = await insumo.find({ 'idProveedor': request.params.idProveedor }).exec();
      return reply.response(Insumo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getInsumoInventario = {

  handler: async function (request, reply) {
    try {
      var Insumo = await insumo.find({ 'inventario': request.params.inventario }).exec();
      return reply.response(Insumo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyInsumo = {

  handler: async function (request, reply) {
    try {
      var result = await insumo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteInsumo = {
  handler: async function (request, reply) {
    try {
      var result = await insumo.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createInsumo = {

  handler: async function (request, reply) {
    try {
      var newInsumo = new insumo({
        nombre: request.payload.nombre,
        inventario: request.payload.inventario,
        idProveedor: request.payload.idProveedor
      });
      var result = await newInsumo.save();
      return reply.response({ success: true, insumo: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
