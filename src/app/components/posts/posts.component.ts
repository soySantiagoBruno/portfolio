import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { WordpressPost } from '../../models/wordpress-post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts: WordpressPost[] = [];

  constructor(private proyectosService: ProyectosService){}
 
 
  ngOnInit(): void {
    this.proyectosService.getPosts().subscribe({
			next: (data:WordpressPost[]) => {
				// Manejar la respuesta de la API exitosa (next)
        this.posts = data;
			},
			
			error: (error: any) => {
				// Manejar errores
				console.log('Error en la solicitud HTTP:', error);
			}
		})	




  }
 



}
