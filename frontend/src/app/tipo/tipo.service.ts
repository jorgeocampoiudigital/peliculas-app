import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from './tipo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  private apiUrl = 'http://localhost:3000/api/tipos';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.apiUrl);
  }

  getById(id: number): Observable<Tipo> {
    return this.http.get<Tipo>(`${this.apiUrl}/${id}`);
  }

  create(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(this.apiUrl, tipo);
  }

  update(id: number, tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(`${this.apiUrl}/${id}`, tipo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
