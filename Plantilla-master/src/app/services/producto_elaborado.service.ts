import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto_ElaboradoModel } from '../Models/Producto_ElaboradoModel';

@Injectable({
  providedIn: 'root'
})
export class Producto_ElaboradoService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllProductos_Elaborados(){
    return this.http.get<Producto_ElaboradoModel[]>(this.baseurl + 'productos_elaborados');
  }

  getProducto_ElaboradoById(id: string){
    return this.http.get<Producto_ElaboradoModel>(this.baseurl + 'productos_elaborados/searchbyid/' + id);
  }

  addProducto_Elaborado(producto_elaborado: Producto_ElaboradoModel){
    return this.http.post(this.baseurl + 'productos_elaborados/create', producto_elaborado, {responseType: 'text'});
  }

  deleteProducto_Elaborado(id: string){
    return this.http.delete(this.baseurl + 'productos_elaborados/delete/' + id, {responseType: 'text'});
  }

  updateProducto_Elaborado(producto: Producto_ElaboradoModel){
    return this.http.put(this.baseurl + 'productos_elaborados/update/' + producto._id, producto, {responseType: 'text'});
  }
}