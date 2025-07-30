import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasInfoComponent } from '../mas-info/mas-info.component';
import { NgIf, NgStyle } from '@angular/common';
import { InformacionPersonalService } from '../../services/informacion-personal.service';
import { Persona } from '../../models/persona';


@Component({
  selector: 'app-info-general',
  standalone: true,
  imports: [NavbarComponent, NgIf, NgStyle],
  templateUrl: './info-general.component.html',
  styleUrl: './info-general.component.css'
})
export class InfoGeneralComponent implements OnInit {

  persona: Persona= {
    nombre: '',
    titulo: '',
    descripcion: '',
    breveDescripcion: '',
    urlCv: '',
    email: '',
    linkedin: '',
    github: '',
    idiomas: '',
    tecnologiasFrontend: [],
    tecnologiasBackend: [],
    tools: [],
    foto: '',
    imagenPortada: ''
  };

  constructor(private modalService: NgbModal, private infoService: InformacionPersonalService) { }

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
    modalRef.componentInstance.persona = this.persona; // <-- Pasa la variable
  }
}
