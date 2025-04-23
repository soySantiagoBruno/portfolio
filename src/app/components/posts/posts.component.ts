import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  constructor(private proyectosService: ProyectosService){}
 
 
  ngOnInit(): void {
    this.proyectosService.getPosts().subscribe({
			next: (data: any) => {
				// Manejar la respuesta de la API exitosa (next)
				console.log(data);
			},
			
			error: (error: any) => {
				// Manejar errores
				console.log('Error en la solicitud HTTP:', error);
			}
		})	




  }
 



}
