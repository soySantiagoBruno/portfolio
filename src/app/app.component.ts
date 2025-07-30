import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselProyectosComponent } from './components/carrusel-proyectos/carrusel-proyectos.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";
import { ModalProyectoComponent } from "./components/carrusel-proyectos/modal-proyecto/modal-proyecto.component";
import { FooterComponent } from './components/footer/footer.component';
import { CarruselSkillsComponent } from './components/carrusel-skills/carrusel-skills.component';
import { GrupoProyectos } from './models/grupo-proyectos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselProyectosComponent, InfoGeneralComponent, FooterComponent, CarruselSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  // acá cargaría los proyectos desde un servicio, pero por ahora los dejo hardcodeados
  gruposDeProyectos: GrupoProyectos[] = [
  {
    nombre: 'Proyectos principales',
    proyectos: [
      {
        id: 1,
        title: 'Proyecto 1',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'main-background.gif',
        deploy: 'https://www.wikipedia.com',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-1',
        tecnologias: ['Angular', 'TypeScript', 'Bootstrap']
      },
      {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: 'main-background.gif',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-2',
        tecnologias: ['React', 'JavaScript', 'Material UI']
      },
      {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: 'main-background.gif',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-3',
        tecnologias: ['Node.js', 'Express', 'MongoDB']
      },
      {
        id: 1,
        title: 'Proyecto 1',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'main-background.gif',
        deploy: 'https://www.wikipedia.com',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-1',
        tecnologias: ['Angular', 'TypeScript', 'Bootstrap']
      },{
        id: 1,
        title: 'Proyecto 1',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'main-background.gif',
        deploy: 'https://www.wikipedia.com',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-1',
        tecnologias: ['Angular', 'TypeScript', 'Bootstrap']
      },{
        id: 1,
        title: 'Proyecto 1',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'main-background.gif',
        deploy: 'https://www.wikipedia.com',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-1',
        tecnologias: ['Angular', 'TypeScript', 'Bootstrap']
      },
      {
        id: 4,
        title: 'Proyecto 4',
        description: 'Descripción del proyecto 4',
        image: 'main-background.gif',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-4',
        tecnologias: ['Flutter', 'Dart', 'Firebase']
      }
    ]
  },
  {
    nombre: 'Podrían interesarte',
    proyectos: [
      {
        id: 1,
        title: 'Proyecto 1',
        description: 'Otro proyecto menos destacado',
        image: 'main-background.gif',
        deploy: 'https://www.wikipedia.com',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-1',
        tecnologias: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 2,
        title: 'Proyecto 2',
        description: 'Otro proyecto secundario',
        image: 'main-background.gif',
        repositorio: 'https://github.com/soySantiagoBruno/proyecto-2',
        tecnologias: ['PHP', 'MySQL']
      }
    ]
  }
];



}
