var mongoose = require('mongoose');

var Producto_Elaborado_DetailSchema = new mongoose.Schema({
  idProducto_Elaborado : String,
  idBebida: String,
  idInsumo: String,
  cantidad: Number
});

module.exports = mongoose.model('producto_elaborado_detail', Producto_Elaborado_DetailSchema);
