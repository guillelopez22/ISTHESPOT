var mongoose = require('mongoose');
var ProductoInsumoSchema = new mongoose.Schema({
  idProducto: String,
  idInsumo: String,
});

module.exports = mongoose.model('productoinsumo', ProductoInsumoSchema);
