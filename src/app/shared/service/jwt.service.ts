import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
api_Token:string="https://api.themoviedb.org/3/authentication/token/new?api_key=7212593b9b213b8a71376853e9e4f259";
api_login:string ="https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=7212593b9b213b8a71376853e9e4f259";
username:string
  token: any;
  constructor(private httpClient: HttpClient,private myRoute: Router) { }
  getToken():Observable<any>{
    return this.httpClient.get<any>(this.api_Token)
  }
  login(e:any):Observable<any> {
    this.username=e.name
    return this.httpClient.post<any>(this.api_login,e).pipe(
      tap(res=>{
        localStorage.setItem("token",res.request_token)
      }))
  }
  getTokenInLoCal() {
    return localStorage.getItem("token")
  }
  isLoggednIn() {
    return this.getTokenInLoCal() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.myRoute.navigate(["login"]);
  }
 
}
