import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthbackLogGuard implements CanActivate {
  constructor(
    private auth: JwtService,
    private myRoute: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isLoggednIn() && !this.auth.isLoggednIn_admin()){
      return true;
    }else{
      if(this.auth.isLoggednIn()){
        this.myRoute.navigate(['home']);
        return false;
      }else{
        this.myRoute.navigate(['admin']);
      }
    }
  }
}
