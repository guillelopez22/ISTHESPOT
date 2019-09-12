var cuentaorden = require('../schemas/cuentaorden.js');
var mongoose = require('mongoose');

exports.getCuentaOrden = {

  handler: function (request, reply) {
    var cuentasordenes = cuentaorden.find({});
    return (cuentasordenes);
  }
}
exports.getCuentaOrdenId = {

  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.findById(request.params._id).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaOrdenCuenta = {
  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.find({ 'idCuenta': request.params.idCuenta }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaOrdenOrden = {

  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.find({ 'idCuenta': request.params.idCuenta }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getCuentaOrdenDescripcion = {
  handler: async function (request, reply) {
    try {
      var cuenta = await combobebida.find({ 'descripcion': request.params.descripcion }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var result = await cuentaorden.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var result = await cuentaorden.deleteMany({ 'idCuenta': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var newCuentaOrden = new combobebida({
        idCuenta: request.payload.idCuenta,
        idOrden: request.payload.idOrden,
        descripcion: request.payload.descripcion
      });
      var result = await newCuentaOrden.save();
      return reply.response({ success: true, cuenta: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
