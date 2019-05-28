import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BebidaModel } from '../Models/BebidaModel';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllBebidas(){
    return this.http.get<BebidaModel[]>(this.baseurl + 'bebidas');
  }

  getBebidaById(id: string){
    return this.http.get<BebidaModel>(this.baseurl + 'bebidas/searchbyid/' + id);
  }

  addBebida(bebida: BebidaModel){
    return this.http.post(this.baseurl + 'bebidas/create', bebida, {responseType: 'text'});
  }

  deleteBebida(id: string){
    return this.http.delete(this.baseurl + 'bebidas/delete/' + id, {responseType: 'text'});
  }

  updateBebida(bebida: BebidaModel){
    return this.http.put(this.baseurl + 'bebidas/update/' + bebida._id, bebida, {responseType: 'text'});
  }
}