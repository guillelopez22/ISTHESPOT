var mongoose = require('mongoose');
var ProductoOrdenSchema = new mongoose.Schema({
   idProducto: String,
   idOrden: String,
   cantidad_producto: Number
});

module.exports = mongoose.model('productoorden', ProductoOrdenSchema);
