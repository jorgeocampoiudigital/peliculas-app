import { Routes } from '@angular/router';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { rolGuard } from '../auth/auth.guard';

export const MEDIA_ROUTES: Routes = [
  { 
    path: '',
    component: MediaListComponent,
    canActivate: [rolGuard(['administrador', 'docente'])]

  },
  { 
    path: 'new',
    component: MediaFormComponent,
    canActivate: [rolGuard(['administrador'])]
  },
  { 
    path: 'edit/:id',
    component: MediaFormComponent,
    canActivate: [rolGuard(['administrador'])]
  }
];