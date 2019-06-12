import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MesaModel } from '../Models/MesaModel';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllMesas(){
    return this.http.get<MesaModel[]>(this.baseurl + 'mesas');
  }

  getMesaById(id: String){
    return this.http.get<MesaModel>(this.baseurl + 'mesas/searchbyid/' + id);
  }

  addMesa(mesas: MesaModel){
    return this.http.post(this.baseurl + 'mesas/create', mesas, {responseType: 'text'});
  }

  deleteMesa(_id: string){
    return this.http.delete(this.baseurl + 'mesas/delete/' + _id, {responseType: 'text'});
  }

  updateMesa(mesa: MesaModel){
    return this.http.put(this.baseurl + 'mesas/update/' + mesa._id, mesa, {responseType: 'text'});
  }
}