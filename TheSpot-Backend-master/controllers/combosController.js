var combo = require('../schemas/combo.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getCombos = {
  handler: function (request, reply) {
    var combos = combo.find({});
    return (combos);
  }
}
exports.getComboId = {
  handler: async function (request, reply) {
    try {
      var Combo = await combo.findById(request.params._id).exec();
      return reply.response(Combo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getComboName = {

  handler: async function (request, reply) {
    try {
      var Combo = await combo.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Combo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getComboPrecio = {

  handler: async function (request, reply) {
    try {
      var Combo = await combo.find({ 'precio': request.params.precio }).exec();
      return reply.response(Combo);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyCombo = {
  handler: async function (request, reply) {
    try {
      var result = await combo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteCombo = {
  handler: async function (request, reply) {
    try {
      var result = await combo.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createCombo = {

  handler: async function (request, reply) {
    try {
      var newCombo = new combo({
        nombre: request.payload.nombre,
        descripcion: request.payload.descripcion,
        precio: request.payload.precio,
        imagen: request.payload.imagen
      });
      var result = await newCombo.save();
      return reply.response({ success: true, combo: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
