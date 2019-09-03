var bebida = require('../schemas/bebida.js');
var mongoose = require('mongoose');
const { promisify } = require('util');

exports.getBebidas = {

  handler: function (request, reply) {
    var bebidas = bebida.find({});
    return bebidas;
  }
}
exports.getBebidaId = {

  handler: function (request, reply) {
    this.envio = "w";
    bebida.findOne({ '_id': request.params._id }, function (err, Bebida) {
      if (!err && Bebida) {
        this.envio = (Bebida);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Bebida not found'));
      }
    });
    return envio;
  }
}
exports.getBebidaName = {
  handler: function (request, reply) {
    this.envio = "w";
    bebida.find({ 'nombre': request.params.nombre }, function (err, Bebidas) {
      if (!err && Bebidas) {
        this.envio = (Bebidas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return envio;
  }
}
exports.getBebidaProveedor = {

  handler: function (request, reply) {
    this.envio = "w";
    bebida.find({ 'idProveedor': request.params.idProveedor }, function (err, Bebidas) {
      if (!err && Bebidas) {
        this.envio = (Bebidas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return envio;
  }
}
exports.getBebidaTipo = {
  handler: function (request, reply) {
    this.envio = "w";
    bebida.find({ 'tipo': request.params.tipo }, function (err, Bebidas) {
      if (!err && Bebidas) {
        this.envio = (Bebidas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Bebidas not found'));
      }
    });
    return envio;
  }
}
exports.modifyBebida = {

  handler: function (request, reply) {
    this.envio = "w";
    bebida.update(
      { '_id': request.params._id },
      {
        $set:
        {
          nombre: request.payload.nombre,
          idProveedor: request.payload.idProveedor,
          tipo: request.payload.tipo,
          inventario: request.payload.inventario,
          descripcion: request.payload.descripcion
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'Bebida not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    );
    return envio;
  }
}
exports.deleteBebida = {

  handler: function (request, reply) {
    this.envio = "w";
    bebida.findOne({ '_id': request.params._id }, (err, Bebida) => {
      if (err) {
        this.envio = (boom.badRequest("Could not delete bebida"));
      } else if (!err && Bebida) {
        Bebida.remove();
        this.envio = "Bebida deleted succesfully"
        return ('Bebida deleted succesfully');
      } else if (!err) {
        this.envio = (boom.notFound());
      }
    });
    return envio;
  }
}
exports.createBebida = {

  handler: function (request, reply) {
    this.envio = "w";
    var newBebida = new bebida({
      nombre: request.payload.nombre,
      idProveedor: request.payload.idProveedor,
      tipo: request.payload.tipo,
      inventario: request.payload.inventario,
      descripcion: request.payload.descripcion
    });
    newBebida.save(function (err) {
      if (!err) {
        console.log("se ha creado");
        this.envio = {
          success: true
        };
      } else {
        console.log("NOOOOOO ha creado");
        this.envio = ({
          success: false
        });
      }
    });
    return envio;
  }
}