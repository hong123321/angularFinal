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
  apiPopular:string ="http://localhost:4545/stubs";
  apiProduct:string="http://localhost:3000/popular";
  cartAPI:string="http://localhost:3000/cart";
  newsAPI:string="http://localhost:3004/news";
  constructor(private http:HttpClient) { }

  getPopular():Observable<any>{
    return this.http.get<any>(this.apiPopular)
  }
  getListCart(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiProduct}/${id}`)
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
  getNews():Observable<any>{
    return this.http.get<any>(this.newsAPI)
  }
  getNewsById(id):Observable<any>{
    return this.http.get<any>(`${this.newsAPI}/${id}`)
  }
}
