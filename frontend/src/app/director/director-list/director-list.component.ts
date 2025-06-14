import { Component, OnInit } from '@angular/core';
import { Director } from '../director.model';
import { Router } from '@angular/router';
import { DirectorService } from '../director.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-director-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './director-list.component.html',
  styleUrl: './director-list.component.css'
})
export class DirectorListComponent implements OnInit {

  directores: Director[] = [];

  constructor(
    private directorService: DirectorService, 
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getDirectores();
  }

  getDirectores() {
    this.directorService.getAll().subscribe(data => this.directores = data);
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar este director?')) {
      this.directorService.delete(id).subscribe(() => this.getDirectores());
    }
  }

  editar(id: number) {
    this.router.navigate(['/director/edit', id]);
  }

  nuevo() {
    this.router.navigate(['/director/new']);
  }

}
