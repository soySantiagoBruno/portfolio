import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselComponent, InfoGeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
