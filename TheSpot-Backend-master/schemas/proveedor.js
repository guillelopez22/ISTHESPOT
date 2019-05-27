var mongoose = require('mongoose');

var ProveedorSchema = new mongoose.Schema({
  idInsumo: [String],
  idBebidas: [String],
  nombre : String,
  pais : String,
  telefono : String,
  contacto : String,
  email : String,
  direccion : String
});

module.exports = mongoose.model('proveedor', ProveedorSchema);
