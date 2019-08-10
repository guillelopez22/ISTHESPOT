var comboproducto = require('../schemas/comboproducto.js');
var mongoose = require('mongoose');

exports.getCombosProductos = {

    handler: function (request, reply) {
        var combosproductos = comboproducto.find({});
        reply(combosproductos);
    }
}
exports.getComboProductoId = {

    handler: function (request, reply) {
        comboproducto.findOne({ '_id': request.params._id }, function (err, ComboProducto) {
            if (!err && ComboProducto) {
                return reply(ComboProducto);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'Combo Producto id not found'));
            }
        });
    }
}
exports.getComboProductoProducto = {
    handler: function (request, reply) {
        comboproducto.find({ 'idProducto': request.params.idProducto }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                return reply(CombosProductos);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'Productos not found'));
            }
        });
    }
}
exports.getComboProductoCombo = {

    handler: function (request, reply) {
        comboproducto.find({ 'idCombo': request.params.idCombo }, function (err, CombosProductos) {
            if (!err && CombosProductos) {
                return reply(CombosProductos);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'Combos not found'));
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
                }
            }, function (err) {
                if (err) {
                    return reply(boom.wrap(err, 'Combo Producto not found'));
                } else {
                    return reply('updated succesfully');
                }
            }
        );
    }
}
exports.deleteComboProducto = {

    handler: function (request, reply) {
        comboproducto.findOne({ '_id': request.params._id }, function (err, ComboProducto) {
            if (err) {
                return reply(boom.badRequest("Could not delete combo producto"));
            } else if (!err && ComboProducto) {
                ComboProducto.remove();
                return reply('combo producto deleted succesfully');
            } else if (!err) {
                return reply(boom.notFound());
            }
        });
    }
}
exports.createComboProducto = {

    handler: function (request, reply) {
        var newComboProducto = new comboproducto({
            idCombo: request.payload.idCombo,
            idProducto: request.payload.idProducto,
        });
        newComboProducto.save(function (err) {
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
