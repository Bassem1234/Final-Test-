import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  getCategories(){
    return this.http.get(`${this.baseURL}/api/categories/`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  addCategory(data:any){
    return this.http.post(`${this.baseURL}/api/categories/`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  getCategory(id:any){
    return this.http.get(`${this.baseURL}/api/categories/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
  deleteCategory(id:any){
    return this.http.delete(`${this.baseURL}/api/categories/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token') || ''
      })});
  }
}
