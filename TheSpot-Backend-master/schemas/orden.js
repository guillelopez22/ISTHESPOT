var mongoose = require('mongoose');

var OrdenSchema = new mongoose.Schema({
  idCombos: [String],
  idProductos: [String],
  idPromociones: [String],
  idCliente: String,
  nombreCliente: String,
  idPersonal: String,
  idFacturas: [String],
  idMesa: String,
  total: Number,
  fecha : String,
  efectivo: Number,
  tarjeta: Number
});

module.exports = mongoose.model('orden', OrdenSchema);
