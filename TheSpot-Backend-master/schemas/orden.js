var mongoose = require('mongoose');

var OrdenSchema = new mongoose.Schema({
  idMesa: String,
  idEmpleado: String,
  idBebidas: String,
  idProductos: String,
  idCombos: String
});

module.exports = mongoose.model('orden', OrdenSchema);
