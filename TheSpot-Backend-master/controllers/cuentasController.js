var cuenta = require('../schemas/cuenta.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getCuentas = {

  handler: function (request, reply) {
    var cuentas = cuenta.find({});
    return (cuentas);
  }
}
exports.getCuentaId = {

  handler: async function (request, reply) {
    try {
      var Cuenta = await cuenta.findById(request.params._id).exec();
      return reply.response(Cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaUsuario = {
  handler: async function (request, reply) {
    try {
      var Cuenta = await cuenta.find({ 'idUsuario': request.params.idUsuario }).exec();
      return reply.response(Cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaTotal = {

  handler: async function (request, reply) {
    try {
      var Cuenta = await cuenta.find({ 'total': request.params.total }).exec();
      return reply.response(Cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaEstado = {
  handler: async function (request, reply) {
    try {
      var Cuenta = await cuenta.find({ 'estado': request.params.estado }).exec();
      return reply.response(Cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyCuenta = {

  handler: async function (request, reply) {
    try {
      var result = await cuenta.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteCuenta = {

  handler: async function (request, reply) {
    try {
      var result = await cuenta.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createCuenta = {

  handler: async function (request, reply) {
    try {
      var newCuenta = new cuenta({
        idUsuario: request.payload.idUsuario,
        total: request.payload.total,
        estado: request.payload.estado,
        idMesa: request.payload.idMesa
      });
      var result = await newCuenta.save();
      return reply.response({ success: true, cuenta: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
