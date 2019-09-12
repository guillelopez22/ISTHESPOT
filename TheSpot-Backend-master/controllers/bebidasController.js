var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');
const boom = require('boom');
const { promisify } = require('util');

exports.getBebidas = {

  handler: function (request, reply) {
    var bebidas = bebida.find({});
    return bebidas;
  }
}
exports.getBebidaId = {

  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.findById(request.params._id).exec();
      return reply.response(Bebida);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getBebidaName = {
  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Bebida);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getBebidaProveedor = {

  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({ 'idProveedor': request.params.idProveedor }).exec();
      return reply.response(Bebida);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getBebidaTipo = {
  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({ 'tipo': request.params.tipo }).exec();
      return reply.response(Bebida);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyBebida = {

  handler: async function (request, reply) {
    try {
      var result = await bebida.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteBebida = {

  handler: async function (request, reply) {
    try {
      var result = await bebida.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createBebida = {

  handler: async function (request, reply) {
    try {
      var newBebida = new bebida({
        nombre: request.payload.nombre,
        idProveedor: request.payload.idProveedor,
        tipo: request.payload.tipo,
        inventario: request.payload.inventario,
        descripcion: request.payload.descripcion,
        precio: request.payload.precio,
        imagen: request.payload.imagen
      });
      var result = await newBebida.save();
      return reply.response({ success: true, bebida: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}