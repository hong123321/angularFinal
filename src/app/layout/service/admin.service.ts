import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
  apiProduct = 'http://localhost:3000/popular';
  apiUser = 'https://61d7f81be6744d0017ba8879.mockapi.io/user/user';
  UserAPI = 'http://localhost/angular/user.php';
  addUserAPI = 'http://localhost/angular/register.php';
  DeleteUserAPI = 'http://localhost/angular/deleteUser.php';
  GetUserAPI = 'http://localhost/angular/getUserById.php';
  UpdateUserAPI = 'http://localhost/angular/updateUser.php';
  updatePassAPI = 'http://localhost/angular/updatepassword.php';
  apiProcess = 'http://localhost:3000/process';
  apiUpload = 'http://localhost/angular/upload.php';
  newsAPI = 'http://localhost:3000/news';
  constructor(private http: HttpClient) { }
  getUser(): Observable<any>{
    return this.http.get<any>(this.UserAPI);
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.DeleteUserAPI}?id=${id}`);
  }
  getUserById(id: number): Observable<any>{
    return this.http.get<any>(`${this.GetUserAPI}?id=${id}`);
  }
  updateUser(e: any, id: number): Observable<any>{
    return this.http.put(`${this.UpdateUserAPI}?id=${id}`, e, this.httpOptions);
  }
  updatePass(e: any, id: number): Observable<any>{
    return this.http.put(`${this.updatePassAPI}?id=${id}`, e, this.httpOptions);
  }
  addUser(e: any): Observable<any>{
    return this.http.post<any>(`${this.addUserAPI}`, e, this.httpOptions);
  }
  getProduct(): Observable<any>{
    return this.http.get<any>(this.apiProduct);
  }
  orderProduct(e: any): Observable<any>{
    return this.http.post<any>(this.apiProcess, e, this.httpOptions);
  }
  getOrderProduct(): Observable<any>{
    return this.http.get<any>(this.apiProcess);
  }
  getOrderProductById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiProduct}/${id}`);
  }
  addProduct(e: any): Observable<any>{
    return this.http.post<any>(`${this.apiProduct}`, e, this.httpOptions);
  }
  postNews(e: any): Observable<any>{
    return this.http.post<any>(`${this.newsAPI}`, e, this.httpOptions);
  }
}
