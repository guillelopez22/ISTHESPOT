
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
import { ListProductoComponent } from './components/productos/list/list-productos.component';
import { AddProductoComponent } from './components/productos/add/add-producto.component';
import { EditProductoComponent } from './components/productos/edit/edit-producto.component';


const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
  { path: 'list-bebida', component: ListBebidasComponent, pathMatch: 'full' },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'edit-producto', component: EditProductoComponent},
  { path: 'list-producto', component: ListProductoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }