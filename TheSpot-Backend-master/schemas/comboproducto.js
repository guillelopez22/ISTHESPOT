var mongoose = require('mongoose');

var ComboProductoSchema = new mongoose.Schema({
  idCombo : String,
  idProducto : String
});

module.exports = mongoose.model('comboproducto', ComboProductoSchema);
