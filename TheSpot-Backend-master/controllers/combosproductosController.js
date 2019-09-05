var comboproducto = require('../schemas/comboproducto.js');
var mongoose = require('mongoose');

exports.getCombosProductos = {

    handler: function (request, reply) {
        var combosproductos = comboproducto.find({});
        return(combosproductos);
    }
}
exports.getComboProductoId = {

    handler: function (request, reply) {
        this.envio = "w";
        comboproducto.findOne({ '_id': request.params._id }, function (err, ComboProducto) {
            if (!err && ComboProducto) {
                this.envio =(ComboProducto);
            } else if (!err) {
                this.envio =(boom.notFound());
            } else if (err) {
                this.envio =(boom.wrap(err, 'Combo Producto id not found'));
            }
        });return envio;
    }
}
exports.getComboProductoProducto = {
    handler: function (request, reply) {
        this.envio = "w";
        comboproducto.find({ 'idProducto': request.params.idProducto }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                this.envio = (CombosProductos);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'Productos not found'));
            }
        });return envio;
    }
}
exports.getComboProductoCombo = {

    handler: function (request, reply) {
        this.envio = "w";
        comboproducto.find({ 'idCombo': request.params.idCombo }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                this.envio = (CombosProductos);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'Combos not found'));
            }
        });return envio;
    }
}

exports.modifyComboProducto = {

    handler: function (request, reply) {
        this.envio = "w";
        comboproducto.update(
            { '_id': request.params._id },
            {
                $set:
                {
                    idCombo: request.payload.idCombo,
                    idProducto: request.payload.idProducto,
                    cantidad_producto: request.payload.cantidad_producto
                }
            }, function (err) {
                if (err) {
                    this.envio =(boom.wrap(err, 'Combo Producto not found'));
                } else {
                    this.envio =('updated succesfully');
                }
            }
        );return envio;
    }
}
exports.deleteComboProducto = {

    handler: function (request, reply) {
        this.envio = "w";
        comboproducto.deleteMany({ 'idCombo': request.params._id }, function (err, ComboProducto) {
            if (err) {
                this.envio =(boom.badRequest("Could not delete combo producto"));
            } else if (!err && ComboProducto) {
                //ComboProducto.remove();
                this.envio =('combo producto deleted succesfully');
            } else if (!err) {
                this.envio =(boom.notFound());
            }
        });return envio;
    }
}
exports.createComboProducto = {

    handler: function (request, reply) {
        this.envio = "w";
        var newComboProducto = new comboproducto({
            idCombo: request.payload.idCombo,
            idProducto: request.payload.idProducto,
            cantidad_producto: request.payload.cantidad_producto
        });
        newComboProducto.save(function (err) {
            if (!err) {
                this.envio = {
                    success: true
                };
            } else {
                this.envio = {
                    success: false
                };
            }
        });return envio;
    }
}
