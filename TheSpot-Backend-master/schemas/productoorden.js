var mongoose = require('mongoose');
var ProductoOrdenSchema = new mongoose.Schema({
   idProducto: String,
   idOrden: String,
});

module.exports = mongoose.model('productoorden', ProductoOrdenSchema);
