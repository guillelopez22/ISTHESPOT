var mongoose = require('mongoose');

var CuentaSchema = new mongoose.Schema({
  idUsuario: String,
  total : String,
  estado : String,
  idMesa: String
});

module.exports = mongoose.model('cuenta', CuentaSchema);
