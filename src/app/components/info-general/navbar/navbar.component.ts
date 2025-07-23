import { NgClass, NgStyle } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasInfoComponent } from '../../mas-info/mas-info.component';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  seccionActual = 'home';
  backgroundOpacity = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const maxScroll = 200; // después de 200px, opacidad total
    const opacity = Math.min(scrollY / maxScroll, 1);
    this.backgroundOpacity = opacity;

    const secciones = ['home', 'proyectos', 'skills', 'contacto'];
    for (const seccion of secciones) {
      const el = document.getElementById(seccion);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          this.seccionActual = seccion;
          break;
        }
      }
    }
  }

  get backgroundStyle() {
    return {
      'background-color': `rgba(20, 20, 20, ${this.backgroundOpacity})`
    };
  }

  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }

  constructor(private modalService: NgbModal) {}

  abrirModal() {
    const modalRef = this.modalService.open(MasInfoComponent, {
      windowClass: 'modal-about',
      size: 'lg',
      scrollable: true
    });
  }
}
