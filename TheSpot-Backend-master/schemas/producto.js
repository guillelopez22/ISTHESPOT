var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  id: String,
  nombre : String,
  tipo : String,
  descripcion : String,
  //idBebida: String,
  idInsumo: String,
  cantidad: Number,
  precio : Number
});

module.exports = mongoose.model('producto', ProductoSchema);
