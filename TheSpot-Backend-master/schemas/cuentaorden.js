var mongoose = require('mongoose');

var CuentaOrdenSchema = new mongoose.Schema({
  idCuenta: String,
  idOrden : String,
  descripcion : String,
});

module.exports = mongoose.model('cuentaorden', CuentaOrdenSchema);
