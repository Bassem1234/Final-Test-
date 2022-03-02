import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  register(userData:any){
    return this.http.post(`${this.baseURL}/api/register`, userData);
  }
}
