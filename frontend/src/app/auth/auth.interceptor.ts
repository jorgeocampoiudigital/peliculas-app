import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AppComponent } from '../app.component';
import { AlertaService } from '../alerta/alerta.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  
  const auth = inject(AuthService);
  const router = inject(Router);
    const alerta = inject(AlertaService);
  
  const token = auth.getToken();

  const authReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        auth.cerrarSesion();
        alerta.mostrar('Tu sesión ha expirado. Inicia sesión nuevamente.');
        router.navigate(['/usuario/login']);
      }
      return throwError(() => error);
    })
  );
  
};
