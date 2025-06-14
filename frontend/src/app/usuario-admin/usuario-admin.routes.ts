import { Routes } from '@angular/router';
import { UsuarioAdminListComponent } from './usuario-admin-list/usuario-admin-list.component';
import { UsuarioAdminFormComponent } from './usuario-admin-form/usuario-admin-form.component';
import { rolGuard } from '../auth/auth.guard';

export const USUARIO_ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: UsuarioAdminListComponent,
    canActivate: [rolGuard(['administrador'])]
  },
  {
    path: 'edit/:id',
    component: UsuarioAdminFormComponent,
    canActivate: [rolGuard(['administrador'])]
  }
];
