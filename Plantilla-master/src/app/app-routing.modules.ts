
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';

const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
  { path: '', component: ListBebidasComponent, pathMatch: 'full' }
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
