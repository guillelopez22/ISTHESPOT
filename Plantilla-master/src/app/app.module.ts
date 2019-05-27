
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
<<<<<<< HEAD
//users
import { UsuarioService } from './services/usuario.service';
import { ListUsuarioComponent } from './components/usuarios/list/list-usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add/add-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit/edit-usuario.component';

import { IngredienteService } from './services/ingrediente.service';
import { ListIngredientesComponent } from './components/ingredientes/list/list-ingredientes.component';
import { AddIngredienteComponent } from './components/ingredientes/add/add-ingrediente.component';
import { EditIngredienteComponent } from './components/ingredientes/edit/edit-ingrediente.component';


=======
>>>>>>> 9b3e3a54a9895e35622246992fc114ed96e84ed4
import { ListProductoComponent } from './components/productos/list/list-productos.component';
import { AddProductoComponent } from './components/productos/add/add-producto.component';
import { EditProductoComponent } from './components/productos/edit/edit-producto.component';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListBebidasComponent,
    AddBebidaComponent,
    EditBebidaComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    AddIngredienteComponent,
    EditIngredienteComponent,
    ListIngredientesComponent,
    ListProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [BebidaService, UsuarioService, IngredienteService, ProductoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
