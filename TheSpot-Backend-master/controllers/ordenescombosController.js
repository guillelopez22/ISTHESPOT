var ordencombo = require('../schemas/ordencombo.js');
var mongoose = require('mongoose');
const boom = require('boom');

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
