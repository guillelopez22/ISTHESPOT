    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BebidaService } from './services/bebida.service';
import { ListBebidasComponent } from './components/bebidas/list/list-bebidas.component';
import { AddBebidaComponent } from './components/bebidas/add/add-bebida.component';
import { EditBebidaComponent } from './components/bebidas/edit/edit-bebida.component';

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
    ListIngredientesComponent,
    AddIngredienteComponent,
    EditIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BebidaService,IngredienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }