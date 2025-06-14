import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from './director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private apiUrl = 'http://localhost:3000/api/directores';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Director[]> {
    return this.http.get<Director[]>(this.apiUrl);
  }

  getById(id: number): Observable<Director> {
    return this.http.get<Director>(`${this.apiUrl}/${id}`);
  }

  create(director: Director): Observable<Director> {
    return this.http.post<Director>(this.apiUrl, director);
  }

  update(id: number, director: Director): Observable<Director> {
    return this.http.put<Director>(`${this.apiUrl}/${id}`, director);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
