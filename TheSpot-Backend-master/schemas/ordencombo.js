var mongoose = require('mongoose');

var OrdenComboSchema = new mongoose.Schema({
  idOrden : String,
  idCombo : String
});

module.exports = mongoose.model('ordencombo', OrdenComboSchema);
