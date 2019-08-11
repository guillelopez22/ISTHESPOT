var mongoose = require('mongoose');

var InsumoProveedorSchema = new mongoose.Schema({
  idInsumo : String,
  idProveedor : String
});

module.exports = mongoose.model('insumoproveedor', InsumoProveedorSchema);
