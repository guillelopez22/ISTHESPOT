var insumoproveedor = require('../schemas/insumoproveedor.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getInsumosProveedores = {

    handler: function (request, reply) {
        var insumosproveedores = insumoproveedor.find({});
        return (insumosproveedores);
    }
}
exports.getInsumoProveedorId = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.findById(request.params._id).exec();
            return reply.response(Insumo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}

exports.getInsumoProveedorInsumo = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.find({ 'idInsumo': request.params.idInsumo }).exec();
            return reply.response(Insumo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}

exports.getInsumoProveedorProveedor = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.find({ 'idProveedor': request.params.idProveedor }).exec();
            return reply.response(Insumo);
        } catch (error) {
            throw boom.notFound();
        }
    }
}

exports.modifyInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var result = await insumo.insumoproveedor(request.params._id, request.payload, { new: true });
            return reply.response(result);
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.deleteInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var result = await insumoproveedor.deleteMany({ 'idInsumo': request.params._id });
            return reply.response({ success: true });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
exports.createInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var newInsumoProveedor = new insumoproveedor({
                idInsumo: request.payload.idInsumo,
                idProveedor: request.payload.idProveedor,
            });
            var result = await newInsumoProveedor.save();
            return reply.response({ success: true, insumoProveedor: result });
        } catch (error) {
            throw boom.badRequest();
        }
    }
}
