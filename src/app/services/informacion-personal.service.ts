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
          lenguajes: [],
          frameworksYLibrerias: [],
          basesDeDatos: [],
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
        lenguajes: [],
        frameworksYLibrerias: [],
        basesDeDatos: [],
        tools: []
      };

      // juntamos la info de imágenes y skills
      return forkJoin({
        skills: this.skillsService.getSkills(),
        
        foto: this.http.get<any>(`${this.apiUrl}/media/${acf.foto}`),
        imagenPortada: this.http.get<any>(`${this.apiUrl}/media/${acf.imagen_portada}`)
      }).pipe(
        map(({ skills, foto, imagenPortada }) => {
          const lenguajes = skills.find(s => s.category.toLowerCase() === 'lenguajes');
          const frameworksYLibrerias = skills.find(s => s.category.toLowerCase() === 'frameworks y librerías');
          const basesDeDatos = skills.find(s => s.category.toLowerCase() === 'bases de datos');
          const tools = skills.find(s => s.category.toLowerCase() === 'tools');

          persona.lenguajes = lenguajes?.items.map(i => i.name) || [];
          persona.frameworksYLibrerias = frameworksYLibrerias?.items.map(i => i.name) || [];
          persona.basesDeDatos = basesDeDatos?.items.map(i => i.name) || [];
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