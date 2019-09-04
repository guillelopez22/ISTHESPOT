var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  id: String,
  nombre : String,
  tipo : String,
  descripcion : String,
  cantidad: Number,
  precio : Number,
  imagen: String
});

module.exports = mongoose.model('producto', ProductoSchema);
