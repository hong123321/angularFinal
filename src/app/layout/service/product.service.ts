import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiPopular:string ="https://61d7f81be6744d0017ba8879.mockapi.io/popular"
  constructor(private http:HttpClient) { }

  getPopular():Observable<any>{
    return this.http.get<any>(this.apiPopular)
  }
  getListCart(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiPopular}/${id}`)
  }
}
