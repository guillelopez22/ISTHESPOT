var productoorden = require('../schemas/productoorden.js');
const boom = require('boom');
var mongoose = require('mongoose');

exports.getProductosOrdenes = {

  handler: function (request, reply) {
    var productosordenes = productoorden.find({});
    return (productosordenes);
  }
}
exports.getProductoOrdenId = {

  handler: async function (request, reply) {
    try {
      var producto = await productoorden.findById(request.params._id).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProductoOrdenProducto = {
  handler: async function (request, reply) {
    try {
      var producto = await productoorden.find({ 'idProducto': request.params.idProducto }).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.getProductoOrdenOrden = {
  handler: async function (request, reply) {
    try {
      var producto = await productoorden.find({ 'idOrden': request.params.idOrden }).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
}

exports.modifyProductoOrden = {
  handler: async function (request, reply) {
    try {
      var result = await productoorden.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.deleteProductoOrden = {
  handler: async function (request, reply) {
    try {
      var result = await productoorden.deleteMany({ 'idOrden': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
exports.createProductoOrden = {

  handler: async function (request, reply) {
    try {
      var newProductoOrden = new productoorden({
        idProducto: request.payload.idProducto,
        idOrden: request.payload.idOrden,
        cantidad_producto: request.payload.cantidad_producto
      });
      var result = await newProductoOrden.save();
      return reply.response({ success: true, bebida: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
