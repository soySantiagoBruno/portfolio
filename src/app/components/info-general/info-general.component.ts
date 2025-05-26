import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-info-general',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './info-general.component.html',
  styleUrl: './info-general.component.css'
})
export class InfoGeneralComponent {

}
