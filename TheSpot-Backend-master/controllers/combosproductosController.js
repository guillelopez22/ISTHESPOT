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
        comboproducto.findOne({ '_id': request.params._id }, function (err, ComboProducto) {
            if (!err && ComboProducto) {
                return (ComboProducto);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'Combo Producto id not found'));
            }
        });
        
    }
}
exports.getComboProductoProducto = {
    handler: function (request, reply) {
        comboproducto.find({ 'idProducto': request.params.idProducto }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                return (CombosProductos);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'Productos not found'));
            }
        });
    }
}
exports.getComboProductoCombo = {

    handler: function (request, reply) {
        comboproducto.find({ 'idCombo': request.params.idCombo }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                return (CombosProductos);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'Combos not found'));
            }
        });
    }
}

exports.modifyComboProducto = {

    handler: function (request, reply) {
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
                    return (boom.wrap(err, 'Combo Producto not found'));
                } else {
                    return ('updated succesfully');
                }
            }
        );
    }
}
exports.deleteComboProducto = {

    handler: function (request, reply) {
        comboproducto.deleteMany({ 'idCombo': request.params._id }, function (err, ComboProducto) {
            if (err) {
                return (boom.badRequest("Could not delete combo producto"));
            } else if (!err && ComboProducto) {
                //ComboProducto.remove();
                return ('combo producto deleted succesfully');
            } else if (!err) {
                return (boom.notFound());
            }
        });
    }
}
exports.createComboProducto = {

    handler: function (request, reply) {
        var newComboProducto = new comboproducto({
            idCombo: request.payload.idCombo,
            idProducto: request.payload.idProducto,
            cantidad_producto: request.payload.cantidad_producto
        });
        newComboProducto.save(function (err) {
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
