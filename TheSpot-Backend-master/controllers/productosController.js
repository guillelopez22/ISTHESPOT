var producto = require('../schemas/producto.js');
const boom = require('boom');
var mongoose = require('mongoose');

exports.getProductos = {
  handler: function (request, reply) {
    var productos = producto.find({});
    return (productos);
  }
}
exports.getProductoId = {
  handler: async function (request, reply) {
    try {
      var Producto = await producto.findById(request.params._id).exec();
      return reply.response(Producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProductoTipo = {
  handler: async function (request, reply) {
    try {
      var Producto = await producto.find({ 'tipo': request.params.tipo }).exec();
      return reply.response(Producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProductoNombre = {
  handler: async function (request, reply) {
    try {
      var Producto = await producto.find({ 'nombre': request.params.nombre }).exec();
      return reply.response(Producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}
exports.getProductoPrecio = {
  handler: async function (request, reply) {
    try {
      var Producto = await producto.find({ 'precio': request.params.precio }).exec();
      return reply.response(Producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProductoCantidad = {
  handler: async function (request, reply) {
    try {
      var Producto = await producto.find({ 'cantidad': request.params.cantidad }).exec();
      return reply.response(Producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}


exports.modifyProducto = {
  handler: async function (request, reply) {
    try {
      var result = await producto.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteProducto = {
  handler: async function (request, reply) {
    try {
      var result = await producto.findByIdAndDelete(request.params._id);
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createProducto = {

  handler: async function (request, reply) {
    try {
      var newProducto = new producto({
        nombre: request.payload.nombre,
        tipo: request.payload.tipo,
        descripcion: request.payload.descripcion,
        cantidad: request.payload.cantidad,
        precio: request.payload.precio,
        imagen: request.payload.imagen
      });
      var result = await newProducto.save();
      return reply.response({ success: true, producto: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
