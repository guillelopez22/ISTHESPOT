    
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
    ListProductoComponent,
    AddProductoComponent,
    EditProductoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BebidaService,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }