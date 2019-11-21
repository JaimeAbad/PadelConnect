import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../service/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router: any;
  constructor (private auth: AutenticacionService){}

  canActivate(): boolean {

    if (this.auth.comprobarEstarAutenticado) {
        return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
    // return this.auth.comprobarEstarAutenticado();
  }

}
