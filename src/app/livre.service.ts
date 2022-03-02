import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  addLivre(data: any, name:string) {
    return this.http.post(`${this.baseURL}/api/livres/${name}`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  getLivres(){
    return this.http.get(`${this.baseURL}/api/livres`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  deleteLivre(id:any, catName:any){
    return this.http.delete(`${this.baseURL}/api/livres/${id}/${catName}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
}
