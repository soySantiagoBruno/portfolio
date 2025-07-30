import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-proyecto',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './modal-proyecto.component.html',
  styleUrl: './modal-proyecto.component.css'
})
export class ModalProyectoComponent implements OnInit {
  @Input() proyecto: any;

  htmlIframe?: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let iframeOriginal = this.proyecto.presentacion;

    if (iframeOriginal.includes('<iframe')) {
  // Insertar la clase después del primer <iframe
  iframeOriginal = iframeOriginal.replace(
    '<iframe',
    '<iframe class="w-100"'
  );

  // En caso de que también quieras asegurarte de incluir autoplay
  iframeOriginal = iframeOriginal.replace(
    'feature=oembed',
    'feature=oembed&autoplay=1'
  );
}

    this.htmlIframe = this.sanitizer.bypassSecurityTrustHtml(iframeOriginal);
  }


}
