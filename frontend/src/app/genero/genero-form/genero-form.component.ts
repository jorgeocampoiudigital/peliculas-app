import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroService } from '../genero.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-genero-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './genero-form.component.html',
  styleUrl: './genero-form.component.css'
})
export class GeneroFormComponent implements OnInit {

  generoForm: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.generoForm = this.fb.group({
      nombre: ['', Validators.required],
      estado: [true],
      descripcion: ['']
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.generoService.getById(this.id).subscribe(genero => this.generoForm.patchValue(genero));
    }
  }

  onSubmit() {
    if (this.generoForm.invalid) return;

    const data = this.generoForm.value;

    if (this.id) {
      this.generoService.update(this.id, data).subscribe(() => this.router.navigate(['/genero']));
    } else {
      this.generoService.create(data).subscribe(() => this.router.navigate(['/genero']));
    }
  }

}
