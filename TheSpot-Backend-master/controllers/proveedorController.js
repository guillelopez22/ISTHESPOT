var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getProveedores = {

  handler: function (request, reply) {
    var proveedores = proveedor.find({});
    return proveedores;
  }
}
exports.getProveedorId = {

  handler: async function (request, reply) {
    try {
      var Proveedor = await proveedor.findById(request.params._id).exec();
      return reply.response(Proveedor);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProveedorName = {
  handler: async function (request, reply) {
    try {
      var Proveedor = await proveedor.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Proveedor);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getProveedorContacto = {

  handler: async function (request, reply) {
    try {
      var Proveedor = await proveedor.find({ 'contacto': request.params.contacto }).exec();
      return reply.response(Proveedor);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyProveedor = {
  handler: async function (request, reply) {
    try {
      var result = await proveedor.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteProveedor = {

  handler: async function (request, reply) {
    try {
      var result = await proveedor.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createProveedor = {

  handler: async function (request, reply) {
    try {
      var newProveedor = new proveedor({
        idInsumo: request.payload.idInsumo,
        idBebidas: request.payload.idBebidas,
        nombre: request.payload.nombre,
        pais: request.payload.pais,
        telefono: request.payload.telefono,
        contacto: request.payload.contacto,
        email: request.payload.email,
        direccion: request.payload.direccion
      });
      var result = await newProveedor.save();
      return reply.response({ success: true, proveedor: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
