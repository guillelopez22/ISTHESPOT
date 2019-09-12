var comboproducto = require('../schemas/comboproducto.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getCombosProductos = {

    handler: function (request, reply) {
        var combosproductos = comboproducto.find({});
        return (combosproductos);
    }
}
exports.getComboProductoId = {

    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.findById(request.params._id).exec();
            return reply.response(combo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}
exports.getComboProductoProducto = {
    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.find({ 'idProducto': request.params.idProducto }).exec();
            return reply.response(combo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}
exports.getComboProductoCombo = {

    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.find({ 'idCombo': request.params.idCombo }).exec();
            return reply.response(combo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}

exports.modifyComboProducto = {

    handler: async function (request, reply) {
        try {
            var result = await comboproducto.findByIdAndUpdate(request.params._id, request.payload, { new: true });
            return reply.response(result);
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.deleteComboProducto = {

    handler: async function (request, reply) {
        try {
            var result = await comboproducto.deleteMany({ 'idCombo': request.params._id });
            return reply.response({ success: true });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.createComboProducto = {

    handler: async function (request, reply) {
        try {
            var newComboProducto = new comboproducto({
                idCombo: request.payload.idCombo,
                idProducto: request.payload.idProducto,
                cantidad_producto: request.payload.cantidad_producto
            });
            var result = await newComboProducto.save();
            return reply.response({ success: true, comboproducto: result });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
