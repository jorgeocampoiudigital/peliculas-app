import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero.model';
import { GeneroService } from '../genero.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-genero-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './genero-list.component.html',
  styleUrl: './genero-list.component.css'
})
export class GeneroListComponent implements OnInit {

  generos: Genero[] = [];

  constructor(
    private generoService: GeneroService, 
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getGeneros();
  }

  getGeneros() {
    this.generoService.getAll().subscribe(data => this.generos = data);
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que desea eliminar este género?')) {
      this.generoService.delete(id).subscribe(() => this.getGeneros());
    }
  }

  editar(id: number) {
    this.router.navigate(['/genero/edit', id]);
  }

  nuevo() {
    this.router.navigate(['/genero/new']);
  }
  
}
