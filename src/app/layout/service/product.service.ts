import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
  apiPopular = 'http://localhost:4545/stubs';
  apiProduct = 'http://localhost:3000/popular';
  cartAPI = 'http://localhost:3000/cart';
  newsAPI = 'http://localhost:3000/news';
  changeAvtAPI = 'http://localhost/angular/changeImg.php';
  countValue: Subject<any> = new Subject();

  ticketInformation = {
        name: '',
        age: '',
        phone: '',
        address: '',
        card_name: '',
        card_number: '',
    };
private paymentComplete = new Subject<any>();
  constructor(private http: HttpClient) { }

  getPopular(): Observable<any> {
    return this.http.get<any>(this.apiPopular);
  }
  getListCart(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiProduct}/${id}`);
  }
  postListCart(value: any): Observable<any> {
    return this.http.post<any>(this.cartAPI, value, this.httpOptions);
  }
  getCartItem(): Observable<any> {
    return this.http.get<any>(this.cartAPI);
  }
  dalateCartItem(id: any): Observable<any> {
    return this.http.delete(`${this.cartAPI}/${id}`);
  }
  getNews(): Observable<any> {
    return this.http.get<any>(this.newsAPI);
  }
  getNewsById(id): Observable<any> {
    return this.http.get<any>(`${this.newsAPI}/${id}`);
  }
  changeAvt(e: any, id: number): Observable<any>{
    return this.http.put(`${this.changeAvtAPI}?id=${id}`, e , this.httpOptions);
  }
  paymentComplete$ = this.paymentComplete.asObservable();

    getTicketInformation() {
        return this.ticketInformation;
    }

    setTicketInformation(ticketInformation) {
        this.ticketInformation = ticketInformation;
    }

    complete() {
        this.paymentComplete.next(this.ticketInformation = {
          name: '',
          age: '',
          phone: '',
          address: '',
          card_name: '',
          card_number: '',
      });
    }
  public get ValueFromChild(): Subject<any> {
    return this.countValue;
  }

  public notifyCountValue(number) {
    this.countValue.next(number);
  }
}
