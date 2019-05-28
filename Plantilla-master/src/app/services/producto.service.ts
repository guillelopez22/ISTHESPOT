import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../Models/ProductoModel';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllProductos(){
    return this.http.get<ProductoModel[]>(this.baseurl + 'productos');
  }

  getProductoById(id: string){
    return this.http.get<ProductoModel>(this.baseurl + 'productos/searchbyid/' + id);
  }

  addProducto(producto: ProductoModel){
    return this.http.post(this.baseurl + 'productos/create', producto, {responseType: 'text'});
  }

  deleteProducto(id: string){
    return this.http.delete(this.baseurl + 'productos/delete/' + id, {responseType: 'text'});
  }

  updateProducto(producto: ProductoModel){
    return this.http.put(this.baseurl + 'productos/update/' + producto._id, producto, {responseType: 'text'});
  }
}