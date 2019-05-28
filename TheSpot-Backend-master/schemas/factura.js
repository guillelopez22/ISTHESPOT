var mongoose = require('mongoose');

var FacturaSchema = new mongoose.Schema({
  idOrden: String,
  nombre: String,
  subtotal: Number,
  isv: Number,
  propina: Number,
  descuento : Number,
  total: Number
});

module.exports = mongoose.model('factura', FacturaSchema);
