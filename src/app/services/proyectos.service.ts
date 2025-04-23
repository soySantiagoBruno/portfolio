import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl: string = 'http://localhost:8881/wp-json/wp/v2'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`)
  }
  
}
