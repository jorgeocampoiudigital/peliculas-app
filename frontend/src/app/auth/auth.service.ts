import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRol(): 'administrador' | 'docente' | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = token.split('.')[1];
    try {
      const decoded = JSON.parse(atob(payload));
      return decoded.rol;
    } catch {
      return null;
    }
  }

  estaAutenticado(): boolean {
    return !!this.getToken();
  }

  tieneRol(rol: 'administrador' | 'docente'): boolean {
    return this.getRol() === rol;
  }

  esAdmin(): boolean {
    return this.getRol() === 'administrador';
  }

  esDocente(): boolean {
    return this.getRol() === 'docente';
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
  }

}
