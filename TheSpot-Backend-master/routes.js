var bebidasController = require('./controllers/bebidasController');
var combosController = require('./controllers/combosController');
var facturasController = require('./controllers/facturasController');
var insumosController = require('./controllers/insumosController');
var mesasController = require('./controllers/mesasController');
var ordenesController = require('./controllers/ordenesController');
var personalController = require('./controllers/personalController');
var prod_elaborado_detailController = require('./controllers/prod_elaborado_detailController');
var productos_elaboradosController = require('./controllers/productos_elaboradosController');
var productosController = require('./controllers/productosController');
var promocionesController = require('./controllers/promocionesController');
var proveedorController = require('./controllers/proveedorController');
var usuariosController = require('./controllers/usuariosController');
var authenticationController = require('./controllers/authenticationController');
exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config:{
			handler:function(request, reply){
				console.log(request.query);
				return reply('Hola');
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
			path: '/ordenes/searchbyidCombos/{idCombos}',
			config: ordenesController.getOrdenesIdCombos
 	},
	{
			method: 'GET',
			path: '/ordenes/searchbyidProductos/{idProductos}',
			config: ordenesController.getOrdenesProductos
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
			method: 'GET',
			path: '/ordenes/searchPersonal/{idPersonal}',
			config: ordenesController.getOrdenPersonal
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
		 	path: '/prod_elaborado_detail',
		 	config: prod_elaborado_detailController.getProd_elaborado_details
 	},
	{
			method: 'GET',
			path: '/prod_elaborado_detail/searchbyid/{_id}',
			config: prod_elaborado_detailController.getProd_elaborado_detailId
 	},
	{
			method: 'GET',
			path: '/prod_elaborado_detail/searchbyidElaborado/{idProducto_Elaborado}',
			config: prod_elaborado_detailController.getProd_elaborado_detailIdElaborado
 	},
	{
			method: 'GET',
			path: '/prod_elaborado_detail/searchbyidBebida/{idBebida}',
			config: prod_elaborado_detailController.getProd_elaborado_detailIdBebida
 	},
	{
			method: 'GET',
			path: '/prod_elaborado_detail/searchbyidInsumo/{idInsumo}',
			config: prod_elaborado_detailController.getProd_elaborado_detailIdInsumo
 	},
 	{
 			method: 'PUT',
 			path: '/prod_elaborado_detail/update/{_id}',
 			config: prod_elaborado_detailController.modifyProd_elaborado_detail

 	},
	{
			method: 'DELETE',
			path: '/prod_elaborado_detail/delete/{_id}',
			config: prod_elaborado_detailController.deleteProd_elaborado_detail
 	},
	{
			method: 'POST',
			path: '/prod_elaborado_detail/create',
			config: prod_elaborado_detailController.createProd_elaborado_detail
 	},
	{
			method: 'GET',
		 	path: '/productos_elaborados',
		 	config: productos_elaboradosController.getProductos_elaborados
 	},
	{
			method: 'GET',
			path: '/productos_elaborados/searchbyid/{_id}',
			config: productos_elaboradosController.getProductos_elaboradoId
 	},
	{
			method: 'GET',
			path: '/productos_elaborados/searchbyProducto_Elaborado_Detail/{tipo}',
			config: productos_elaboradosController.getIdProducto_Elaborado_Tipo
 	},
	{
			method: 'GET',
			path: '/productos_elaborados/searchbyPod_Details/{idProducto_Elaborado_Detail}',
			config: productos_elaboradosController.getIdProducto_Elaborado_Detail
 	},
 	{
 			method: 'PUT',
 			path: '/productos_elaborados/update/{_id}',
 			config: productos_elaboradosController.modifyProductos_elaborado

 	},
	{
			method: 'DELETE',
			path: '/productos_elaborados/delete/{_id}',
			config: productos_elaboradosController.deleteProducto_elaborado
 	},
	{
			method: 'POST',
			path: '/productos_elaborados/create',
			config: productos_elaboradosController.createProducto_elaborado
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
			path: '/productos/searchbyBebida/{idBebida}',
			config: productosController.getProductoIdBebida
 	},
	{
			method: 'GET',
			path: '/productos/searchbyProd_Elaborado/{idProducto_Elaborado}',
			config: productosController.getProductoidProducto_Elaborado
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
	{method: 'POST',
	 path: '/login',
	 config: authenticationController.login
 },
	{
		method: 'GET',
		path: '/logout',
		config: authenticationController.logout
	}

];
