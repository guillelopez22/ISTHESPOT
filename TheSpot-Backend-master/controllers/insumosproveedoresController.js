var insumoproveedor = require('../schemas/insumoproveedor.js');
var mongoose = require('mongoose');

exports.getInsumosProveedores = {

    handler: function (request, reply) {
        var insumosproveedores = insumoproveedor.find({});
        return (insumosproveedores);
    }
}
exports.getInsumoProveedorId = {

    handler: function (request, reply) {
        this.envio = "w"
        insumoproveedor.findOne({ '_id': request.params._id }, function (err, InsumoProveedor) {
            if (!err && InsumoProveedor) {
                this.envio = (InsumoProveedor);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'InsumoProveedor not found'));
            }
        });
        return envio;
    }
}

exports.getInsumoProveedorInsumo = {

    handler: function (request, reply) {
        this.envio = "w"
        insumoproveedor.find({ 'idInsumo': request.params.idInsumo }, function (err, InsumosProveedores) {
            if (!err && InsumosProveedores) {
                this.envio = (InsumosProveedores);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'InsumosProveedores not found'));
            }
        }); return envio;
    }
}

exports.getInsumoProveedorProveedor = {

    handler: function (request, reply) {
        this.envio = "h"
        insumoproveedor.find({ 'idProveedor': request.params.idProveedor }, function (err, InsumosProveedores) {
            if (!err && InsumosProveedores) {
                this.envio = (InsumosProveedores);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'InsumosProveedores not found'));
            }
        }); return envio
    }
}

exports.modifyInsumoProveedor = {

    handler: function (request, reply) {
        this.envio = "w"
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
                    this.envio = (boom.wrap(err, 'InsumoProveedor not found'));
                } else {
                    this.envio = ('updated succesfully');
                }
            }
        ); return envio;
    }
}
exports.deleteInsumoProveedor = {

    handler: function (request, reply) {
        this.envio = "w"
        insumoproveedor.deleteMany({ 'idInsumo': request.params._id }, function (err, InsumoProveedor) {
            if (err) {
                this.envio = (boom.badRequest("Could not delete InsumoProveedor"));
            } else if (!err && InsumoProveedor) {
                //InsumoProveedor.remove();
                this.envio = ('InsumoProveedor deleted succesfully');
            } else if (!err) {
                this.envio = (boom.notFound());
            }
        }); return envio;
    }
}
exports.createInsumoProveedor = {

    handler: function (request, reply) {
        this.envio = "w"
        var newInsumoProveedor = new insumoproveedor({
            idInsumo: request.payload.idInsumo,
            idProveedor: request.payload.idProveedor,
        });
        newInsumoProveedor.save(function (err) {
            if (!err) {
                this.envio = {
                    success: true
                };
            } else {
                this.envio = {
                    success: false
                }
            }
        }); return envio;
    }
}
