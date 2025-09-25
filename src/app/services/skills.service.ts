import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = `${environment.API_URL}/skills?acf_format=standard&_fields=title,acf&per_page=50#`;
  // Trae hasta 50 skills

  
  constructor(private http: HttpClient) {}


  getSkills(): Observable<{ category: string; items: { name: string; image: string }[] }[]> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map((response: any[]) => {
      const groups: { [key: string]: { name: string; image: string }[] } = {};

      response.forEach(item => {
        const grupo = item.acf?.['grupo-skill']?.name ?? '';
        const name = item.title?.rendered ?? '';
        const image = item.acf?.imagen ?? '';

        if (!groups[grupo]) {
          groups[grupo] = [];
        }

        groups[grupo].push({ name, image });
      });

      // Esto va a ordenar las categorías de las skills
      const order = ['Lenguajes','Frameworks y Librerías','Bases de Datos', 'Tools'];

      return order
        .filter(cat => groups[cat]) // solo los que existan
        .map(cat => ({
          category: cat,
          items: groups[cat]
        }));
    })
  );
}



}
