import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Usuario } from '../../usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-usuario-admin-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule
  ],
  templateUrl: './usuario-admin-form.component.html',
  styleUrl: './usuario-admin-form.component.css'
})
export class UsuarioAdminFormComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getAll().subscribe((usuarios) => {
      this.usuario = usuarios.find((u) => u.id === id)!;
    });
  }

  guardar() {
    this.usuarioService.update(this.usuario.id!, { rol: this.usuario.rol }).subscribe(() => {
      alert('Rol actualizado con éxito');
      this.router.navigate(['/admin-usuarios']);
    });
  }

}
