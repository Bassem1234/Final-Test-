import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  addUser(data:any){
    return this.http.post(`${this.baseURL}/api/users`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  deleteUser(id:any){
    return this.http.delete(`${this.baseURL}/api/users/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  getUsers(){
    return this.http.get(`${this.baseURL}/api/users`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
}
