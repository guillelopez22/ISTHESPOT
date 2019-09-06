var productoorden = require('../schemas/productoorden.js');
var mongoose = require('mongoose');

exports.getProductosOrdenes = {

  handler: function (request, reply) {
    var productosordenes = productoorden.find({});
    return (productosordenes);
  }
}
exports.getProductoOrdenId = {

  handler: async function (request, reply) {
    try {
      var producto = await productoorden.findById(request.params._id).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }

    // return reply.response(envio);
  }
}

exports.getProductoOrdenProducto = {
  handler: async function (request, reply) {
    try {
      var producto = await productoorden.find({ 'idProducto': request.params.idProducto }).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler: function (request, reply) {
    this.envio = "w"
    productoorden.find({ 'idProducto': request.params.idProducto }, function (err, ProductosOrdenes) {
      if (!err && ProductosOrdenes) {
        this.envio = (ProductosOrdenes);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'id producto not found'));
      }
    });
    return envio;
  }*/
}

exports.getProductoOrdenOrden = {
  handler: async function (request, reply) {
    try {
      var producto = await productoorden.find({ 'idOrden': request.params.idOrden }).exec();
      return reply.response(producto);
    } catch (error) {
      throw boom.notFound();
    }
  }
  /*handler: function (request, reply) {
    this.envio = "w"
    productoorden.find({ 'idOrden': request.params.idOrden }, function (err, ProductosOrdenes) {
      if (!err && ProductosOrdenes) {
        this.envio = (ProductosOrdenes);
      } else if (!err) {
        this.envio = (boom.notFound());
      } else if (err) {
        this.envio = (boom.wrap(err, 'id orden not found'));
      }
    });
    return envio;
  }*/
}

exports.modifyProductoOrden = {
  handler: async function (request, reply) {
    try {
      var result = await productoorden.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
      throw boom.badRequest();
    }
  }
  /*handler: function (request, reply) {
    this.envio = "w"
    productoorden.update(
      { '_id': request.params._id },
      {
        $set:
        {
          idProducto: request.payload.idProducto,
          idOrden: request.payload.idOrden,
        }
      }, function (err) {
        if (err) {
          this.envio = (boom.wrap(err, 'ProductoOrden not found'));
        } else {
          this.envio = ('updated succesfully');
        }
      }
    ); return envio;
  }*/
}
exports.deleteProductoOrden = {
  handler: async function (request, reply) {
    try {
      var result = await productoorden.deleteMany({ 'idOrden': request.params._id });
      return reply.response({ success: true });
    } catch (error) {
      throw boom.badRequest();
    }
  }
  /*handler: function (request, reply) {
    this.envio = "w"
    productoorden.deleteMany({ 'idOrden': request.params._id }, function (err, ProductoOrden) {
      if (err) {
        this.envio = (boom.badRequest("Could not delete producto orden"));
      } else if (!err && ProductoOrden) {
        //ProductoOrden.remove();
        this.envio = ('producto orden deleted succesfully');
      } else if (!err) {
        this.envio = y(boom.notFound());
      }
    }); return envio;
  }*/
}
exports.createProductoOrden = {

  handler: async function (request, reply) {
    try {
      var newProductoOrden = new productoorden({
        idProducto: request.payload.idProducto,
        idOrden: request.payload.idOrden,
        cantidad_producto: request.payload.cantidad_producto
      });
      var result = await newProductoOrden.save();
      return reply.response({ success: true, bebida: result });
    } catch (error) {
      throw boom.badRequest();
    }
  }
}
