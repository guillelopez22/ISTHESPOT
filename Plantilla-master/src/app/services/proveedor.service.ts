import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProveedorModel } from '../Models/ProveedorModel';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllProveedores(){
    return this.http.get<ProveedorModel[]>(this.baseurl + 'proveedores');
  }

  getProveedorById(id: string){
    return this.http.get<ProveedorModel>(this.baseurl + 'proveedor/searchbyid/' + id);
  }

  addProveedor(proveedor: ProveedorModel){
    return this.http.post(this.baseurl + 'proveedor/create', proveedor, {responseType: 'text'});
  }

  deleteProveedor(id: string){
    return this.http.delete(this.baseurl + 'proveedor/delete/' + id, {responseType: 'text'});
  }

  updateProveedor(proveedor: ProveedorModel){
    return this.http.put(this.baseurl + 'proveedor/update/' + proveedor._id, proveedor, {responseType: 'text'});
  }
}