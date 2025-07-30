import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proyecto } from '../models/proyecto';

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

  getProyectosAgrupados(): Observable<any[]> {
    return this.getProyectos().pipe(
      map((data) => {
        // Mapeo los proyectos
        const proyectos = data.map((proyecto: any) => ({
          id: proyecto.id,
          title: proyecto.acf?.nombre,
          image: proyecto.acf?.imagen,
          description: proyecto.acf?.descripcion,
          tecnologias: proyecto.acf?.tecnologia?.map((tec: any) => tec.name),
          repositorio: proyecto.acf?.repositorio,
          grupo: proyecto.acf?.['grupo-proyecto']?.name,
          slug: proyecto.slug
        }));

        // Agrupo por 'grupo'
        const grupos: { [key: string]: Proyecto[] } = {};
        proyectos.forEach((proy: Proyecto) => {
          const grupo = proy.grupo || 'Sin grupo';
          if (!grupos[grupo]) {
            grupos[grupo] = [];
          }
          grupos[grupo].push(proy);
        });

        // Armo el array final
        return Object.entries(grupos).map(([nombre, proyectos]) => ({
          nombre,
          proyectos
        }));
      })
    );
  }
}
