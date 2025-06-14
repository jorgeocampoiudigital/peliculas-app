import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css'
})
export class MediaListComponent implements OnInit {

  mediaList: any[] = [];

  constructor(
    private service: MediaService, 
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.mediaList = data);
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta producción?')) {
      this.service.delete(id).subscribe(() => this.ngOnInit());
    }
  }

  editar(id: number) {
    this.router.navigate(['/media/edit', id]);
  }

  nuevo() {
    this.router.navigate(['/media/new']);
  }

}
