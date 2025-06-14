import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MediaService } from '../media.service';
import { GeneroService } from '../../genero/genero.service';
import { DirectorService } from '../../director/director.service';
import { ProductoraService } from '../../productora/productora.service';
import { TipoService } from '../../tipo/tipo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './media-form.component.html',
  styleUrl: './media-form.component.css'
})
export class MediaFormComponent implements OnInit {

  form: FormGroup;
  id?: number;

  generos: any[] = [];
  directores: any[] = [];
  productoras: any[] = [];
  tipos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: MediaService,
    private generoService: GeneroService,
    private directorService: DirectorService,
    private productoraService: ProductoraService,
    private tipoService: TipoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      serial: ['', Validators.required],
      titulo: ['', Validators.required],
      sinopsis: [''],
      url: ['', Validators.required],
      imagen: [''],
      anio_estreno: [2024],
      genero_id: [null, Validators.required],
      director_id: [null, Validators.required],
      productora_id: [null, Validators.required],
      tipo_id: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAuxData();

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.service.getById(this.id).subscribe(data => this.form.patchValue(data));
    }
  }

  loadAuxData() {
    this.generoService.getAll().subscribe(data => this.generos = data.filter(g => g.estado));
    this.directorService.getAll().subscribe(data => this.directores = data.filter(d => d.estado));
    this.productoraService.getAll().subscribe(data => this.productoras = data.filter(p => p.estado));
    this.tipoService.getAll().subscribe(data => this.tipos = data);
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.id) {
      this.service.update(this.id, data).subscribe(() => this.router.navigate(['/media']));
    } else {
      this.service.create(data).subscribe(() => this.router.navigate(['/media']));
    }
  }

}
