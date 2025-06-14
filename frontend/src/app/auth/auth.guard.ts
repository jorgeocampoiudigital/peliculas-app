import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export function rolGuard(permittedRoles: ('administrador' | 'docente')[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.estaAutenticado()) {
      router.navigate(['/usuario/login']);
      return false;
    }

    const rol = auth.getRol();
    if (rol && permittedRoles.includes(rol)) {
      return true;
    }

    router.navigate(['/usuario/login']);
    return false;
  };
}