var mongoose = require('mongoose');

var PromocionSchema = new mongoose.Schema({
  idProducto: String,
  nombre : String,
  descripcion : String,
  cantidad : Number,
  descuento : Number,
  hora_inicio: String,
  hora_final: String
});

module.exports = mongoose.model('promocion', PromocionSchema);
