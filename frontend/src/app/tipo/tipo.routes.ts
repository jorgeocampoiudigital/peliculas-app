import { Routes } from '@angular/router';
import { TipoListComponent } from './tipo-list/tipo-list.component';
import { TipoFormComponent } from './tipo-form/tipo-form.component';
import { rolGuard } from '../auth/auth.guard';

export const TIPO_ROUTES: Routes = [
  { 
    path: '',
    component: TipoListComponent,
    canActivate: [rolGuard(['administrador', 'docente'])]
  },
  { 
    path: 'new',
    component: TipoFormComponent,
    canActivate: [rolGuard(['administrador'])]
  },
  { 
    path: 'edit/:id',
    component: TipoFormComponent,
    canActivate: [rolGuard(['administrador'])]
  }
];