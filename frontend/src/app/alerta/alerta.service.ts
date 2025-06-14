import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  mensaje$ = new BehaviorSubject<string | null>(null);

  constructor() { }

  mostrar(mensaje: string) {
    this.mensaje$.next(mensaje);
    setTimeout(() => this.mensaje$.next(null), 4000);
  }
}
