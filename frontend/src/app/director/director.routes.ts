import { Routes } from '@angular/router';
import { DirectorListComponent } from './director-list/director-list.component';
import { DirectorFormComponent } from './director-form/director-form.component';
import { rolGuard } from '../auth/auth.guard';

export const DIRECTOR_ROUTES: Routes = [
  { 
    path: '', 
    component: DirectorListComponent,
    canActivate: [rolGuard(['administrador', 'docente'])]
  },
  { 
    path: 'new', 
    component: DirectorFormComponent,
    canActivate: [rolGuard(['administrador'])] 
  },
  { 
    path: 'edit/:id', 
    component: DirectorFormComponent,
    canActivate: [rolGuard(['administrador'])] 
  }
];