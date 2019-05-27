
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';
//users
import { ListUsuarioComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';

import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';

import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';


const routes: Routes = [
  { path: 'add-bebida', component: AddBebidaComponent },
  { path: 'edit-bebida', component: EditBebidaComponent},
  { path: 'list-bebida', component: ListBebidasComponent, pathMatch: 'full' },

  { path: 'add-usuario', component: AddUsuarioComponent },
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: 'list-usuario', component: ListUsuarioComponent, pathMatch: 'full' },

  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: 'list-ingrediente', component: ListIngredientesComponent, pathMatch: 'full' },

  { path: 'add-ingrediente', component: AddIngredienteComponent },
  { path: 'edit-ingrediente', component: EditIngredienteComponent},
  { path: 'list-ingrediente', component: ListIngredientesComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
