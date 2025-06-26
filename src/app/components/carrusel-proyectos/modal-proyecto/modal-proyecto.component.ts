import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-proyecto',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './modal-proyecto.component.html',
  styleUrl: './modal-proyecto.component.css'
})
export class ModalProyectoComponent {
  @Input() proyecto: any;
}
