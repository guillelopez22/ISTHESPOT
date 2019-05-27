var mongoose = require('mongoose');

var PersonalSchema = new mongoose.Schema({
  idUsuario: String,
  idOrdenes: [String],
  identidad: String,
  nacimiento : String,
  direccion : String,
  tipo : String
});

module.exports = mongoose.model('personal', PersonalSchema);
