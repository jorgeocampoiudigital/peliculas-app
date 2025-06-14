import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoService } from '../tipo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './tipo-form.component.html',
  styleUrl: './tipo-form.component.css'
})
export class TipoFormComponent implements OnInit {

  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private service: TipoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.service.getById(this.id).subscribe(data => this.form.patchValue(data));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.id) {
      this.service.update(this.id, data).subscribe(() => this.router.navigate(['/tipo']));
    } else {
      this.service.create(data).subscribe(() => this.router.navigate(['/tipo']));
    }
  }

}
