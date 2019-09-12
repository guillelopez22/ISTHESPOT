var promocion = require('../schemas/promocion.js');
var mongoose = require('mongoose');
const boom = require('boom');


exports.getPromociones = {
  handler: function (request, reply) {
    var promociones = promocion.find({});
    return (promociones);
  }
}
exports.getPromocionId = {

  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.findById(request.params._id).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getPromocionProductos = {

  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.find({ 'idProducto': request.params.idProducto }).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getPromocionDescuento = {

  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.find({ 'descuento': request.params.descuento }).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getPromocionName = {

  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getPromocionHora_Inicio = {

  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.find({ 'hora_inicio': request.params.hora_inicio }).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getPromocionHora_Final = {
  handler: async function (request, reply) {
    try {
      var Promocion = await promocion.find({ 'hora_final': request.params.hora_final }).exec();
      return reply.response(Promocion);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyPromocion = {
  handler: async function (request, reply) {
    try {
      var result = await promocion.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deletePromocion = {

  handler: async function (request, reply) {
    try {
      var result = await promocion.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createPromocion = {

  handler: async function (request, reply) {
    try {
      var newPromocion = new promocion({
        idProducto: request.payload.idProducto,
        nombre: request.payload.nombre,
        descripcion: request.payload.descripcion,
        cantidad: request.payload.cantidad,
        descuento: request.payload.descuento,
        hora_inicio: request.payload.hora_inicio,
        hora_final: request.payload.hora_final
      });
      var result = await newPromocion.save();
      return reply.response({ success: true, promocion: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }

}
