import { Routes } from '@angular/router';
import { ProductoraListComponent } from './productora-list/productora-list.component';
import { ProductoraFormComponent } from './productora-form/productora-form.component';
import { rolGuard } from '../auth/auth.guard';

export const PRODUCTORA_ROUTES: Routes = [
  { 
    path: '',
    component: ProductoraListComponent,
    canActivate: [rolGuard(['administrador', 'docente'])]
  },
  { 
    path: 'new',
    component: ProductoraFormComponent,
    canActivate: [rolGuard(['administrador'])]
  },
  { 
    path: 'edit/:id',
    component: ProductoraFormComponent,
    canActivate: [rolGuard(['administrador'])]
  }
];