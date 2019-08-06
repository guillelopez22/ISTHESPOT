import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromocionModel } from '../Models/PromocionModel';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8000/";

  getAllPromociones(){
    return this.http.get<PromocionModel[]>(this.baseurl + 'promociones');
  }

  getPromocionById(id: string){
    return this.http.get<PromocionModel>(this.baseurl + 'promociones/searchbyid/' + id);
  }

  addPromocion(promocion: PromocionModel){
    return this.http.post(this.baseurl + 'promociones/create', promocion, {responseType: 'text'});
  }

  deletePromocion(id: string){
    return this.http.delete(this.baseurl + 'promociones/delete/' + id, {responseType: 'text'});
  }

  updatePromocion(promocion: PromocionModel){
    return this.http.put(this.baseurl + 'promociones/update/' + promocion._id, promocion, {responseType: 'text'});
  }
}