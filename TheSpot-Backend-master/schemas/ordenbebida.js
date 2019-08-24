var mongoose = require('mongoose');

var OrdenBebidaSchema = new mongoose.Schema({
  idOrden : String,
  idBebida : String,
  cantidad_bebida: Number
});

module.exports = mongoose.model('ordenbebida', OrdenBebidaSchema);
