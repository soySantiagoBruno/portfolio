import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasInfoComponent } from '../mas-info/mas-info.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-info-general',
  standalone: true,
  imports: [NavbarComponent, NgIf],
  templateUrl: './info-general.component.html',
  styleUrl: './info-general.component.css'
})
export class InfoGeneralComponent {

  persona: any = {
    nombre: "Santiago Bruno",
    titulo: "Desarrollador Full Stack",
    descripcion: "Transformando ideas en soluciones digitales. Siempre aprendiendo, siempre construyendo.",
    urlCv:"https://drive.google.com/uc?export=download&id=1BXoJTIg0N6aOBmdtt2nvfR20LESoqGkw"  
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
