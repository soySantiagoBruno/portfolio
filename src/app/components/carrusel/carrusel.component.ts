import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  proyectos: any[] = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
    { id: 4, title: 'Proyecto 4', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
    { id: 5, title: 'Proyecto 5', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
    { id: 6, title: 'Proyecto 5', description: 'Descripción del proyecto 1', image: 'main-background.gif' },
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

  
}
