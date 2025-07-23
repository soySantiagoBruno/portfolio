import { NgClass, NgStyle } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasInfoComponent } from '../../mas-info/mas-info.component';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  backgroundOpacity = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const maxScroll = 200; // después de 200px, opacidad total
    const opacity = Math.min(scrollY / maxScroll, 1);
    this.backgroundOpacity = opacity;
  }

  get backgroundStyle() {
    return {
      'background-color': `rgba(20, 20, 20, ${this.backgroundOpacity})`
    };
  }


  constructor(private modalService: NgbModal) {}
    
  
    abrirModal() {
        const modalRef = this.modalService.open(MasInfoComponent,{
          windowClass: 'modal-about',
          size: 'lg',
          scrollable: true
        });
      }
  

}
