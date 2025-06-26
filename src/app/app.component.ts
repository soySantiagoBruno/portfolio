import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselProyectosComponent } from './components/carrusel-proyectos/carrusel-proyectos.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";
import { ModalProyectoComponent } from "./components/carrusel-proyectos/modal-proyecto/modal-proyecto.component";
import { FooterComponent } from './components/footer/footer.component';
import { CarruselSkillsComponent } from './components/carrusel-skills/carrusel-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselProyectosComponent, InfoGeneralComponent, FooterComponent, CarruselSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
