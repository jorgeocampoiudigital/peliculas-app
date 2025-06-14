import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AlertaService } from './alerta/alerta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas-app';
  mensajeAlerta$!: Observable<string | null>;
  
  constructor(
    public auth: AuthService,
    private alerta: AlertaService
  ) {
    this.mensajeAlerta$ = this.alerta.mensaje$;
  }
  
  logout() {
    this.auth.cerrarSesion();
    window.location.href = '/usuario/login';
  }

}
