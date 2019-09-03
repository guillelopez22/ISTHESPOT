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
        this.envio = "w"
        productoinsumo.findOne({ '_id': request.params._id }, function (err, ProductoInsumo) {
            if (!err && ProductoInsumo) {
                this.envio =(ProductoInsumo);
            } else if (!err) {
                this.envio =(boom.notFound());
            } else if (err) {
                this.envio =(boom.wrap(err, 'ProductoInsumo not found'));
            }
        });return envio;
    }
}
exports.getPoductoInsumoInsumo = {
    handler: function (request, reply) {
        this.envio = "w"
        productoinsumo.find({ 'idInsumo': request.params.idInsumo }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                this.envio =(ProductosInsumos);
            } else if (!err) {
                this.envio =(boom.notFound());
            } else if (err) {
                this.envio =(boom.wrap(err, 'ProductosInsumos not found'));
            }
        });
        return envio;
    }
}
exports.getPoductoInsumoProducto = {

    handler: function (request, reply) {
        this.envio = "w"
        productoinsumo.find({ 'idProducto': request.params.idProducto }, function (err, ProductosInsumos) {
            if (!err && ProductosInsumos) {
                this.envio =(ProductosInsumos);
            } else if (!err) {
                this.envio =(boom.notFound());
            } else if (err) {
                this.envio =(boom.wrap(err, 'ProductosInsumos not found'));
            }
        });return envio;
    }
}

exports.modifyProductoInsumo = {

    handler: function (request, reply) {
        this.envio = "w"
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
                    this.envio =(boom.wrap(err, 'ProductoInsumo not found'));
                } else {
                    this.envio =('updated succesfully');
                }
            }
        );
        return envio;
    }
}
exports.deleteProductoInsumo = {

    handler: function (request, reply) {
        this.envio ="w"
        productoinsumo.deleteMany({ 'idProducto': request.params._id }, function (err, ProductoInsumo) {
            if (err) {
                this.envio =(boom.badRequest("Could not delete productoinsumo"));
            } else if (!err && ProductoInsumo) {
                this.envio =('productoinsumo deleted succesfully');
            } else if (!err) {
                this.envio =(boom.notFound());
            }
        });
        return envio;
    }
}
exports.createProductoInsumo = {

    handler: function (request, reply) {
        this.envio = "w"
        var newProductoInsumo = new productoinsumo({
            idProducto: request.payload.idProducto,
            idInsumo: request.payload.idInsumo,
            cantidad_insumo: request.payload.cantidad_insumo
        });
        newProductoInsumo.save(function (err) {
            if (!err) {
                this.envio ={
                    success: true
                }
            } else {
                this.envio ={
                    success: false
                }
            }
        });return envio;
    }
}
