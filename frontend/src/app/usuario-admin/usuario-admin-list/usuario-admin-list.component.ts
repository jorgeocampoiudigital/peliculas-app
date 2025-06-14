import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-usuario-admin-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './usuario-admin-list.component.html',
  styleUrl: './usuario-admin-list.component.css'
})
export class UsuarioAdminListComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((res) => (this.usuarios = res));
  }

  editar(id: number) {
    this.router.navigate(['/admin-usuarios/edit', id]);
  }

}
