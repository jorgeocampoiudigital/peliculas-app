import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario: Usuario = {
    nombre: '',
    email: '',
    password: '',
    rol: 'docente'
  };

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) {}

  registrar() {
    this.usuarioService.registrar(this.usuario).subscribe(() => {
      alert('Usuario registrado con éxito');
      this.router.navigate(['/login']);
    });
  }

}