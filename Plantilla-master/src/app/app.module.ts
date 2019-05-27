    
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
import { ListUsuarioComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';

import { IngredienteService } from './services/ingrediente.service';
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';

import { IngredienteService } from './services/ingrediente.service';
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBebidasComponent,
    AddBebidaComponent,
    EditBebidaComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ListUsuarioComponent,
    AddUsuarioComponent,
    EditUsuarioComponent
=======
    ListIngredientesComponent,
    AddIngredienteComponent,
    EditIngredienteComponent
>>>>>>> ¨aaaa¨
=======
    ListIngredientesComponent,
    AddIngredienteComponent,
    EditIngredienteComponent
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
>>>>>>> 763e3d1b0b65a5aa5cc9bd96eb4ebed43feda32d
>>>>>>> 7ba15ff972004aa7c5ad92d1f2451407b3cc2780
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
<<<<<<< HEAD
  providers: [BebidaService, UsuarioService],
=======
  providers: [BebidaService,IngredienteService],
>>>>>>> ¨aaaa¨
=======
  providers: [BebidaService,IngredienteService],
<<<<<<< HEAD
>>>>>>> ¨aaaa¨
=======
>>>>>>> 763e3d1b0b65a5aa5cc9bd96eb4ebed43feda32d
>>>>>>> 7ba15ff972004aa7c5ad92d1f2451407b3cc2780
  bootstrap: [AppComponent]
})
export class AppModule { }