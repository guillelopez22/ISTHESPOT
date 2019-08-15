var combobebida = require('../schemas/combobebida.js');
var mongoose = require('mongoose');

exports.getCombosBebidas = {

    handler: function (request, reply) {
        var combosbebidas = combobebida.find({});
        reply(combosbebidas);
    }
}
exports.getComboBebidaId = {

    handler: function (request, reply) {
        combobebida.findOne({ '_id': request.params._id }, function (err, ComboBebida) {
            if (!err && ComboBebida) {
                return reply(ComboBebida);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'ComboBebida not found'));
            }
        });
    }
}

exports.getComboBebidaCombo = {

    handler: function (request, reply) {
        combobebida.find({ 'idCombo': request.params.idCombo }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                return reply(CombosBebidas);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'CombosBebidas not found'));
            }
        });
    }
}

exports.getComboBebidaBebida = {

    handler: function (request, reply) {
        combobebida.find({ 'idBebida': request.params.idBebida }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                return reply(CombosBebidas);
            } else if (!err) {
                return reply(boom.notFound());
            } else if (err) {
                return reply(boom.wrap(err, 'CombosBebidas not found'));
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
                }
            }, function (err) {
                if (err) {
                    return reply(boom.wrap(err, 'ComboBebida not found'));
                } else {
                    return reply('updated succesfully');
                }
            }
        );
    }
}
exports.deleteComboBebida = {

    handler: function (request, reply) {
        combobebida.findOne({ '_id': request.params._id }, function (err, ComboBebida) {
            if (err) {
                return reply(boom.badRequest("Could not delete ComboBebida"));
            } else if (!err && ComboBebida) {
                ComboBebida.remove();
                return reply('ComboBebida deleted succesfully');
            } else if (!err) {
                return reply(boom.notFound());
            }
        });
    }
}
exports.createComboBebida = {

    handler: function (request, reply) {
        var newComboBebida = new combobebida({
            idCombo: request.payload.idCombo,
            idBebida: request.payload.idBebida,
        });
        newComboBebida.save(function (err) {
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
