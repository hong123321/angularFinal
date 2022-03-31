import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/layout/service/product.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  personalInformation: any;
  constructor(
    private route: Router,
    public ticketService: ProductService,
  ) { }

  ngOnInit(): void {
    this.personalInformation = this.ticketService.ticketInformation;
  }
  next(e) {
    console.log(123);
    if (this.personalInformation.card_name && this.personalInformation.card_number) {
      this.ticketService.ticketInformation = this.personalInformation;
      this.route.navigate(['order/confirmation']);
  }

}
  prevPage() {
  this.route.navigate(['order/personal']);
  }
}
