import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto_Elaborado_DetailModel } from '../Models/Producto_Elaborado_DetailModel';

@Injectable({
  providedIn: 'root'
})
export class Producto_Elaborado_DetailService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllProductos_Elaborados_Detail(){
    return this.http.get<Producto_Elaborado_DetailModel[]>(this.baseurl + 'prod_elaborado_detail');
  }

  getProducto_Elaborado_DetailById(id: string){
    return this.http.get<Producto_Elaborado_DetailModel>(this.baseurl + 'prod_elaborado_detail/searchbyid/' + id);
  }

  addProducto_Elaborado_Detail(producto_elaborado: Producto_Elaborado_DetailModel){
    return this.http.post(this.baseurl + 'prod_elaborado_detail/create', producto_elaborado, {responseType: 'text'});
  }

  deleteProducto_Elaborado_Detail(id: string){
    return this.http.delete(this.baseurl + 'prod_elaborado_detail/delete/' + id, {responseType: 'text'});
  }

  updateProducto_Elaborado_Detail(producto: Producto_Elaborado_DetailModel){
    return this.http.put(this.baseurl + 'prod_elaborado_detail/update/' + producto._id, producto, {responseType: 'text'});
  }
}