export interface Proyecto {
  id: number;
  title: string;
  image: string;
  presentacion:any;
  description: string;
  tecnologias: string[];
  repositorio: string;
  grupo: string;
  titulo: string;
  slug: string;
  deploy?: string;
}
