var combobebida = require('../schemas/combobebida.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getCombosBebidas = {

    handler: function (request, reply) {
        var combosbebidas = combobebida.find({});
        return (combosbebidas);
    }
}
exports.getComboBebidaId = {

    handler: async function (request, reply) {
    try {
      var combo = await combobebida.findById(request.params._id).exec();
      return reply.response(combo);
    } catch (error){
      throw boom.notFound();
    }
  }
}

exports.getComboBebidaCombo = {

    handler: async function (request, reply) {
        try {
            var combo = await combobebida.find({'idCombo': request.params.idCombo}).exec();
            return reply.response(combo);
        } catch (error){
            throw boom.notFound();
        }
    }
}

exports.getComboBebidaBebida = {

    handler: async function (request, reply) {
        try {
            var combo = await combobebida.find({'idCombo': request.params.idCombo}).exec();
            return reply.response(combo);
        } catch (error){
            throw boom.notFound();
        }
    }
}

exports.modifyComboBebida = {

    handler: async function (request, reply) {
        try {
            var result = await combobebida.findByIdAndUpdate(request.params._id, request.payload, { new: true });
            return reply.response(result);
          } catch (error) {
              throw boom.badRequest();
          }
    }
}
exports.deleteComboBebida = {

    handler: async function (request, reply) {
        try {
            var result = await combobebida.deleteMany({ 'idCombo': request.params._id });
            return reply.response({success: true});
        } catch (error) {
          throw boom.badRequest();
        }
    }
}
exports.createComboBebida = {

    handler: async function (request, reply) {
        try {
            var newComboBebida = new combobebida({
                idCombo: request.payload.idCombo,
                idBebida: request.payload.idBebida,
                cantidad_bebida: request.payload.cantidad_bebida
            });
            var result = await newComboBebida.save(); 
            return reply.response({success: true, bebida: result});
        } catch (error) {
             throw boom.badRequest();
        }
    }
}
