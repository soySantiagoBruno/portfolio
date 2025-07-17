import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrusel-skills',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './carrusel-skills.component.html',
  styleUrl: './carrusel-skills.component.css'
})
export class CarruselSkillsComponent {
  
  constructor(private modalService: NgbModal) {
  }


  // Esto lo voy a inyectar en el futuro con un service
  techs = [
  { name: 'Angular', url: 'https://img.shields.io/badge/Angular-0F0F11?style=flat&logo=angular&logoColor=white' },
  { name: 'React', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black' },
  { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white' },
  { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white' },
  { name: 'Express', url: 'https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white' },
  { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white' },
  { name: 'MySQL', url: 'https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white' },
  { name: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white' },
  { name: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white' },
  { name: 'Kubernetes', url: 'https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white' },
  { name: 'Git', url: 'https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white' },
  { name: 'GitHub', url: 'https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white' }
];


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