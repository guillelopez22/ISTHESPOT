var productoinsumo = require('../schemas/productoinsumo.js');
var mongoose = require('mongoose');

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

        // return reply.response(envio);
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
    /*handler: function (request, reply) {
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
    }*/
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
    /*handler: function (request, reply) {
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
    }*/
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
    /*handler: function (request, reply) {
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
    }*/
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
    /*handler: function (request, reply) {
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
    }*/
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
