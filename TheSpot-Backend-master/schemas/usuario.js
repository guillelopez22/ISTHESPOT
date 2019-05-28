
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UsuarioSchema = new mongoose.Schema({
  IdPersonal: String,
  idOrdenes: [String],
  usuario : String,
  contrasena : String,
  nombre : String,
  telefono : String,
  scope: [String]
});

UsuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('usuario', UsuarioSchema);
