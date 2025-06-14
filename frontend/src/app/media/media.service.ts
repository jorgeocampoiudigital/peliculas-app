import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from './media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = 'http://localhost:3000/api/media';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Media[]> {
    return this.http.get<Media[]>(this.apiUrl);
  }

  getById(id: number): Observable<Media> {
    return this.http.get<Media>(`${this.apiUrl}/${id}`);
  }

  create(media: Media): Observable<Media> {
    return this.http.post<Media>(this.apiUrl, media);
  }

  update(id: number, media: Media): Observable<Media> {
    return this.http.put<Media>(`${this.apiUrl}/${id}`, media);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
