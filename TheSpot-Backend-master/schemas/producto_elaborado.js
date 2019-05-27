var mongoose = require('mongoose');

var Producto_ElaboradoSchema = new mongoose.Schema({
  idProducto_Elaborado_Detail: [String],
  tipo : String,
  descripcion : String
});

module.exports = mongoose.model('producto_elaborado', Producto_ElaboradoSchema);
