var mongoose = require('mongoose');

var OrdenComboSchema = new mongoose.Schema({
  idOrden : String,
  idCombo : String,
  cantidad_combo: Number
});

module.exports = mongoose.model('ordencombo', OrdenComboSchema);
