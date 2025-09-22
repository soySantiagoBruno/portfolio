import { NgClass, NgStyle } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasInfoComponent } from '../../mas-info/mas-info.component';
import { Component, HostListener, Input } from '@angular/core';
import { InformacionPersonalService } from '../../../services/informacion-personal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  @Input() persona: any; // <-- Agrega esto


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

  constructor(
    private modalService: NgbModal,    
    private infoService: InformacionPersonalService
  ) {}

  ngOnInit() {
    this.infoService.getInformacionPersonal().subscribe(persona => {
      this.persona = persona;
    });
  }

  abrirModal() {
    const modalRef = this.modalService.open(MasInfoComponent, {
      windowClass: 'modal-about',
      size: 'lg',
      scrollable: true
    });
    modalRef.componentInstance.persona = this.persona;
  }
}
