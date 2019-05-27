    
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

@NgModule({
  declarations: [
    AppComponent,
    ListBebidasComponent,
    AddBebidaComponent,
    EditBebidaComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    EditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BebidaService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }