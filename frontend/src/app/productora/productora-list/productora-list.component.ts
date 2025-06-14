import { Component, OnInit } from '@angular/core';
import { Productora } from '../productora.model';
import { ProductoraService } from '../productora.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-productora-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './productora-list.component.html',
  styleUrl: './productora-list.component.css'
})
export class ProductoraListComponent implements OnInit {

  productoras: Productora[] = [];

  constructor(
    private service: ProductoraService, 
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.productoras = data);
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta productora?')) {
      this.service.delete(id).subscribe(() => this.ngOnInit());
    }
  }

  editar(id: number) {
    this.router.navigate(['/productora/edit', id]);
  }

  nuevo() {
    this.router.navigate(['/productora/new']);
  }


}
