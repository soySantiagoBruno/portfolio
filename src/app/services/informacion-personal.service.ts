import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, forkJoin, map, of } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class InformacionPersonalService {

  private apiUrl = 'http://localhost:8881/wp-json/wp/v2';

  constructor(private http: HttpClient) {}

  getInformacionPersonal(): Observable<Persona> {
  return this.http.get<any[]>(`${this.apiUrl}/informacion-personal`).pipe(
    switchMap(data => {
      if (!data || data.length === 0) {
        const defaultPersona: Persona = {
          nombre: '',
          titulo: '',
          descripcion: '',
          breveDescripcion: '',
          urlCv: '',
          email: '',
          linkedin: '',
          github: '',
          idiomas: '',
          foto: '',
          imagenPortada: '',
          tecnologiasFrontend: [],
          tecnologiasBackend: [],
          tools: []
        };
        return of(defaultPersona);
      }

      const info = data[0];
      const acf = info.acf;
      const links = info._links;

      const persona: Persona = {
        nombre: acf.nombre,
        titulo: acf.especialidad,
        descripcion: acf.descripcion,
        breveDescripcion: acf.breve_descripcion,
        urlCv: acf.cv,
        email: acf.email,
        linkedin: acf.linkedin,
        github: acf.github,
        idiomas: acf.idiomas,
        foto: '',
        imagenPortada: '',
        tecnologiasFrontend: [],
        tecnologiasBackend: [],
        tools: []
      };

      const termLinks = links['acf:term'] as { href: string, taxonomy: string }[] || [];

      const requests = {
        frontend: [] as Observable<any>[],
        backend: [] as Observable<any>[],
        tools: [] as Observable<any>[],
        imagen: this.http.get<any>(`${this.apiUrl}/media/${acf.foto}`),
        imagenPortada: this.http.get<any>(`${this.apiUrl}/media/${acf.imagen_portada}`)
      };

      for (const term of termLinks) {
        const request = this.http.get<any>(term.href);

        if (term.taxonomy === 'tecnologia-frontend') {
          requests.frontend.push(request);
        } else if (term.taxonomy === 'tecnologia-backend') {
          requests.backend.push(request);
        } else if (term.taxonomy === 'tool') {
          requests.tools.push(request);
        }
      }

      return forkJoin({
        frontend: requests.frontend.length > 0 ? forkJoin(requests.frontend) : of([]),
        backend: requests.backend.length > 0 ? forkJoin(requests.backend) : of([]),
        tools: requests.tools.length > 0 ? forkJoin(requests.tools) : of([]),
        foto: requests.imagen,
        imagenPortada: requests.imagenPortada
      }).pipe(
        map(({ frontend, backend, tools, foto, imagenPortada }) => {
          persona.tecnologiasFrontend = frontend.map(t => t.name);
          persona.tecnologiasBackend = backend.map(t => t.name);
          persona.tools = tools.map(t => t.name);
          persona.foto = foto?.source_url || '';
          persona.imagenPortada = imagenPortada?.source_url || '';
          return persona;
        })
      );
    })
  );
}

}