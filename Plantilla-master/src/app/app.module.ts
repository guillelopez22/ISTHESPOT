    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//bebidas
import { BebidaService } from './services/bebida.service';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
//users
import { UsuarioService } from './services/usuario.service';
import { ListUsuariosComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';
//ingredientes
import { IngredienteService } from './services/ingrediente.service';
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';
//productos
import { ProductoService } from './services/producto.service';
import { ListProductosComponent } from './components/productos/list/list-productos.component';
import { AddProductoComponent } from './components/productos/add/add-producto.component';
import { EditProductoComponent } from './components/productos/edit/edit-producto.component';
//proveedores
import { ProveedorService } from './services/proveedor.service';
import { ListProveedoresComponent } from './components/proveedores/list/list-proveedores.component';
import { AddProveedorComponent } from './components/proveedores/add/add-proveedor.component';
import { EditProveedorComponent } from './components/proveedores/edit/edit-proveedor.component';
//productos_elaborados
import { Producto_ElaboradoService } from './services/producto_elaborado.service';
import { ListProductos_ElaboradosComponent } from './components/productos_elaborados/list/list-productos_elaborados.component';
import { AddProducto_ElaboradoComponent } from './components/productos_elaborados/add/add-producto_elaborado.component';
import { EditProducto_ElaboradoComponent } from './components/productos_elaborados/edit/edit-producto_elaborado.component';
//productos elaborados detallados
import { Producto_Elaborado_DetailService } from './services/producto_elaborado_detail.service';
import { ListProductos_Elaborados_DetailComponent } from './components/productos_elaborados_detail/list/list-productos_elaborados_detail.component';
import { AddProducto_Elaborado_DetailComponent } from './components/productos_elaborados_detail/add/add-producto_elaborado_detail.component';
import {EditProducto_Elaborado_DetailComponent} from './components/productos_elaborados_detail/edit/edit-producto_elaborado_detail.component';
//promociones
import { PromocionService } from './services/promocion.service';
import { ListPromocionesComponent } from './components/promociones/list/list-promociones.component';
import { AddPromocionComponent } from './components/promociones/add/add-promocion.component';
import {EditPromocionComponent} from './components/promociones/edit/edit-promocion.component';
//Mesas
import { ListMesasComponent } from './components/mesas/list/list-mesas.component';
import { AddMesaComponent } from './components/mesas/add/add-mesa.component';
import { EditMesaComponent } from './components/mesas/edit/edit-mesa.component';
import { MesaService } from './services/mesa.service';


@NgModule({
  declarations: [
    AppComponent,
    ListBebidasComponent,
    AddBebidaComponent,
    EditBebidaComponent,
    ListUsuariosComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    ListIngredientesComponent,
    AddIngredienteComponent,
    EditIngredienteComponent,
    ListProductosComponent,
    AddProductoComponent,
    EditProductoComponent,
    ListProveedoresComponent,
    AddProveedorComponent,
    EditProveedorComponent,
    ListProductos_ElaboradosComponent,
    AddProducto_ElaboradoComponent,
    EditProducto_ElaboradoComponent,
    ListProductos_Elaborados_DetailComponent,
    AddProducto_Elaborado_DetailComponent,
    EditProducto_Elaborado_DetailComponent,
    ListPromocionesComponent,
    AddPromocionComponent,
    EditPromocionComponent,
    ListMesasComponent,
    AddMesaComponent,
    EditMesaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BebidaService, 
    IngredienteService, 
    UsuarioService, 
    ProductoService, 
    ProveedorService,
    Producto_ElaboradoService, 
    Producto_Elaborado_DetailService,
    PromocionService,
    MesaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }