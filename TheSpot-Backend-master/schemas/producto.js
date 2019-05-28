var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  idBebida: String,
  idProducto_Elaborado: String,
  nombre : String,
  descripcion : String,
  precio : Number
});

module.exports = mongoose.model('producto', ProductoSchema);
