var insumoproveedor = require('../schemas/insumoproveedor.js');
var mongoose = require('mongoose');

exports.getInsumosProveedores = {

    handler: function (request, reply) {
        var insumosproveedores = insumoproveedor.find({});
        reply(insumosproveedores);
    }
}
exports.getInsumoProveedorId = {

    handler: function (request, reply) {
        insumoproveedor.findOne({ '_id': request.params._id }, function (err, InsumoProveedor) {
            if (!err && InsumoProveedor) {
                return reply(InsumoProveedor);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'InsumoProveedor not found'));
            }
        });
    }
}

exports.getInsumoProveedorInsumo = {

    handler: function (request, reply) {
        insumoproveedor.find({ 'idInsumo': request.params.idInsumo }, function (err, InsumosProveedores) {
            if (!err && InsumosProveedores) {
                return reply(InsumosProveedores);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'InsumosProveedores not found'));
            }
        });
    }
}

exports.getInsumoProveedorProveedor = {

    handler: function (request, reply) {
        insumoproveedor.find({ 'idProveedor': request.params.idProveedor }, function (err, InsumosProveedores) {
            if (!err && InsumosProveedores) {
                return reply(InsumosProveedores);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'InsumosProveedores not found'));
            }
        });
    }
}

exports.modifyInsumoProveedor = {

    handler: function (request, reply) {
        insumoproveedor.update(
            { '_id': request.params._id },
            {
                $set:
                {
                    idInsumo: request.payload.idInsumo,
                    idProveedor: request.payload.idProveedor,
                }
            }, function (err) {
                if (err) {
                    return reply(boom.wrap(err, 'InsumoProveedor not found'));
                } else {
                    return reply('updated succesfully');
                }
            }
        );
    }
}
exports.deleteInsumoProveedor = {

    handler: function (request, reply) {
        insumoproveedor.deleteMany({ 'idInsumo': request.params._id }, function (err, InsumoProveedor) {
            if (err) {
                return reply(boom.badRequest("Could not delete InsumoProveedor"));
            } else if (!err && InsumoProveedor) {
                //InsumoProveedor.remove();
                return reply('InsumoProveedor deleted succesfully');
            } else if (!err) {
                return reply(boom.notFound());
            }
        });
    }
}
exports.createInsumoProveedor = {

    handler: function (request, reply) {
        var newInsumoProveedor = new insumoproveedor({
            idInsumo: request.payload.idInsumo,
            idProveedor: request.payload.idProveedor,
        });
        newInsumoProveedor.save(function (err) {
            if (!err) {
                return reply({
                    success: true
                });
            } else {
                return reply({
                    success: false
                })
            }
        });
    }
}
