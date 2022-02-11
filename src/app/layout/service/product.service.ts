import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
  apiPopular:string ="https://61d7f81be6744d0017ba8879.mockapi.io/popular"
  cartAPI:string="http://localhost:3000/cart"
  constructor(private http:HttpClient) { }

  getPopular():Observable<any>{
    return this.http.get<any>(this.apiPopular)
  }
  getListCart(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiPopular}/${id}`)
  }
  postListCart(value:any):Observable<any>{
    return this.http.post<any>(this.cartAPI,value,this.httpOptions)
  }
  getCartItem():Observable<any>{
    return this.http.get<any>(this.cartAPI)
  }
  dalateCartItem(id:any):Observable<any>{
    return this.http.delete(`${this.cartAPI}/${id}`)
  }
}
