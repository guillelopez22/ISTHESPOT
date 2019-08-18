var productoinsumo = require('../schemas/productoinsumo.js');
var mongoose = require('mongoose');

exports.getProductosInsumos = {

    handler: function (request, reply) {
        var productosinsumos = productoinsumo.find({});
        reply(productosinsumos);
    }
}
exports.getProductoInsumoId = {

    handler: function (request, reply) {
        productoinsumo.findOne({ '_id': request.params._id }, function (err, ProductoInsumo) {
            if (!err && ProductoInsumo) {
                return reply(ProductoInsumo);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'ProductoInsumo not found'));
            }
        });
    }
}
exports.getPoductoInsumoInsumo = {
    handler: function (request, reply) {
        productoinsumo.find({ 'idInsumo': request.params.idInsumo }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                return reply(ProductosInsumos);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'ProductosInsumos not found'));
            }
        });
    }
}
exports.getPoductoInsumoProducto = {

    handler: function (request, reply) {
        productoinsumo.find({ 'idProducto': request.params.idProducto }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                return reply(ProductosInsumos);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'ProductosInsumos not found'));
            }
        });
    }
}

exports.modifyProductoInsumo = {

    handler: function (request, reply) {
        productoinsumo.update(
            { '_id': request.params._id },
            {
                $set:
                {
                    idProducto: request.payload.idProducto,
                    idInsumo: request.payload.idInsumo,
                }
            }, function (err) {
                if (err) {
                    return reply(boom.wrap(err, 'ProductoInsumo not found'));
                } else {
                    return reply('updated succesfully');
                }
            }
        );
    }
}
exports.deleteProductoInsumo = {

    handler: function (request, reply) {
        productoinsumo.findOne({ '_id': request.params._id }, function (err, ProductoInsumo) {
            if (err) {
                return reply(boom.badRequest("Could not delete productoinsumo"));
            } else if (!err && ProductoInsumo) {
                ProductoInsumo.remove();
                return reply('productoinsumo deleted succesfully');
            } else if (!err) {
                return reply(boom.notFound());
            }
        });
    }
}
exports.createProductoInsumo = {

    handler: function (request, reply) {
        var newProductoInsumo = new productoinsumo({
            idProducto: request.payload.idProducto,
            idInsumo: request.payload.idInsumo,
        });
        newProductoInsumo.save(function (err) {
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
