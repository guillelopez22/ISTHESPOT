var mongoose = require('mongoose');
var ProductoInsumoSchema = new mongoose.Schema({
  idProducto: String,
  idInsumo: String,
  cantidad_insumo: Number
});

module.exports = mongoose.model('productoinsumo', ProductoInsumoSchema);
