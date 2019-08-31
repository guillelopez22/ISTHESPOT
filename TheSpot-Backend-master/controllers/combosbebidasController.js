var combobebida = require('../schemas/combobebida.js');
var mongoose = require('mongoose');

exports.getCombosBebidas = {

    handler: function (request, reply) {
        var combosbebidas = combobebida.find({});
        return(combosbebidas);
    }
}
exports.getComboBebidaId = {

    handler: function (request, reply) {
        combobebida.findOne({ '_id': request.params._id }, function (err, ComboBebida) {
            if (!err && ComboBebida) {
                return (ComboBebida);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'ComboBebida not found'));
            }
        });
        
    }
}

exports.getComboBebidaCombo = {

    handler: function (request, reply) {
        combobebida.find({ 'idCombo': request.params.idCombo }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                return (CombosBebidas);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'CombosBebidas not found'));
            }
        });
    }
}

exports.getComboBebidaBebida = {

    handler: function (request, reply) {
        combobebida.find({ 'idBebida': request.params.idBebida }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                return (CombosBebidas);
            } else if (!err) {
                return (boom.notFound());
            } else if (err) {
                return (boom.wrap(err, 'CombosBebidas not found'));
            }
        });
    }
}

exports.modifyComboBebida = {

    handler: function (request, reply) {
        combobebida.update(
            { '_id': request.params._id },
            {
                $set:
                {
                    idCombo: request.payload.idCombo,
                    idBebida: request.payload.idBebida,
                    cantidad_bebida: request.payload.cantidad_bebida
                }
            }, function (err) {
                if (err) {
                    return (boom.wrap(err, 'ComboBebida not found'));
                } else {
                    return ('updated succesfully');
                }
            }
        );
    }
}
exports.deleteComboBebida = {

    handler: function (request, reply) {
        combobebida.deleteMany({ 'idCombo': request.params._id }, function (err, ComboBebida) {
            if (err) {
                return (boom.badRequest("Could not delete ComboBebida"));
            } else if (!err && ComboBebida) {
                //ComboBebida.remove();
                return ('ComboBebida deleted succesfully');
            } else if (!err) {
                return (boom.notFound());
            }
        });
    }
}
exports.createComboBebida = {

    handler: function (request, reply) {
        var newComboBebida = new combobebida({
            idCombo: request.payload.idCombo,
            idBebida: request.payload.idBebida,
            cantidad_bebida: request.payload.cantidad_bebida
        });
        newComboBebida.save(function (err) {
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
