import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  downloadFile(data:any, id:any) {
		return this.http.post(`${this.baseURL}/api/download/${id}`, data, {
      responseType: 'blob',
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('token') || ''
        })});
  } 
}
