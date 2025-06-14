import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoraService } from '../productora.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productora-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './productora-form.component.html',
  styleUrl: './productora-form.component.css'
})
export class ProductoraFormComponent implements OnInit {

  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private service: ProductoraService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      slogan: [''],
      descripcion: [''],
      estado: [true]
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.service.getById(this.id).subscribe(p => this.form.patchValue(p));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.id) {
      this.service.update(this.id, data).subscribe(() => this.router.navigate(['/productora']));
    } else {
      this.service.create(data).subscribe(() => this.router.navigate(['/productora']));
    }
  }

}
