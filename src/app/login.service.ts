import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  login(data:any){
    return this.http.post(`${this.baseURL}/api/login`, data);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
}
