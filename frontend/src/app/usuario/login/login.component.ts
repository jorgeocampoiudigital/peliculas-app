import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  login() {
    this.usuarioService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.usuarioService.guardarToken(res.token);
        if (res.usuario.rol === 'administrador') {
          this.router.navigate(['/media']);
        } else {
          this.router.navigate(['/media']);
        }
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }

}