import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];
