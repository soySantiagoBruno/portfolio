import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, forkJoin, map, of } from 'rxjs';
import { Persona } from '../models/persona';
import { SkillsService } from './skills.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InformacionPersonalService {

  private apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private skillsService: SkillsService
  ) {}

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

      // juntamos la info de imágenes y skills
      return forkJoin({
        skills: this.skillsService.getSkills(), // 👈 llamás a tu service
        foto: this.http.get<any>(`${this.apiUrl}/media/${acf.foto}`),
        imagenPortada: this.http.get<any>(`${this.apiUrl}/media/${acf.imagen_portada}`)
      }).pipe(
        map(({ skills, foto, imagenPortada }) => {
          const frontend = skills.find(s => s.category.toLowerCase() === 'frontend');
          const backend = skills.find(s => s.category.toLowerCase() === 'backend');
          const tools = skills.find(s => s.category.toLowerCase() === 'tools');

          persona.tecnologiasFrontend = frontend?.items.map(i => i.name) || [];
          persona.tecnologiasBackend = backend?.items.map(i => i.name) || [];
          persona.tools = tools?.items.map(i => i.name) || [];

          persona.foto = foto?.source_url || '';
          persona.imagenPortada = imagenPortada?.source_url || '';

          return persona;
        })
      );
    })
  );
}

}