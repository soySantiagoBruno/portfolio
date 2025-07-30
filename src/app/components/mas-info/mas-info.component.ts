import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mas-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mas-info.component.html',
  styleUrl: './mas-info.component.css',
})
export class MasInfoComponent {


  @Input() persona: any;
  


}
