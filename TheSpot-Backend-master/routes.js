var bebidasController = require('./controllers/bebidasController');
var combosController = require('./controllers/combosController');
var facturasController = require('./controllers/facturasController');
var insumosController = require('./controllers/insumosController');
var mesasController = require('./controllers/mesasController');
var ordenesController = require('./controllers/ordenesController');
var personalController = require('./controllers/personalController');
//var prod_elaborado_detailController = require('./controllers/prod_elaborado_detailController');
//var productos_elaboradosController = require('./controllers/productos_elaboradosController');
var productosController = require('./controllers/productosController');
var promocionesController = require('./controllers/promocionesController');
var proveedorController = require('./controllers/proveedorController');
var usuariosController = require('./controllers/usuariosController');
var productosinsumosController = require('./controllers/productosinsumosController');
var productosordenesController = require('./controllers/productosordenesController');
var combosproductosController = require('./controllers/combosproductosController');
var ordenesbebidasController = require('./controllers/ordenesbebidasController');
var ordenescombosController = require('./controllers/ordenescombosController');
var authenticationController = require('./controllers/authenticationController');
var cuentasordenesController = require('./controllers/cuentasordenesController');
var insumosproveedoresController = require('./controllers/insumosproveedoresController');
var cuentasController = require('./controllers/cuentasController');
var mesasempleadosController = require('./controllers/mesasempleadosController');
var combosbebidasController = require('./controllers/combosbebidasController');

exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config: {
			handler: function (request, reply) {
				console.log(request.query);
				return reply.response('Hola');
			}
		}
	},
	{
		method: 'GET',
		path: '/bebidas',
		config: bebidasController.getBebidas
	},

	{
		method: 'GET',
		path: '/bebidas/searchbyid/{_id}',
		config: bebidasController.getBebidaId
	},
	{
		method: 'GET',
		path: '/bebidas/searchbyname/{nombre}',
		config: bebidasController.getBebidaName
	},
	{
		method: 'GET',
		path: '/bebidas/searchbyproveedor/{idProveedor}',
		config: bebidasController.getBebidaProveedor
	},
	{
		method: 'GET',
		path: '/bebidas/searchbyTipo/{tipo}',
		config: bebidasController.getBebidaTipo
	},
	{
		method: 'PUT',
		path: '/bebidas/update/{_id}',
		config: bebidasController.modifyBebida

	},
	{
		method: 'DELETE',
		path: '/bebidas/delete/{_id}',
		config: bebidasController.deleteBebida
	},
	{
		method: 'POST',
		path: '/bebidas/create',
		config: bebidasController.createBebida
	},
	{
		method: 'GET',
		path: '/combos',
		config: combosController.getCombos
	},

	{
		method: 'GET',
		path: '/combos/searchbyid/{_id}',
		config: combosController.getComboId
	},
	{
		method: 'GET',
		path: '/combos/searchbyname/{nombre}',
		config: combosController.getComboName
	},
	{
		method: 'GET',
		path: '/combos/searchbyPrecio/{precio}',
		config: combosController.getComboPrecio
	},
	{
		method: 'PUT',
		path: '/combos/update/{_id}',
		config: combosController.modifyCombo

	},
	{
		method: 'DELETE',
		path: '/combos/delete/{_id}',
		config: combosController.deleteCombo
	},
	{
		method: 'POST',
		path: '/combos/create',
		config: combosController.createCombo
	},
	{
		method: 'GET',
		path: '/facturas',
		config: facturasController.getFacturas
	},

	{
		method: 'GET',
		path: '/facturas/searchbyid/{_id}',
		config: facturasController.getFacturaId
	},
	{
		method: 'GET',
		path: '/facturas/searchbyname/{nombre}',
		config: facturasController.getFacturaName
	},
	{
		method: 'GET',
		path: '/facturas/searchbyOrdenesId/{idOrden}',
		config: facturasController.getFacturaIdOrden
	},
	{
		method: 'PUT',
		path: '/facturas/update/{_id}',
		config: facturasController.modifyFactura

	},
	{
		method: 'DELETE',
		path: '/facturas/delete/{_id}',
		config: facturasController.deleteFactura
	},
	{
		method: 'POST',
		path: '/facturas/create',
		config: facturasController.createFactura
	},
	{
		method: 'GET',
		path: '/insumos',
		config: insumosController.getInsumos
	},

	{
		method: 'GET',
		path: '/insumos/searchbyid/{_id}',
		config: insumosController.getInsumoId
	},
	{
		method: 'GET',
		path: '/insumos/searchbyname/{nombre}',
		config: insumosController.getInsumoName
	},
	{
		method: 'GET',
		path: '/insumos/searchbyProveedor/idProveedor',
		config: insumosController.getInsumoProveedor
	},
	{
		method: 'GET',
		path: '/insumos/searchbyInventario/{inventario}',
		config: insumosController.getInsumoInventario
	},
	{
		method: 'PUT',
		path: '/insumos/update/{_id}',
		config: insumosController.modifyInsumo

	},
	{
		method: 'DELETE',
		path: '/insumos/delete/{_id}',
		config: insumosController.deleteInsumo
	},
	{
		method: 'POST',
		path: '/insumos/create',
		config: insumosController.createInsumo
	},
	{
		method: 'GET',
		path: '/mesas',
		config: mesasController.getMesas
	},

	{
		method: 'GET',
		path: '/mesas/searchbyid/{_id}',
		config: mesasController.getMesaId
	},
	{
		method: 'GET',
		path: '/mesas/searchbyname/{nombre}',
		config: mesasController.getMesaName
	},
	{
		method: 'GET',
		path: '/mesas/searchbynumero/{numero}',
		config: mesasController.getMesaNumero
	},
	{
		method: 'GET',
		path: '/mesas/searchbyIdOrden/{idOrden}',
		config: mesasController.getMesaIdOrdenes
	},
	{
		method: 'PUT',
		path: '/mesas/update/{_id}',
		config: mesasController.modifyMesa

	},
	{
		method: 'DELETE',
		path: '/mesas/delete/{_id}',
		config: mesasController.deleteMesa
	},
	{
		method: 'POST',
		path: '/mesas/create',
		config: mesasController.createMesa
	},
	{
		method: 'GET',
		path: '/ordenes',
		config: ordenesController.getOrdenes
	},
	{
		method: 'GET',
		path: '/ordenes/searchbyid/{_id}',
		config: ordenesController.getOrdenesId
	},
	{
		method: 'GET',
		path: '/ordenes/searchbyclientname/{nombreCliente}',
		config: ordenesController.getOrdenesName
	},
	{
		method: 'GET',
		path: '/ordenes/searchbyidPromociones/{_id}',
		config: ordenesController.getOrdenesPromociones
	},
	{
		method: 'GET',
		path: '/ordenes/searchbyidMesa/{idMesa}',
		config: ordenesController.getOrdenesMesa
	},
	{
		method: 'GET',
		path: '/ordenes/searchbyidFecha/{fecha}',
		config: ordenesController.getOrdenesFecha
	},
	{
		method: 'PUT',
		path: '/ordenes/update/{_id}',
		config: ordenesController.modifyOrden

	},
	{
		method: 'DELETE',
		path: '/ordenes/delete/{_id}',
		config: ordenesController.deleteOrden
	},
	{
		method: 'POST',
		path: '/ordenes/create',
		config: ordenesController.createOrden
	},
	{
		method: 'GET',
		path: '/personal',
		config: personalController.getPersonal
	},

	{
		method: 'GET',
		path: '/personal/searchbyid/{_id}',
		config: personalController.getPersonalId
	},
	{
		method: 'GET',
		path: '/personal/searchbyUsuario/{idUsuario}',
		config: personalController.getPersonalUsuario
	},
	{
		method: 'GET',
		path: '/personal/searchbyOrdenes/{idOrdenes}',
		config: personalController.getPersonalOrdenes
	},
	{
		method: 'GET',
		path: '/personal/searchbyIdentidad/{identidad}',
		config: personalController.getPersonalIdentidad
	},
	{
		method: 'GET',
		path: '/personal/searchbytipo/{tipo}',
		config: personalController.getPersonalTipo
	},
	{
		method: 'PUT',
		path: '/personal/update/{_id}',
		config: personalController.modifyPersonal

	},
	{
		method: 'DELETE',
		path: '/personal/delete/{_id}',
		config: personalController.deletePersonal
	},
	{
		method: 'POST',
		path: '/personal/create',
		config: personalController.createPersonal
	},
	{
		method: 'GET',
		path: '/productos',
		config: productosController.getProductos
	},
	{
		method: 'GET',
		path: '/productos/searchbyid/{_id}',
		config: productosController.getProductoId
	},
	{
		method: 'GET',
		path: '/productos/searchbynombre/{nombre}',
		config: productosController.getProductoNombre
	},
	{
		method: 'GET',
		path: '/productos/searchbyPrecio/{precio}',
		config: productosController.getProductoPrecio
	},
	{
		method: 'PUT',
		path: '/productos/update/{_id}',
		config: productosController.modifyProducto

	},
	{
		method: 'DELETE',
		path: '/productos/delete/{_id}',
		config: productosController.deleteProducto
	},
	{
		method: 'POST',
		path: '/productos/create',
		config: productosController.createProducto
	},
	{
		method: 'GET',
		path: '/promociones',
		config: promocionesController.getPromociones
	},
	{
		method: 'GET',
		path: '/promociones/searchbyid/{_id}',
		config: promocionesController.getPromocionId
	},
	{
		method: 'GET',
		path: '/promociones/searchbyidProductos/{idProductos}',
		config: promocionesController.getPromocionProductos
	},
	{
		method: 'GET',
		path: '/promociones/searchbydescuento/{descuento}',
		config: promocionesController.getPromocionDescuento
	},
	{
		method: 'GET',
		path: '/promociones/searchbyname/{nombre}',
		config: promocionesController.getPromocionName
	},
	{
		method: 'GET',
		path: '/promociones/searchbyHora_Inicio/{hora_inicio}',
		config: promocionesController.getPromocionHora_Inicio
	},
	{
		method: 'GET',
		path: '/promociones/searchbyHora_Final/{hora_final}',
		config: promocionesController.getPromocionHora_Final
	},
	{
		method: 'PUT',
		path: '/promociones/update/{_id}',
		config: promocionesController.modifyPromocion

	},
	{
		method: 'DELETE',
		path: '/promociones/delete/{_id}',
		config: promocionesController.deletePromocion
	},
	{
		method: 'POST',
		path: '/promociones/create',
		config: promocionesController.createPromocion
	},
	{
		method: 'GET',
		path: '/proveedores',
		config: proveedorController.getProveedores
	},
	{
		method: 'GET',
		path: '/proveedor/searchbyid/{_id}',
		config: proveedorController.getProveedorId
	},
	{
		method: 'GET',
		path: '/proveedor/searchbyidInsumo/{idInsumo}',
		config: proveedorController.getProveedorInsumos
	},
	{
		method: 'GET',
		path: '/proveedor/searchbyidBebidas/{idBebidas}',
		config: proveedorController.getProveedorBebidas
	},
	{
		method: 'GET',
		path: '/proveedor/searchbyname/{nombre}',
		config: proveedorController.getProveedorName
	},
	{
		method: 'GET',
		path: '/proveedor/searchbyContacto/{contacto}',
		config: proveedorController.getProveedorContacto
	},
	{
		method: 'PUT',
		path: '/proveedor/update/{_id}',
		config: proveedorController.modifyProveedor

	},
	{
		method: 'DELETE',
		path: '/proveedor/delete/{_id}',
		config: proveedorController.deleteProveedor
	},
	{
		method: 'POST',
		path: '/proveedor/create',
		config: proveedorController.createProveedor
	},
	{
		method: 'GET',
		path: '/usuarios',
		config: usuariosController.getUsuarios
	},
	{
		method: 'GET',
		path: '/usuarios/searchbyid/{_id}',
		config: usuariosController.getUsuarioId
	},
	{
		method: 'GET',
		path: '/usuarios/searchbyidPersonal/{IdPersonal}',
		config: usuariosController.getUsuarioIdPersonal
	},
	{
		method: 'GET',
		path: '/usuarios/searchbyidOrdenes/{idOrdenes}',
		config: usuariosController.getUsuarioIdOrdenes
	},
	{
		method: 'GET',
		path: '/usuarios/searchbyname/{nombre}',
		config: usuariosController.getUsuarioName
	},
	{
		method: 'PUT',
		path: '/usuarios/update/{_id}',
		config: usuariosController.modifyUsuario

	},
	{
		method: 'DELETE',
		path: '/usuarios/delete/{_id}',
		config: usuariosController.deleteUsuario
	},
	{
		method: 'POST',
		path: '/usuarios/create',
		config: usuariosController.createUsuario
	},
	{
		method: 'POST',
		path: '/register',
		config: usuariosController.createUsuario
	},
	{
		method: 'POST',
		path: '/login',
		config: authenticationController.login
	},
	{
		method: 'GET',
		path: '/logout',
		config: authenticationController.logout
	},
	{
		method: 'GET',
		path: '/productosinsumos',
		config: productosinsumosController.getProductosInsumos
	},
	{
		method: 'GET',
		path: '/productosinsumos/searchbyid/{_id}',
		config: productosinsumosController.getProductoInsumoId
	},
	{
		method: 'GET',
		path: '/productosinsumos/searchbyidProducto/{idProducto}',
		config: productosinsumosController.getPoductoInsumoProducto
	},
	{
		method: 'GET',
		path: '/productosinsumos/searchbyidInsumo/{idInsumo}',
		config: productosinsumosController.getPoductoInsumoInsumo
	},
	{
		method: 'PUT',
		path: '/productosinsumos/update/{_id}',
		config: productosinsumosController.modifyProductoInsumo

	},
	{
		method: 'DELETE',
		path: '/productosinsumos/delete/{_id}',
		config: productosinsumosController.deleteProductoInsumo
	},
	{
		method: 'POST',
		path: '/productosinsumos/create',
		config: productosinsumosController.createProductoInsumo
	},//aqui termina producto insumo
	{
		method: 'GET',
		path: '/productosordenes',
		config: productosordenesController.getProductosOrdenes
	},
	{
		method: 'GET',
		path: '/productosordenes/searchbyid/{_id}',
		config: productosordenesController.getProductoOrdenId
	},
	{
		method: 'GET',
		path: '/productosordenes/searchbyidProducto/{idProducto}',
		config: productosordenesController.getProductoOrdenProducto
	},
	{
		method: 'GET',
		path: '/productosordenes/searchbyidOrden/{idOrden}',
		config: productosordenesController.getProductoOrdenOrden
	},
	{
		method: 'PUT',
		path: '/productosordenes/update/{_id}',
		config: productosordenesController.modifyProductoOrden

	},
	{
		method: 'DELETE',
		path: '/productosordenes/delete/{_id}',
		config: productosordenesController.deleteProductoOrden
	},
	{
		method: 'POST',
		path: '/productosordenes/create',
		config: productosordenesController.createProductoOrden
	},//aqui termina producto orden
	{
		method: 'GET',
		path: '/combosproductos',
		config: combosproductosController.getCombosProductos
	},
	{
		method: 'GET',
		path: '/combosproductos/searchbyid/{_id}',
		config: combosproductosController.getComboProductoId
	},
	{
		method: 'GET',
		path: '/combosproductos/searchbyidProducto/{idProducto}',
		config: combosproductosController.getComboProductoProducto
	},
	{
		method: 'GET',
		path: '/combosproductos/searchbyidOrden/{idCombo}',
		config: combosproductosController.getComboProductoCombo
	},
	{
		method: 'PUT',
		path: '/combosproductos/update/{_id}',
		config: combosproductosController.modifyComboProducto

	},
	{
		method: 'DELETE',
		path: '/combosproductos/delete/{_id}',
		config: combosproductosController.deleteComboProducto
	},
	{
		method: 'POST',
		path: '/combosproductos/create',
		config: combosproductosController.createComboProducto
	},//aqui termina combo producto
	{
		method: 'GET',
		path: '/ordenesbebidas',
		config: ordenesbebidasController.getOrdenesBebidas
	},
	{
		method: 'GET',
		path: '/ordenesbebidas/searchbyid/{_id}',
		config: ordenesbebidasController.getOrdenBebidaId
	},
	{
		method: 'GET',
		path: '/ordenesbebidas/searchbyidOrden/{idOrden}',
		config: ordenesbebidasController.getOrdenBebidaOrden
	},
	{
		method: 'GET',
		path: '/ordenesbebidas/searchbyidBebida/{idBebida}',
		config: ordenesbebidasController.getOrdenBebidaBebida
	},
	{
		method: 'PUT',
		path: '/ordenesbebidas/update/{_id}',
		config: ordenesbebidasController.modifyOrdenBebida

	},
	{
		method: 'DELETE',
		path: '/ordenesbebidas/delete/{_id}',
		config: ordenesbebidasController.deleteOrdenBebida
	},
	{
		method: 'POST',
		path: '/ordenesbebidas/create',
		config: ordenesbebidasController.createOrdenBebida
	},//aqui termina orden bebida
	{
		method: 'GET',
		path: '/ordenescombos',
		config: ordenescombosController.getOrdenesCombos
	},
	{
		method: 'GET',
		path: '/ordenescombos/searchbyid/{_id}',
		config: ordenescombosController.getOrdenComboId
	},
	{
		method: 'GET',
		path: '/ordenescombos/searchbyidOrden/{idOrden}',
		config: ordenescombosController.getOrdenComboOrden
	},
	{
		method: 'GET',
		path: '/ordenescombos/searchbyidCombo/{idCombo}',
		config: ordenescombosController.getOrdenComboCombo
	},
	{
		method: 'PUT',
		path: '/ordenescombos/update/{_id}',
		config: ordenescombosController.modifyOrdenCombo

	},
	{
		method: 'DELETE',
		path: '/ordenescombos/delete/{_id}',
		config: ordenescombosController.deleteOrdenCombo
	},
	{
		method: 'POST',
		path: '/ordenescombos/create',
		config: ordenescombosController.createOrdenCombo
	},//aqui termina orden combo
	{
		method: 'GET',
		path: '/cuentasordenes',
		config: cuentasordenesController.getCuentaOrden
	},
	{
		method: 'GET',
		path: '/cuentasordenes/searchbyid/{_id}',
		config: cuentasordenesController.getCuentaOrdenId
	},
	{
		method: 'GET',
		path: '/cuentasordenes/searchbyidOrden/{idOrden}',
		config: cuentasordenesController.getCuentaOrdenOrden
	},
	{
		method: 'GET',
		path: '/cuentasordenes/searchbyidCuenta/{idCuenta}',
		config: cuentasordenesController.getCuentaOrdenCuenta
	},
	{
		method: 'PUT',
		path: '/cuentasordenes/update/{_id}',
		config: cuentasordenesController.modifyCuentaOrden

	},
	{
		method: 'DELETE',
		path: '/cuentasordenes/delete/{_id}',
		config: cuentasordenesController.deleteCuentaOrden
	},
	{
		method: 'POST',
		path: '/cuentasordenes/create',
		config: cuentasordenesController.createCuentaOrden
	},//aqui termina cuenta orden
	{
		method: 'GET',
		path: '/cuentas',
		config: cuentasController.getCuentas
	},
	{
		method: 'GET',
		path: '/cuentas/searchbyid/{_id}',
		config: cuentasController.getCuentaId
	},
	{
		method: 'PUT',
		path: '/cuentas/update/{_id}',
		config: cuentasController.modifyCuenta

	},
	{
		method: 'DELETE',
		path: '/cuentas/delete/{_id}',
		config: cuentasController.deleteCuenta
	},
	{
		method: 'POST',
		path: '/cuentas/create',
		config: cuentasController.createCuenta
	},//aqui termina cuenta 
	{
		method: 'GET',
		path: '/insumosproveedores',
		config: insumosproveedoresController.getInsumosProveedores
	},
	{
		method: 'GET',
		path: '/insumosproveedores/searchbyid/{_id}',
		config: insumosproveedoresController.getInsumoProveedorId
	},
	{
		method: 'GET',
		path: '/insumosproveedores/searchbyidInsumo/{idInsumo}',
		config: insumosproveedoresController.getInsumoProveedorInsumo
	},
	{
		method: 'GET',
		path: '/insumosproveedores/searchbyidProveedor/{idProveedor}',
		config: insumosproveedoresController.getInsumoProveedorProveedor
	},
	{
		method: 'PUT',
		path: '/insumosproveedores/update/{_id}',
		config: insumosproveedoresController.modifyInsumoProveedor

	},
	{
		method: 'DELETE',
		path: '/insumosproveedores/delete/{_id}',
		config: insumosproveedoresController.deleteInsumoProveedor
	},
	{
		method: 'POST',
		path: '/insumosproveedores/create',
		config: insumosproveedoresController.createInsumoProveedor
	},//aqui termina cuenta orden
	{
		method: 'GET',
		path: '/mesasempleados',
		config: mesasempleadosController.getMesasEmpleados
	},
	{
		method: 'GET',
		path: '/mesasempleados/searchbyid/{_id}',
		config: mesasempleadosController.getMesaEmpleadoId
	},
	{
		method: 'GET',
		path: '/mesasempleados/searchbyidMesa/{idMesa}',
		config: mesasempleadosController.getMesaEmpleadoMesa
	},
	{
		method: 'GET',
		path: '/mesasempleados/searchbyidEmpleado/{idEmpleado}',
		config: mesasempleadosController.getMesaEmpleadoEmpleado
	},
	{
		method: 'PUT',
		path: '/mesasempleados/update/{_id}',
		config: mesasempleadosController.modifyMesaEmpleado

	},
	{
		method: 'DELETE',
		path: '/mesasempleados/delete/{_id}',
		config: mesasempleadosController.deleteMesaEmpleado
	},
	{
		method: 'POST',
		path: '/mesasempleados/create',
		config: mesasempleadosController.createMesaEmpleado
	},//aqui termina mesa empleado
	{
		method: 'GET',
		path: '/combosbebidas',
		config: combosbebidasController.getCombosBebidas
	},
	{
		method: 'GET',
		path: '/combosbebidas/searchbyid/{_id}',
		config: combosbebidasController.getComboBebidaId
	},
	{
		method: 'GET',
		path: '/combosbebidas/searchbyidCombo/{idCombo}',
		config: combosbebidasController.getComboBebidaCombo
	},
	{
		method: 'GET',
		path: '/combosbebidas/searchbyidBebida/{idBebida}',
		config: combosbebidasController.getComboBebidaBebida
	},
	{
		method: 'PUT',
		path: '/combosbebidas/update/{_id}',
		config: combosbebidasController.modifyComboBebida

	},
	{
		method: 'DELETE',
		path: '/combosbebidas/delete/{_id}',
		config: combosbebidasController.deleteComboBebida
	},
	{
		method: 'POST',
		path: '/combosbebidas/create',
		config: combosbebidasController.createComboBebida
	},//aqui termina combo bebida

];
