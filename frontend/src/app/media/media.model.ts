export interface Media {
  id?: number;
  serial: string;
  titulo: string;
  sinopsis: string;
  url: string;
  imagen: string;
  anio_estreno: number;
  genero_id: number;
  director_id: number;
  productora_id: number;
  tipo_id: number;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}
