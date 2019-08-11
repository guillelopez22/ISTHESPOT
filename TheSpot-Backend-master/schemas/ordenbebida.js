var mongoose = require('mongoose');

var OrdenBebidaSchema = new mongoose.Schema({
  idOrden : String,
  idBebida : String
});

module.exports = mongoose.model('ordenbebida', OrdenBebidaSchema);
