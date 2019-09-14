var mongoose = require('mongoose');

var OrdenSchema = new mongoose.Schema({
  idMesa: String,
  idEmpleado: String,
  numero: Number,
});

module.exports = mongoose.model('orden', OrdenSchema);
