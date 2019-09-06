var cuentaorden = require('../schemas/cuentaorden.js');
var mongoose = require('mongoose');

exports.getCuentaOrden = {

  handler: function (request, reply) {
    var cuentasordenes = cuentaorden.find({});
    return (cuentasordenes);
  }
}
exports.getCuentaOrdenId = {

  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.findById(request.params._id).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }

    // return reply.response(envio);
  }
}
exports.getCuentaOrdenCuenta = {
  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.find({ 'idCuenta': request.params.idCuenta }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
    /*this.envio ="w";
    cuentaorden.find({'idCuenta' : request.params.idCuenta}, function(err, CuentaOrden){
      if(!err && CuentaOrden){
        this.envio =(CuentaOrden);
      }else if(!err){
        this.envio =(boom.notFound());
      }else if(err){
        this.envio =(boom.wrap(err, 'cuenta not found'));
      }
    });return envio;*/
  }
}
exports.getCuentaOrdenOrden = {

  handler: async function (request, reply) {
    try {
      var cuenta = await cuentaorden.find({ 'idCuenta': request.params.idCuenta }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
    /*this.envio = "w";
    cuentaorden.find({ 'idOrden': request.params.idOrden }, function (err, CuentaOrden) {
      if (!err && CuentaOrden) {
        this.envio = (CuentaOrden);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'orden not found'));
      }
    });
    return envio;*/
  }
}
exports.getCuentaOrdenDescripcion = {
  handler: async function (request, reply) {
    try {
      var cuenta = await combobebida.find({ 'descripcion': request.params.descripcion }).exec();
      return reply.response(cuenta);
    } catch (error) {
      throw boom.notFound();
    }
    /*this.envio = "w";
    cuentaorden.find({ 'descripcion': request.params.descripcion }, function (err, CuentaOrden) {
      if (!err && CuentaOrden) {
        this.envio = (CuentaOrden);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'descripcion not found'));
      }
    }); return envio;*/
  }
}
exports.modifyCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var result = await cuentaorden.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
    /*this.envio = "w";
    cuentaorden.update(
      { '_id': request.params._id },
      {
        $set:
        {
          idCuenta: request.payload.idCuenta,
          idOrden: request.payload.idOrden,
          descripcion: request.payload.descripcion,
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'CuentaOrden not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    ); return envio;*/
  }
}
exports.deleteCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var result = await cuentaorden.deleteMany({ 'idCuenta': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
    /*this.envio = "w"
    cuentaorden.deleteMany({ 'idCuenta': request.params._id }, function (err, CuentaOrden) {
      if (err) {
        this.envio = (boom.badRequest("Could not delete CuentaOrden"));
      } else if (!err && CuentaOrden) {
        //CuentaOrden.remove();
        this.envio = ('CuentaOrden deleted succesfully');
      } else if (!err) {
        this.envio = (boom.notFound());
      }
    }); return envio;*/
  }
}
exports.createCuentaOrden = {

  handler: async function (request, reply) {
    try {
      var newCuentaOrden = new combobebida({
          idCuenta: request.payload.idCuenta,
          idOrden: request.payload.idOrden,
          descripcion: request.payload.descripcion
      });
      var result = await newCuentaOrden.save(); 
      return reply.response({success: true, cuenta: result});
  } catch (error) {
       throw boom.badRequest();
  }
    /*this.envio = "w";
    var newCuentaOrden = new cuentaorden({
      idCuenta: request.payload.idCuenta,
      idOrden: request.payload.idOrden,
      descripcion: request.payload.decripcion,
    });
    newCuentaOrden.save(function (err) {
      if (!err) {
        this.envio = {
          success: true
        };
      } else {
        this.envio = {
          success: false
        }
      }
    });*/
  }
}
