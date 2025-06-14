import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from './genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'http://localhost:3000/api/generos';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

  getById(id: number): Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}/${id}`);
  }

  create(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, genero);
  }

  update(id: number, genero: Genero): Observable<Genero> {
    return this.http.put<Genero>(`${this.apiUrl}/${id}`, genero);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
