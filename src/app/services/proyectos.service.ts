import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressPost } from '../models/wordpress-post';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl: string = 'http://localhost:8881/wp-json/wp/v2/proyectos?acf_format=standard'

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<any[]> {
    let respuesta = this.http.get<any[]>(`${this.baseUrl}`);
    return respuesta
  }
  
}
