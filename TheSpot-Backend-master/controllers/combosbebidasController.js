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
    
    // return reply.response(envio);
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
        // this.envio = "w";
        // combobebida.find({ 'idCombo': request.params.idCombo }, function (err, CombosBebidas) {
        //     if (!err && CombosBebidas) {
        //         this.envio = (CombosBebidas);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'CombosBebidas not found'));
        //     }
        // });
        // return envio;
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
        // this.envio = "w";
        // combobebida.find({ 'idBebida': request.params.idBebida }, function (err, CombosBebidas) {
        //     if (!err && CombosBebidas) {
        //         this.envio = (CombosBebidas);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'CombosBebidas not found'));
        //     }
        // });
        // return envio;
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
        // this.envio = "w";
        // combobebida.update(
        //     { '_id': request.params._id },
        //     {
        //         $set:
        //         {
        //             idCombo: request.payload.idCombo,
        //             idBebida: request.payload.idBebida,
        //             cantidad_bebida: request.payload.cantidad_bebida
        //         }
        //     }, function (err) {
        //         if (err) {
        //             this.envio = (boom.wrap(err, 'ComboBebida not found'));
        //         } else {
        //             this.envio = ('updated succesfully');
        //         }
        //     }
        // );
        // return envio;
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
        // this.envio = "w";
        // combobebida.deleteMany({ 'idCombo': request.params._id }, function (err, ComboBebida) {
        //     if (err) {
        //         this.envio = (boom.badRequest("Could not delete ComboBebida"));
        //     } else if (!err && ComboBebida) {
        //         //ComboBebida.remove();
        //         this.envio = ('ComboBebida deleted succesfully');
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     }
        // });
        // return envio;
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
