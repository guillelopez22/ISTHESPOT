var mongoose = require('mongoose');

var MesaSchema = new mongoose.Schema({
  idOrden: [String],
  nombre: String,
  numero: Number,
});

module.exports = mongoose.model('mesa', MesaSchema);
