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
  about: any = {
    title: 'Sobre mí',
    description: `¡Hola! Soy Santiago Bruno, estudiante de Ingeniería en Sistemas de Información en la UTN y desarrollador web con experiencia en tecnologías como Java, Spring Boot, Angular, MySQL y más. Me apasiona crear soluciones que no solo funcionen bien, sino que también sean intuitivas y estén bien diseñadas.

    A lo largo de mi formación, desarrollé proyectos que van desde plataformas de adopción de mascotas hasta sistemas de reservas turísticas, integrando tanto backend como frontend. Me siento cómodo trabajando en equipo, utilizando herramientas como Git, Postman y entornos Linux.

    Además de la programación, me interesan temas como la industria espacial, la ciberseguridad y el desarrollo personal. En mi tiempo libre practico Brazilian Jiu-Jitsu, disfruto de la montaña y busco siempre seguir aprendiendo.

    Estoy abierto a oportunidades desafiantes, especialmente en entornos remotos, donde pueda crecer como profesional y aportar valor con mis habilidades.`,
    email: 'mailto:soysantiagobruno@gmail.com',
    linkedin: 'https://www.linkedin.com/in/santiago-bruno/',
    github: 'https://github.com/soySantiagoBruno',
    image: 'https://i.imgur.com/Oy97AYJ.jpeg',
    skills:{
      frontend: ['JavaScript', 'Angular', 'Node.js', 'HTML', 'CSS'],
      backend: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL'],
      tools: ['Git', 'Postman', 'Docker', 'Linux']
    }
  };
}
