import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'genero',
    loadChildren: () =>
      import('./genero/genero.routes').then(m => m.GENERO_ROUTES)
  },
  {
    path: 'director',
    loadChildren: () =>
      import('./director/director.routes').then(m => m.DIRECTOR_ROUTES)
  },
  {
    path: 'productora',
    loadChildren: () =>
      import('./productora/productora.routes').then(m => m.PRODUCTORA_ROUTES)
  },
  {
    path: 'tipo',
    loadChildren: () =>
      import('./tipo/tipo.routes').then(m => m.TIPO_ROUTES)
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./media/media.routes').then(m => m.MEDIA_ROUTES)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.routes').then(m => m.USUARIO_ROUTES)
  },
  {
    path: 'admin-usuarios',
    loadChildren: () =>
    import('./usuario-admin/usuario-admin.routes').then((m) => m.USUARIO_ADMIN_ROUTES)
  },
  { path: '', redirectTo: 'usuario/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'usuario/login' }
];
