import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngredienteModel } from '../Models/IngredienteModel';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllIngredientes(){
    return this.http.get<IngredienteModel[]>(this.baseurl + 'insumos');
  }

  getIngredienteById(id: string){
    return this.http.get<IngredienteModel>(this.baseurl + 'insumos/searchbyid/' + id);
  }

  addIngrediente(ingrediente: IngredienteModel){
    return this.http.post(this.baseurl + 'insumos/create', ingrediente, {responseType: 'text'});
  }

  deleteIngrediente(id: string){
    return this.http.delete(this.baseurl + 'insumos/delete/' + id, {responseType: 'text'});
  }

  updateIngrediente(ingrediente: IngredienteModel){
    return this.http.put(this.baseurl + 'insumos/update/' + ingrediente._id, ingrediente, {responseType: 'text'});
  }
}