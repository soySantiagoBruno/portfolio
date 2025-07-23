import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';

@Component({
  selector: 'app-carrusel-proyectos',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './carrusel-proyectos.component.html',
  styleUrl: './carrusel-proyectos.component.css'
})
export class CarruselProyectosComponent {

  constructor(private modalService: NgbModal) {}

  // Paso los proyectos como input para poder reutilizar el componente
  @Input() gruposDeProyectos: any;

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
  
  // Método para reproducir el sonido al pasar el mouse
  playHoverSound() {
      const audio = new Audio('/sounds/hover-sound.wav');
      audio.currentTime = 0;
      audio.play();
    }

}
