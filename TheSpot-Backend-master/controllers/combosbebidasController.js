var combobebida = require('../schemas/combobebida.js');
var mongoose = require('mongoose');

exports.getCombosBebidas = {

    handler: function (request, reply) {
        var combosbebidas = combobebida.find({});
        return (combosbebidas);
    }
}
exports.getComboBebidaId = {

    handler: function (request, reply) {
        this.envio = "w";
        combobebida.findOne({ '_id': request.params._id }, function (err, ComboBebida) {
            if (!err && ComboBebida) {
                this.envio = (ComboBebida);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'ComboBebida not found'));
            }
        });
        return envio;
    }
}

exports.getComboBebidaCombo = {

    handler: function (request, reply) {
        this.envio = "w";
        combobebida.find({ 'idCombo': request.params.idCombo }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                this.envio = (CombosBebidas);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'CombosBebidas not found'));
            }
        });
        return envio;
    }
}

exports.getComboBebidaBebida = {

    handler: function (request, reply) {
        this.envio = "w";
        combobebida.find({ 'idBebida': request.params.idBebida }, function (err, CombosBebidas) {
            if (!err && CombosBebidas) {
                this.envio = (CombosBebidas);
            } else if (!err) {
                this.envio = (boom.notFound());
            } else if (err) {
                this.envio = (boom.wrap(err, 'CombosBebidas not found'));
            }
        });
        return envio;
    }
}

exports.modifyComboBebida = {

    handler: function (request, reply) {
        this.envio = "w";
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
                    this.envio = (boom.wrap(err, 'ComboBebida not found'));
                } else {
                    this.envio = ('updated succesfully');
                }
            }
        );
        return envio;
    }
}
exports.deleteComboBebida = {

    handler: function (request, reply) {
        this.envio = "w";
        combobebida.deleteMany({ 'idCombo': request.params._id }, function (err, ComboBebida) {
            if (err) {
                this.envio = (boom.badRequest("Could not delete ComboBebida"));
            } else if (!err && ComboBebida) {
                //ComboBebida.remove();
                this.envio = ('ComboBebida deleted succesfully');
            } else if (!err) {
                this.envio = (boom.notFound());
            }
        });
        return envio;
    }
}
exports.createComboBebida = {

    handler: function (request, reply) {
        this.envio = "w";
        var newComboBebida = new combobebida({
            idCombo: request.payload.idCombo,
            idBebida: request.payload.idBebida,
            cantidad_bebida: request.payload.cantidad_bebida
        });
        newComboBebida.save(function (err) {
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
