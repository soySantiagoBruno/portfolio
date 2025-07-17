import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { url } from 'node:inspector';

@Component({
  selector: 'app-carrusel-skills',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './carrusel-skills.component.html',
  styleUrl: './carrusel-skills.component.css'
})
export class CarruselSkillsComponent {

  playHoverSound() {
    const audio = new Audio('/sounds/hover-sound.wav');
    audio.currentTime = 0;
    audio.play();
  }

  constructor(private modalService: NgbModal) {}



  // Esto lo voy a inyectar en el futuro con un service
  techs = [
  {name:'Java', image: 'https://cdn.worldvectorlogo.com/logos/java.svg'},
  { name: 'Angular', image: 'https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png' },
  { name: 'Spring', image: 'https://cdn.worldvectorlogo.com/logos/spring-9.svg' },
  { name: 'Node.js', image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
  { name: 'MySQL', image: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg' },
  { name: 'Git', image: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
  { name: 'Docker', image: 'https://cdn.worldvectorlogo.com/logos/docker-icon.svg' },
  { name: 'Kubernetes', image: 'https://cdn.worldvectorlogo.com/logos/kubernetes-1.svg' }
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