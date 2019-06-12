
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
//productos elaborados
import { ListProductos_ElaboradosComponent } from './components/productos_elaborados/list/list-productos_elaborados.component';
import { AddProducto_ElaboradoComponent } from './components/productos_elaborados/add/add-producto_elaborado.component';
import {EditProducto_ElaboradoComponent} from './components/productos_elaborados/edit/edit-producto_elaborado.component';
//productos elaborados detallados
import { ListProductos_Elaborados_DetailComponent } from './components/productos_elaborados_detail/list/list-productos_elaborados_detail.component';
import { AddProducto_Elaborado_DetailComponent } from './components/productos_elaborados_detail/add/add-producto_elaborado_detail.component';
import {EditProducto_Elaborado_DetailComponent} from './components/productos_elaborados_detail/edit/edit-producto_elaborado_detail.component';
//Mesas
import { ListMesasComponent } from './components/mesas/list/list-mesas.component';
import { AddMesaComponent } from './components/mesas/add/add-mesa.component';
import { EditMesaComponent } from './components/mesas/edit/edit-mesa.component';

const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
  { path: 'list-bebida', component: ListBebidasComponent, pathMatch: 'full' },
  { path: 'add-usuario', component: AddUsuarioComponent },
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: 'list-usuario', component: ListUsuariosComponent, pathMatch: 'full' },
  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: 'list-ingrediente', component: ListIngredientesComponent, pathMatch: 'full' },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'edit-producto', component: EditProductoComponent},
  { path: 'list-producto', component: ListProductosComponent, pathMatch: 'full' },
  { path: 'add-proveedor', component: AddProveedorComponent },
  { path: 'edit-proveedor', component: EditProveedorComponent},
  { path: 'list-proveedor', component: ListProveedoresComponent, pathMatch: 'full' },
  { path: 'edit-producto_elaborado', component: EditProducto_ElaboradoComponent},
  { path: 'list-producto_elaborado', component: ListProductos_ElaboradosComponent, pathMatch: 'full' },
  { path: 'add-producto_elaborado', component: AddProducto_ElaboradoComponent },
  { path: 'edit-producto_elaborado_detail', component: EditProducto_Elaborado_DetailComponent},
  { path: 'list-producto_elaborado_detail', component: ListProductos_Elaborados_DetailComponent, pathMatch: 'full' },
  { path: 'add-producto_elaborado_detail', component: AddProducto_Elaborado_DetailComponent },
  { path: 'add-mesa', component: AddMesaComponent },
  { path: 'edit-mesa', component: EditMesaComponent},
  { path: 'list-mesa', component: ListMesasComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }