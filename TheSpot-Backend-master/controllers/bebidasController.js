var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');
const boom = require('boom');
const { promisify } = require('util');

exports.getBebidas = {

  handler: function (request, reply) {
    var bebidas = bebida.find({});
    return bebidas;
  }
}
exports.getBebidaId = {

  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.findById(request.params._id).exec();
      return reply.response(Bebida);
    } catch (error){
      throw boom.notFound();
    }
    
    // return reply.response(envio);
  }
}
exports.getBebidaName = {
  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({'nombre': request.params.nombre}).exec();
      return reply.response(Bebida);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // bebida.find({ 'nombre': request.params.nombre }, function (err, Bebidas) {
    //   if (!err && Bebidas) {
    //     this.envio = (Bebidas);
    //   } else if (!err) {
    //     this.envio = (boom.notFound());
    //   } else if (err) {
    //     this.envio = (boom.wrap(err, 'Bebidas not found'));
    //   }
    // });
    // return envio;
  }
}
exports.getBebidaProveedor = {

  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({'idProveedor': request.params.idProveedor}).exec();
      return reply.response(Bebida);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // bebida.find({ 'idProveedor': request.params.idProveedor }, function (err, Bebidas) {
    //   if (!err && Bebidas) {
    //     this.envio = (Bebidas);
    //   } else if (!err) {
    //     this.envio = (boom.notFound());
    //   } else if (err) {
    //     this.envio = (boom.wrap(err, 'Bebidas not found'));
    //   }
    // });
    // return envio;
  }
}
exports.getBebidaTipo = {
  handler: async function (request, reply) {
    try {
      var Bebida = await bebida.find({'tipo': request.params.tipo}).exec();
      return reply.response(Bebida);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // bebida.find({ 'tipo': request.params.tipo }, function (err, Bebidas) {
    //   if (!err && Bebidas) {
    //     this.envio = (Bebidas);
    //   } else if (!err) {
    //     this.envio = (boom.notFound());
    //   } else if (err) {
    //     this.envio = (boom.wrap(err, 'Bebidas not found'));
    //   }
    // });
    // return envio;
  }
}
exports.modifyBebida = {

  handler: async function (request, reply) {
    try {
      var result = await bebida.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
        throw boom.badRequest();
    }
    // this.envio = "w";
    // bebida.update(
    //   { '_id': request.params._id },
    //   {
    //     $set:
    //     {
    //       nombre: request.payload.nombre,
    //       idProveedor: request.payload.idProveedor,
    //       tipo: request.payload.tipo,
    //       inventario: request.payload.inventario,
    //       descripcion: request.payload.descripcion,
    //       precio: request.payload.precio
    //     }
    //   }, function (err) {
    //     if (err) {
    //       this.envio = (boom.wrap(err, 'Bebida not found'));
    //     } else {
    //       this.envio = ('updated succesfully');
    //     }
    //   }
    // );
    // return envio;
  }
}
exports.deleteBebida = {

  handler: async function (request, reply) {
    try {
      var result = await bebida.findByIdAndDelete(request.params._id);
      return reply.response({success: true});
  } catch (error) {
    throw boom.badRequest();
  }
    // this.envio = "w";
    // bebida.findOne({ '_id': request.params._id }, (err, Bebida) => {
    //   if (err) {
    //     this.envio = (boom.badRequest("Could not delete bebida"));
    //   } else if (!err && Bebida) {
    //     Bebida.remove();
    //     this.envio = "Bebida deleted succesfully"
    //     return ('Bebida deleted succesfully');
    //   } else if (!err) {
    //     this.envio = (boom.notFound());
    //   }
    // });
    // return envio;
  }
}
exports.createBebida = {

  handler: async function (request, reply) {
    try {
      var newBebida = new bebida({
        nombre: request.payload.nombre,
        idProveedor: request.payload.idProveedor,
        tipo: request.payload.tipo,
        inventario: request.payload.inventario,
        descripcion: request.payload.descripcion,
        precio: request.payload.precio,
        imagen: request.payload.imagen
      });
      var result = await newBebida.save();
      return reply.response({success: true, bebida: result});
  } catch (error) {
    throw boom.badRequest();
  }
    // this.envio = "w";
    // var newBebida = new bebida({
    //   nombre: request.payload.nombre,
    //   idProveedor: request.payload.idProveedor,
    //   tipo: request.payload.tipo,
    //   inventario: request.payload.inventario,
    //   descripcion: request.payload.descripcion,
    //   precio: request.payload.precio
    // });
    // newBebida.save(function (err) {
    //   if (!err) {
    //     console.log("se ha creado");
    //     this.envio = {
    //       success: true
    //     };
    //   } else {
    //     console.log("NOOOOOO ha creado");
    //     this.envio = ({
    //       success: false
    //     });
    //   }
    // });
    // return envio;
  }
}