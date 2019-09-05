var insumoproveedor = require('../schemas/insumoproveedor.js');
var mongoose = require('mongoose');
const boom = require('boom');
exports.getInsumosProveedores = {

    handler: function (request, reply) {
        var insumosproveedores = insumoproveedor.find({});
        return (insumosproveedores);
    }
}
exports.getInsumoProveedorId = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.findById(request.params._id).exec();
            return reply.response(Insumo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "w"
        // insumoproveedor.findOne({ '_id': request.params._id }, function (err, InsumoProveedor) {
        //     if (!err && InsumoProveedor) {
        //         this.envio = (InsumoProveedor);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'InsumoProveedor not found'));
        //     }
        // });
        // return envio;
    }
}

exports.getInsumoProveedorInsumo = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.find({'idInsumo': request.params.idInsumo}).exec();
            return reply.response(Insumo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "w"
        // insumoproveedor.find({ 'idInsumo': request.params.idInsumo }, function (err, InsumosProveedores) {
        //     if (!err && InsumosProveedores) {
        //         this.envio = (InsumosProveedores);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'InsumosProveedores not found'));
        //     }
        // }); return envio;
    }
}

exports.getInsumoProveedorProveedor = {

    handler: async function (request, reply) {
        try {
            var Insumo = await insumoproveedor.find({'idProveedor': request.params.idProveedor}).exec();
            return reply.response(Insumo);
          } catch (error){
            throw boom.notFound();
          }
        // this.envio = "h"
        // insumoproveedor.find({ 'idProveedor': request.params.idProveedor }, function (err, InsumosProveedores) {
        //     if (!err && InsumosProveedores) {
        //         this.envio = (InsumosProveedores);
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     } else if (err) {
        //         this.envio = (boom.wrap(err, 'InsumosProveedores not found'));
        //     }
        // }); return envio
    }
}

exports.modifyInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var result = await insumo.insumoproveedor(request.params._id, request.payload, { new: true });
            return reply.response(result);
          } catch (error) {
              throw boom.badRequest();
          }
        // this.envio = "w"
        // insumoproveedor.update(
        //     { '_id': request.params._id },
        //     {
        //         $set:
        //         {
        //             idInsumo: request.payload.idInsumo,
        //             idProveedor: request.payload.idProveedor,
        //         }
        //     }, function (err) {
        //         if (err) {
        //             this.envio = (boom.wrap(err, 'InsumoProveedor not found'));
        //         } else {
        //             this.envio = ('updated succesfully');
        //         }
        //     }
        // ); return envio;
    }
}
exports.deleteInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var result = await insumoproveedor.deleteMany({ 'idInsumo': request.params._id });
            return reply.response({success: true});
        } catch (error) {
          throw boom.badRequest();
        }
        // this.envio = "w"
        // insumoproveedor.deleteMany({ 'idInsumo': request.params._id }, function (err, InsumoProveedor) {
        //     if (err) {
        //         this.envio = (boom.badRequest("Could not delete InsumoProveedor"));
        //     } else if (!err && InsumoProveedor) {
        //         //InsumoProveedor.remove();
        //         this.envio = ('InsumoProveedor deleted succesfully');
        //     } else if (!err) {
        //         this.envio = (boom.notFound());
        //     }
        // }); return envio;
    }
}
exports.createInsumoProveedor = {

    handler: async function (request, reply) {
        try {
            var newInsumoProveedor = new insumoproveedor({
                idInsumo: request.payload.idInsumo,
                idProveedor: request.payload.idProveedor,
            });
            var result = await newInsumoProveedor.save();
            return reply.response({success: true, insumoProveedor: result});
        } catch(error) {
             throw boom.badRequest();
        }
        // this.envio = "w"
        // var newInsumoProveedor = new insumoproveedor({
        //     idInsumo: request.payload.idInsumo,
        //     idProveedor: request.payload.idProveedor,
        // });
        // newInsumoProveedor.save(function (err) {
        //     if (!err) {
        //         this.envio = {
        //             success: true
        //         };
        //     } else {
        //         this.envio = {
        //             success: false
        //         }
        //     }
        // }); return envio;
    }
}
