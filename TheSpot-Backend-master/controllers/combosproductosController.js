var comboproducto = require('../schemas/comboproducto.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getCombosProductos = {

    handler: function (request, reply) {
        var combosproductos = comboproducto.find({});
        return(combosproductos);
    }
}
exports.getComboProductoId = {

    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.findById(request.params._id).exec();
            return reply.response(combo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "w";
        // comboproducto.findOne({ '_id': request.params._id }, function (err, ComboProducto) {
        //     if (!err && ComboProducto) {
        //         this.envio =(ComboProducto);
        //     } else if (!err) {
        //         this.envio =(boom.notFound());
        //     } else if (err) {
        //         this.envio =(boom.wrap(err, 'Combo Producto id not found'));
        //     }
        // });return envio;
    }
}
exports.getComboProductoProducto = {
    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.find({'idProducto': request.params.idProducto}).exec();
            return reply.response(combo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "w";
        // comboproducto.find({ 'idProducto': request.params.idProducto }, function (err, CombosProductos) {
        //     if (!err && CombosProductos) {
        //         this.envio = (CombosProductos);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'Productos not found'));
        //     }
        // });return envio;
    }
}
exports.getComboProductoCombo = {

    handler: async function (request, reply) {
        try {
            var combo = await comboproducto.find({'idCombo': request.params.idCombo}).exec();
            return reply.response(combo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "w";
        // comboproducto.find({ 'idCombo': request.params.idCombo }, function (err, CombosProductos) {
        //     if (!err && CombosProductos) {
        //         this.envio = (CombosProductos);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'Combos not found'));
        //     }
        // });return envio;
    }
}

exports.modifyComboProducto = {

    handler: async function (request, reply) {
        try {
            var result = await comboproducto.findByIdAndUpdate(request.params._id, request.payload, { new: true });
            return reply.response(result);
          } catch (error) {
              throw boom.badRequest();
          }
        // this.envio = "w";
        // comboproducto.update(
        //     { '_id': request.params._id },
        //     {
        //         $set:
        //         {
        //             idCombo: request.payload.idCombo,
        //             idProducto: request.payload.idProducto,
        //             cantidad_producto: request.payload.cantidad_producto
        //         }
        //     }, function (err) {
        //         if (err) {
        //             this.envio =(boom.wrap(err, 'Combo Producto not found'));
        //         } else {
        //             this.envio =('updated succesfully');
        //         }
        //     }
        // );return envio;
    }
}
exports.deleteComboProducto = {

    handler: async function (request, reply) {
        try {
            var result = await comboproducto.deleteMany({ 'idCombo': request.params._id });
            return reply.response({success: true});
        } catch (error) {
          throw boom.badRequest();
        }
        // this.envio = "w";
        // comboproducto.deleteMany({ 'idCombo': request.params._id }, function (err, ComboProducto) {
        //     if (err) {
        //         this.envio =(boom.badRequest("Could not delete combo producto"));
        //     } else if (!err && ComboProducto) {
        //         //ComboProducto.remove();
        //         this.envio =('combo producto deleted succesfully');
        //     } else if (!err) {
        //         this.envio =(boom.notFound());
        //     }
        // });return envio;
    }
}
exports.createComboProducto = {

    handler:async function (request, reply) {
        try {
            var newComboProducto = new comboproducto({
                idCombo: request.payload.idCombo,
                idProducto: request.payload.idProducto,
                cantidad_producto: request.payload.cantidad_producto
            });
            var result = await newComboProducto.save();
            return reply.response({success: true, comboproducto: result});
        } catch (error) {
            throw boom.badRequest();
        }
        // this.envio = "w";
        // var newComboProducto = new comboproducto({
        //     idCombo: request.payload.idCombo,
        //     idProducto: request.payload.idProducto,
        //     cantidad_producto: request.payload.cantidad_producto
        // });
        // newComboProducto.save(function (err) {
        //     if (!err) {
        //         this.envio = {
        //             success: true
        //         };
        //     } else {
        //         this.envio = {
        //             success: false
        //         };
        //     }
        // });return envio;
    }
}
