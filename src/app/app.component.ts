import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselProyectosComponent } from './components/carrusel-proyectos/carrusel-proyectos.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";
import { ModalProyectoComponent } from "./components/carrusel-proyectos/modal-proyecto/modal-proyecto.component";
import { FooterComponent } from './components/footer/footer.component';
import { CarruselSkillsComponent } from './components/carrusel-skills/carrusel-skills.component';
import { GrupoProyectos } from './models/grupo-proyectos';
import { Proyecto } from './models/proyecto';
import { ProyectosService } from './services/proyectos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselProyectosComponent, InfoGeneralComponent, FooterComponent, CarruselSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private proyectoService: ProyectosService){}
  
  ngOnInit(): void {
    this.getProyectos();
  }

  proyectos: any[] = [];
  gruposDeProyectos: GrupoProyectos[] = [];

  // Uso el service
  getProyectos() {
    this.proyectoService.getProyectos().subscribe((data) => {
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
      this.gruposDeProyectos = Object.entries(grupos).map(([nombre, proyectos]) => ({
        nombre,
        proyectos
      }));
    });

    console.log(this.proyectos);
  }
  
  
  
  
  
  
  

  


}
