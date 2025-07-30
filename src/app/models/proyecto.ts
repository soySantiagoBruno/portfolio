export interface Proyecto {
  id: number;
  title: string;
  image: string;
  description: string;
  tecnologias: string[];
  repositorio: string;
  grupo: string;
  deploy?: string;
}
