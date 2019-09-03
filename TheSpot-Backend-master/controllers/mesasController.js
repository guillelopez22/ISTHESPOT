var mesa = require('../schemas/mesa.js');
var mongoose = require('mongoose');

exports.getMesas = {
  handler: function (request, reply) {
    var Mesas = mesa.find({});
    return (Mesas);
  }
}
exports.getMesaId = {

  handler: function (request, reply) {
    this.envio = "w"
    mesa.findOne({ '_id': request.params._id }, function (err, Mesa) {
      if (!err && Mesa) {
        this.envio = (Mesa);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Mesa not found'));
      }
    }); return envio;
  }
}
exports.getMesaName = {
  handler: function (request, reply) {
    this.envio = "w"
    mesa.find({ 'nombre': request.params.nombre }, function (err, Mesas) {
      if (!err && Mesas) {
        this.envio = (Mesas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Mesas not found'));
      }
    }); return envio;
  }
}
exports.getMesaNumero = {
  handler: function (request, reply) {
    this.envio = "w"
    mesa.find({ 'numero': request.params.numero }, function (err, Mesas) {
      if (!err && Mesas) {
        this.envio = (Mesas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Mesas not found'));
      }
    }); return envio;
  }
}
exports.getMesaIdOrdenes = {
  handler: function (request, reply) {
    this.envio = "w"
    mesa.find({ 'IdOrden': request.params.IdOrden }, function (err, Mesas) {
      if (!err && Mesas) {
        this.envio = (Mesas);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Mesas not found'));
      }
    }); return envio;
  }
}
exports.modifyMesa = {
  handler: function (request, reply) {
    this.envio = "w"
    mesa.update(
      { '_id': request.params._id },
      {
        $set:
        {
          idOrden: request.payload.idProveedor,
          nombre: request.payload.nombre,
          numero: request.payload.numero
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'mesa not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    ); return envio;
  }
}

exports.deleteMesa = {
  handler: function (request, reply) {
    this.envio = "w"
    mesa.findOne({ '_id': request.params._id }, function (err, mesa) {
      if (err) {
        this.envio = (boom.badRequest("Could not delete mesa"));
      } else if (!err && mesa) {
        mesa.remove();
        this.envio = ('Mesa deleted succesfully');
      } else if (!err) {
        this.envio = (boom.notFound());
      }
    }); return envio;
  }
}
exports.createMesa = {
  handler: function (request, reply) {
    this.envio = "w"
    var newMesa = new mesa({
      idOrden: null,
      nombre: request.payload.nombre,
      numero: request.payload.numero
    });
    newMesa.save(function (err) {
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
