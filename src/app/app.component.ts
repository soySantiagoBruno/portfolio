import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselProyectosComponent } from './components/carrusel-proyectos/carrusel-proyectos.component';
import { InfoGeneralComponent } from "./components/info-general/info-general.component";
import { ModalProyectoComponent } from "./components/carrusel-proyectos/modal-proyecto/modal-proyecto.component";
import { FooterComponent } from './components/footer/footer.component';
import { CarruselSkillsComponent } from './components/carrusel-skills/carrusel-skills.component';
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

  
  gruposDeProyectos: any[] = [];

  // Uso el service
  // ...existing code...
  getProyectos() {
  this.proyectoService.getProyectosAgrupados().subscribe((gruposDeProyectos) => {
    this.gruposDeProyectos = gruposDeProyectos;
  });
}
  
  
  
  
  
  
  

  


}
