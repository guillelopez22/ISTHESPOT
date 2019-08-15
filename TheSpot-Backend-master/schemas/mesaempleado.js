var mongoose = require('mongoose');
var MesaEmpleadoSchema = new mongoose.Schema({
  idEmpleado: String,
  idMesa: String, 
});

module.exports = mongoose.model('mesaempleado', MesaEmpleadoSchema);
