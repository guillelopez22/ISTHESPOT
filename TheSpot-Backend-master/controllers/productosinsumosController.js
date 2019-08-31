var productoinsumo = require('../schemas/productoinsumo.js');
var mongoose = require('mongoose');

exports.getProductosInsumos = {

    handler: function (request, reply) {
        var productosinsumos = productoinsumo.find({});
        return(productosinsumos);
    }
}
exports.getProductoInsumoId = {

    handler: function (request, reply) {
        productoinsumo.findOne({ '_id': request.params._id }, function (err, ProductoInsumo) {
            if (!err && ProductoInsumo) {
                return (ProductoInsumo);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'ProductoInsumo not found'));
            }
        });
    }
}
exports.getPoductoInsumoInsumo = {
    handler: function (request, reply) {
        productoinsumo.find({ 'idInsumo': request.params.idInsumo }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                return (ProductosInsumos);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'ProductosInsumos not found'));
            }
        });
    }
}
exports.getPoductoInsumoProducto = {

    handler: function (request, reply) {
        productoinsumo.find({ 'idProducto': request.params.idProducto }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                return (ProductosInsumos);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'ProductosInsumos not found'));
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
                    cantidad_insumo: request.payload.cantidad_insumo
                }
            }, function (err) {
                if (err) {
                    return (boom.wrap(err, 'ProductoInsumo not found'));
                } else {
                    return ('updated succesfully');
                }
            }
        );
    }
}
exports.deleteProductoInsumo = {

    handler: function (request, reply) {
        productoinsumo.deleteMany({ 'idProducto': request.params._id }, function (err, ProductoInsumo) {
            if (err) {
                return (boom.badRequest("Could not delete productoinsumo"));
            } else if (!err && ProductoInsumo) {
                //ProductoInsumo.remove();
                return ('productoinsumo deleted succesfully');
            } else if (!err) {
                return (boom.notFound());
            }
        });
    }
}
exports.createProductoInsumo = {

    handler: function (request, reply) {
        var newProductoInsumo = new productoinsumo({
            idProducto: request.payload.idProducto,
            idInsumo: request.payload.idInsumo,
            cantidad_insumo: request.payload.cantidad_insumo
        });
        newProductoInsumo.save(function (err) {
            if (!err) {
                return ({
                    success: true
                });
            } else {
                return ({
                    success: false
                })
            }
        });
    }
}
