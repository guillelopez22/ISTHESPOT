var proveedor = require('../schemas/proveedor.js');
var mongoose = require('mongoose');

exports.getProveedores = {

  handler: function (request, reply) {
    var proveedores = proveedor.find({});
    return proveedores;
  }
}
exports.getProveedorId = {

  handler: function (request, reply) {
    this.envio = "w"
    proveedor.findOne({ '_id': request.params._id }, function (err, Proveedor) {
      if (!err && Proveedor) {
        this.envio = (Proveedor);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Proveedor not found'));
      }
    }); return envio;
  }
}
exports.getProveedorInsumos = {

  handler: function (request, reply) {
    this.envio = "w"
    proveedor.find({ 'idInsumo': request.params.idInsumo }, function (err, Proveedor) {
      if (!err && Proveedor) {
        this.envio = (Proveedor);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Proveedor not found'));
      }
    }); return envio;
  }
}
exports.getProveedorBebidas = {

  handler: function (request, reply) {
    this.envio = "w"
    proveedor.find({ 'idBebidas': request.params.idBebidas }, function (err, Proveedor) {
      if (!err && Proveedor) {
        this.envio = (Proveedor);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Proveedor not found'));
      }
    }); return envio;
  }
}
exports.getProveedorName = {
  handler: function (request, reply) {
    this.envio = "w"
    proveedor.find({ 'nombre': request.params.idInsumo }, function (err, Proveedor) {
      if (!err && Proveedor) {
        this.envio = (Proveedor);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Proveedor not found'));
      }
    });
    return envio;
  }
}
exports.getProveedorContacto = {

  handler: function (request, reply) {
    this.envio = "r"
    proveedor.find({ 'contacto': request.params.contacto }, function (err, Proveedor) {
      if (!err && Proveedor) {
        this.envio = (Proveedor);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'Proveedor not found'));
      }
    });
    return envio;
  }
}
exports.modifyProveedor = {
  handler: function (request, reply) {
    this.envio = "r"
    proveedor.update(
      { '_id': request.params._id },
      {
        $set:
        {
          idInsumo: request.payload.idInsumo,
          idBebidas: request.payload.idBebidas,
          nombre: request.payload.nombre,
          pais: request.payload.pais,
          telefono: request.payload.telefono,
          contacto: request.payload.contacto,
          email: request.payload.email,
          direccion: request.payload.direccion
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'Proveedor not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    ); return envio;
  }
}
exports.deleteProveedor = {

  handler: function (request, reply) {
    this.envio = "r"
    proveedor.findOne({ '_id': request.params._id }, function (err, Proveedor) {
      if (err) {
        this.envio = (boom.badRequest("Could not delete Proveedor"));
      } else if (!err && Proveedor) {
        Proveedor.remove();
        this.envio = ('Proveedor deleted succesfully');
      } else if (!err) {
        this.envio = (boom.notFound());
      }
    });
    return envio;
  }
}
exports.createProveedor = {

  handler: function (request, reply) {
    this.envio = "r"
    var newProveedor = new proveedor({
      idInsumo: request.payload.idInsumo,
      idBebidas: request.payload.idBebidas,
      nombre: request.payload.nombre,
      pais: request.payload.pais,
      telefono: request.payload.telefono,
      contacto: request.payload.contacto,
      email: request.payload.email,
      direccion: request.payload.direccion
    });
    newProveedor.save(function (err) {
      if (!err) {
        this.envio = {
          success: true
        }
      } else {
        this.envio = {
          success: false
        }
      }
    }); return envio;
  }
}
