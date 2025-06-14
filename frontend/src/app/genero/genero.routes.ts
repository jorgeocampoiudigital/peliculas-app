import { Routes } from '@angular/router';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { GeneroFormComponent } from './genero-form/genero-form.component';
import { rolGuard } from '../auth/auth.guard';

export const GENERO_ROUTES: Routes = [
  { 
    path: '',
    component: GeneroListComponent,
    canActivate: [rolGuard(['administrador', 'docente'])] 
  },
  { 
    path: 'new',
    component: GeneroFormComponent,
    canActivate: [rolGuard(['administrador'])]
  },
  { 
    path: 'edit/:id',
    component: GeneroFormComponent,
    canActivate: [rolGuard(['administrador'])]
  }
];