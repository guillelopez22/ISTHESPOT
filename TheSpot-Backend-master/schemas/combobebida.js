var mongoose = require('mongoose');
var ComboBebidaSchema = new mongoose.Schema({
  idCombo: String,
  idBebida: String,
});

module.exports = mongoose.model('combobebida', ComboBebidaSchema);
