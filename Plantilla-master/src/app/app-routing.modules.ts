
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//bebidas
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
//users
import { ListUsuariosComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';
//ingredientes
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';
//productos
import { ListProductosComponent } from './components/productos/list/list-productos.component';
import { AddProductoComponent } from './components/productos/add/add-producto.component';
import { EditProductoComponent } from './components/productos/edit/edit-producto.component';
//proveedores
import { ListProveedoresComponent } from './components/proveedores/list/list-proveedores.component';
import { AddProveedorComponent } from './components/proveedores/add/add-proveedor.component';
import { EditProveedorComponent } from './components/proveedores/edit/edit-proveedor.component';
//productos_elaborados
import { ListProductos_ElaboradosComponent } from './components/productos_elaborados/list/list-productos_elaborados.component';
import { AddProducto_ElaboradoComponent } from './components/productos_elaborados/add/add-producto_elaborado.component';
import { EditProducto_ElaboradoComponent } from './components/productos_elaborados/edit/edit-producto_elaborado.component';
//productos elaborados detallados
import { ListProductos_Elaborados_DetailComponent } from './components/productos_elaborados_detail/list/list-productos_elaborados_detail.component';
import { AddProducto_Elaborado_DetailComponent } from './components/productos_elaborados_detail/add/add-producto_elaborado_detail.component';
import {EditProducto_Elaborado_DetailComponent} from './components/productos_elaborados_detail/edit/edit-producto_elaborado_detail.component';
//promociones
import { ListPromocionesComponent } from './components/promociones/list/list-promociones.component';
import { AddPromocionComponent } from './components/promociones/add/add-promocion.component';
import {EditPromocionComponent} from './components/promociones/edit/edit-promocion.component';



const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
  { path: 'add-usuario',component: AddUsuarioComponent},
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: '', component: ListBebidasComponent, pathMatch: 'full' },
  { path: '', component: ListUsuariosComponent, pathMatch: 'full' },
  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: '', component: ListIngredientesComponent, pathMatch: 'full' },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'edit-producto', component: EditProductoComponent},
  { path: '', component: ListProductosComponent, pathMatch: 'full' },
  { path: 'add-proveedor', component: AddProveedorComponent },
  { path: 'edit-proveedor', component: EditProveedorComponent},
  { path: '', component: ListProveedoresComponent, pathMatch: 'full' },
  { path: 'add-producto_elaborado', component: AddProducto_ElaboradoComponent },
  { path: 'edit-producto_elaborado', component: EditProducto_ElaboradoComponent},
  { path: '', component: ListProductos_ElaboradosComponent, pathMatch: 'full' },
  { path: 'edit-producto_elaborado_detail', component: EditProducto_Elaborado_DetailComponent},
  { path: '', component: ListProductos_Elaborados_DetailComponent, pathMatch: 'full' },
  { path: 'add-producto_elaborado_detail', component: AddProducto_Elaborado_DetailComponent },
  { path: 'add-promocion', component: AddPromocionComponent },
  { path: 'edit-promocion', component: EditPromocionComponent},
  { path: '', component: ListPromocionesComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import {NgModule} from '@angular/core'
// import {Routes, RouterModule} from '@angular/router'
// import {UsuarioCrudsComponent} from './usuario-cruds/usuario-cruds.component'
// import {BebidasCrudsComponent} from './bebidas-cruds/bebidas-cruds.component'
// import {ComidasCrudsComponent} from './comidas-cruds/comidas-cruds.component'
// import {IngredientesCrudsComponent} from './ingredientes-cruds/ingredientes-cruds.component'
// import {ProveedoresCrudsComponent} from './proveedores-cruds/proveedores-cruds.component'

// const routes: Routes = [
//     {path: 'usuarios', component: UsuarioCrudsComponent},
//     {path: 'bebidas', component: BebidasCrudsComponent},
//     {path: 'comidas', component: ComidasCrudsComponent},
//     {path: 'ingredientes', component: IngredientesCrudsComponent},
//     {path: 'proveedores', component: ProveedoresCrudsComponent}
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule { }
