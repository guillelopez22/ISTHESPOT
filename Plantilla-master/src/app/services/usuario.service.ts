import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllUsuarios(){
    return this.http.get<UserModel[]>(this.baseurl + 'usuarios');
  }

  getUsuarioById(id: string){
    return this.http.get<UserModel>(this.baseurl + 'usuarios/searchbyid/' + id);
  }

  addUsuario(usuario: UserModel){
    return this.http.post(this.baseurl + 'usuarios/create', usuario, {responseType: 'text'});
  }

  deleteUsuario(id: string){
    return this.http.delete(this.baseurl + 'usuarios/delete/' + id, {responseType: 'text'});
  }

  updateUsuario(usuario:UserModel){
    return this.http.put(this.baseurl + 'usuarios/update/' + usuario._id, usuario, {responseType: 'text'});
  }
}