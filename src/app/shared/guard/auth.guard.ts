import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';


@Injectable({
  providedIn: 'root',

})
export class AuthGuard implements CanActivate {
  constructor(private auth: JwtService,
              private myRoute: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isLoggednIn() || this.auth.getTokenInLoCalofAdmin()){
        return true;
      }else{
        this.myRoute.navigate(['login']);
        return false;
      }
  }

}
