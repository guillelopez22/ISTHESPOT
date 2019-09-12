var productoinsumo = require('../schemas/productoinsumo.js');
var mongoose = require('mongoose');
const boom = require('boom');


exports.getProductosInsumos = {

    handler: function (request, reply) {
        var productosinsumos = productoinsumo.find({});
        return (productosinsumos);
    }
}
exports.getProductoInsumoId = {

    handler: async function (request, reply) {
        try {
            var producto = await productoinsumo.findById(request.params._id).exec();
            return reply.response(producto);
        } catch (error) {
            throw boom.notFound();
        }
    }
}
exports.getPoductoInsumoInsumo = {
    handler: async function (request, reply) {
        try {
            var producto = await productoinsumo.find({ 'idInsumo': request.params.idInsumo }).exec();
            return reply.response(producto);
        } catch (error) {
            throw boom.notFound();
        }
    }
}
exports.getPoductoInsumoProducto = {
    handler: async function (request, reply) {
        try {
            var producto = await productoinsumo.find({ 'idProducto': request.params.idProducto }).exec();
            return reply.response(producto);
        } catch (error) {
            throw boom.notFound();
        }
    }
}

exports.modifyProductoInsumo = {
    handler: async function (request, reply) {
        try {
            var result = await productoinsumo.findByIdAndUpdate(request.params._id, request.payload, { new: true });
            return reply.response(result);
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.deleteProductoInsumo = {
    handler: async function (request, reply) {
        try {
            var result = await productoinsumo.deleteMany({ 'idProducto': request.params._id });
            return reply.response({ success: true });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.createProductoInsumo = {

    handler: async function (request, reply) {
        try {
            var newProductoInsumo = new productoinsumo({
                idProducto: request.payload.idProducto,
                idInsumo: request.payload.idInsumo,
                cantidad_insumo: request.payload.cantidad_insumo
            }); 
            var result = await newProductoInsumo.save();
            return reply.response({ success: true, producto: result });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
