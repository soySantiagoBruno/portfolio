import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [NgFor, NgIf, NgClass  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  constructor(private modalService: NgbModal) {}

  // Esto lo voy a inyectar en el futuro con un service
  proyectos: any[] = [
    { 
      id: 1, 
      title: 'Proyecto 1', 
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      image: 'main-background.gif', 
      deploy: 'https://www.wikipedia.com',
      repositorio: "https://github.com/soySantiagoBruno/proyecto-1", 
      tecnologias: ['Angular', 'TypeScript', 'Bootstrap'] 
    },
    { 
      id: 2, 
      title: 'Proyecto 2', 
      description: 'Descripción del proyecto 2', 
      image: 'main-background.gif', 
      repositorio: "https://github.com/soySantiagoBruno/proyecto-2", 
      tecnologias: ['React', 'JavaScript', 'Material UI'] 
    },
    { 
      id: 3, 
      title: 'Proyecto 3', 
      description: 'Descripción del proyecto 3', 
      image: 'main-background.gif', 
      repositorio: "https://github.com/soySantiagoBruno/proyecto-3", 
      tecnologias: ['Node.js', 'Express', 'MongoDB'] 
    },
    { 
      id: 4, 
      title: 'Proyecto 4', 
      description: 'Descripción del proyecto 4', 
      image: 'main-background.gif', 
      repositorio: "https://github.com/soySantiagoBruno/proyecto-4", 
      tecnologias: ['Flutter', 'Dart', 'Firebase'] 
    }
  ]

  @ViewChild('cardContainer') container!: ElementRef;
  private scrollAmount = 300;

  scrollLeft(): void {
    if (this.container) {
      this.container.nativeElement.scrollLeft -= this.scrollAmount;
    }
  }

  scrollRight(): void {
    if (this.container) {
      this.container.nativeElement.scrollLeft += this.scrollAmount;
    }
  }


  abrirModal(proyecto: any) {
    const modalRef = this.modalService.open(ModalProyectoComponent,{
      windowClass: 'modal-personalizado',
      size: 'lg',
      scrollable: true
    });
    modalRef.componentInstance.proyecto = proyecto;
  }
  
}
