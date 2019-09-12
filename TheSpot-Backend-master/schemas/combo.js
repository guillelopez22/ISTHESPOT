var mongoose = require('mongoose');

var ComboSchema = new mongoose.Schema({
  nombre : String,
  descripcion : String,
  precio : Number,
  imagen: String
});

module.exports = mongoose.model('combo', ComboSchema);
