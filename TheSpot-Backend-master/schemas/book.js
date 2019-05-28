var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  titulo : String,
  genero : String,
  autor : String,
  publicacion : Number,
  editorial : String,
  descripcion : String,
  keywords : [String],
  copias_total : Number,
  copias_disponible : Number,
  prestado: Number
});

module.exports = mongoose.model('book', BookSchema);
