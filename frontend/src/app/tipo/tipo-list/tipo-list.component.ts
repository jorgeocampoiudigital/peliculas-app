import { Component, OnInit } from '@angular/core';
import { Tipo } from '../tipo.model';
import { TipoService } from '../tipo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-tipo-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tipo-list.component.html',
  styleUrl: './tipo-list.component.css'
})
export class TipoListComponent implements OnInit {

  tipos: Tipo[] = [];

  constructor(
    private service: TipoService, 
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.tipos = data);
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar este tipo?')) {
      this.service.delete(id).subscribe(() => this.ngOnInit());
    }
  }

  editar(id: number) {
    this.router.navigate(['/tipo/edit', id]);
  }

  nuevo() {
    this.router.navigate(['/tipo/new']);
  }

}
