import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productora } from './productora.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoraService {

  private apiUrl = 'http://localhost:3000/api/productoras';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Productora[]> {
    return this.http.get<Productora[]>(this.apiUrl);
  }

  getById(id: number): Observable<Productora> {
    return this.http.get<Productora>(`${this.apiUrl}/${id}`);
  }

  create(productora: Productora): Observable<Productora> {
    return this.http.post<Productora>(this.apiUrl, productora);
  }

  update(id: number, productora: Productora): Observable<Productora> {
    return this.http.put<Productora>(`${this.apiUrl}/${id}`, productora);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
