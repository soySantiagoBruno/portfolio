export interface Proyecto {
  id: number;
  title: string;
  description: string;
  image: string;
  deploy?: string;
  repositorio: string;
  tecnologias: string[];
}