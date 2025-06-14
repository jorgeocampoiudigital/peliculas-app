import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DirectorService } from '../director.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-director-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './director-form.component.html',
  styleUrl: './director-form.component.css'
})
export class DirectorFormComponent implements OnInit {

  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private directorService: DirectorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      estado: [true]
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.directorService.getById(this.id).subscribe(data => this.form.patchValue(data));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.id) {
      this.directorService.update(this.id, data).subscribe(() => this.router.navigate(['/director']));
    } else {
      this.directorService.create(data).subscribe(() => this.router.navigate(['/director']));
    }
  }

}
