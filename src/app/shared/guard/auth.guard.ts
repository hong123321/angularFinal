import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../service/jwt.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',

})
export class AuthGuard implements CanActivate {
  constructor(private auth: JwtService,private mess:MessageService,
    private myRoute: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggednIn()){
        return true;
      }else{
        this.myRoute.navigate(["login"]);
        return false;
      }
      
  }
  
}
