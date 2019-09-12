var usuario = require('../schemas/usuario.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getUsuarios = {

  handler: function (request, reply) {
    var usuarios = usuario.find({});
    return (usuarios);
  }
}
exports.getUsuarioId = {

  handler: async function (request, reply) {
    try {
      var Usuario = await usuario.findById(request.params._id).exec();
      return reply.response(Usuario);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getUsuarioIdPersonal = {

  handler: async function (request, reply) {
    try {
      var Usuario = await usuario.find({ 'idPersonal': request.params.idPersonal }).exec();
      return reply.response(Usuario);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getUsuarioIdOrdenes = {

  handler: async function (request, reply) {
    try {
      var Usuario = await usuario.find({ 'idOrdenes': request.params.idOrdenes }).exec();
      return reply.response(Usuario);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getUsuarioName = {

  handler: async function (request, reply) {
    try {
      var Usuario = await usuario.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Usuario);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.modifyUsuario = {

  handler: async function (request, reply) {
    try {
      var result = await usuario.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteUsuario = {

  handler: async function (request, reply) {
    try {
      var result = await usuario.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createUsuario = {

  handler: async function (request, reply) {
    try {
      var newUsuario = new usuario({
        IdPersonal: request.payload.IdPersonal,
        idOrdenes: request.payload.idOrdenes,
        usuario: request.payload.usuario,
        contrasena: request.payload.contrasena,
        nombre: request.payload.nombre,
        telefono: request.payload.telefono,
        scope: request.payload.scope
      });
      var result = await newUsuario.save();
      return reply.response({ success: true, usuario: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }

}
