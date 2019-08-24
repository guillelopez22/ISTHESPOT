var mongoose = require('mongoose');

var ComboProductoSchema = new mongoose.Schema({
  idCombo : String,
  idProducto : String,
  cantidad_producto: Number
});

module.exports = mongoose.model('comboproducto', ComboProductoSchema);
