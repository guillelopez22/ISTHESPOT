var mongoose = require('mongoose');
var BebidaSchema = new mongoose.Schema({
  nombre : String,
  idProveedor: String,
  tipo : String,
  inventario : Number,
  descripcion : String,
  precio: Number
});

module.exports = mongoose.model('bebida', BebidaSchema);
