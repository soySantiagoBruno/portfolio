import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { url } from 'node:inspector';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-carrusel-skills',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './carrusel-skills.component.html',
  styleUrl: './carrusel-skills.component.css'
})
export class CarruselSkillsComponent implements OnInit {
  skills: { category: string; items: { name: string; image: string }[] }[] = [];


  constructor(private modalService: NgbModal, private skillsService: SkillsService) {}



  ngOnInit(): void {
      this.skillsService.getSkills().subscribe(
        (skills) => {
          console.log('Skills fetched:', skills);
          this.skills = skills;
        }
      )
    

  }

  playHoverSound() {
    const audio = new Audio('/sounds/hover-sound.wav');
    audio.currentTime = 0;
    audio.play();
  }







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

  capitalize(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


}