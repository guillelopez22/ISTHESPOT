
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
<<<<<<< HEAD
//users
import { ListUsuarioComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';
=======
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';
>>>>>>> ¨aaaa¨

const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
<<<<<<< HEAD
  { path: 'add-usuario',component: AddUsuarioComponent},
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: '', component: ListBebidasComponent, pathMatch: 'full' },
  { path: '', component: ListUsuarioComponent, pathMatch: 'full' }
=======
  { path: 'list-bebida', component: ListBebidasComponent, pathMatch: 'full' },
  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: 'list-ingrediente', component: ListIngredientesComponent, pathMatch: 'full' }
>>>>>>> ¨aaaa¨
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
