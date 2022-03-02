import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  getAbonne(){
    return this.http.get(`${this.baseURL}/api/abonnes`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })})
  }
  addAbon(data:any){
    return this.http.post(`${this.baseURL}/api/abonnes`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  deleteAbon(id:any){
    return this.http.delete(`${this.baseURL}/api/abonnes/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
}
