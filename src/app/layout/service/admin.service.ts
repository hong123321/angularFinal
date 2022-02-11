import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  filter(arg0: (input: any, i: any) => boolean): AdminService {
    throw new Error('Method not implemented.');
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
  apiProduct:string ="https://61d7f81be6744d0017ba8879.mockapi.io/popular";
  apiUser:string="https://61d7f81be6744d0017ba8879.mockapi.io/user/user";
  apiProcess:string="http://localhost:3000/process"
  apiUpload="http://localhost/angular/upload.php"
  constructor(private http:HttpClient) { }
  getUser():Observable<any>{
    return this.http.get<any>(this.apiUser)
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.apiUser}/${id}`)
  }
  getUserById(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUser}/${id}`)
  }
  updateUser(e:any,id:number):Observable<any>{
    return this.http.put(`${this.apiUser}/${id}`,e,this.httpOptions)
  }
  addUser(e:any):Observable<any>{
    return this.http.post<any>(`${this.apiUser}`,e,this.httpOptions)
  }
  getProduct():Observable<any>{
    return this.http.get<any>(this.apiProduct)
  }
  orderProduct(e:any):Observable<any>{
    return this.http.post<any>(this.apiProcess,e,this.httpOptions)
  }
  getOrderProduct():Observable<any>{
    return this.http.get<any>(this.apiProcess)
  }
  getOrderProductById(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiProduct}/${id}`)
  }
  addProduct(e:any):Observable<any>{
    return this.http.post<any>(`${this.apiProduct}`,e,this.httpOptions)
  }
}
