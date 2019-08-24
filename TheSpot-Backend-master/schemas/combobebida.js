var mongoose = require('mongoose');
var ComboBebidaSchema = new mongoose.Schema({
  idCombo: String,
  idBebida: String,
  cantidad_bebida: Number
});

module.exports = mongoose.model('combobebida', ComboBebidaSchema);
