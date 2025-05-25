import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";
import { ModalProyectoComponent } from "./components/carrusel/modal-proyecto/modal-proyecto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselComponent, InfoGeneralComponent, ModalProyectoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
