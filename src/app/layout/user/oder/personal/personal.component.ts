import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/layout/service/product.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalInformation: any;
  idProduct: any;
  idProductRD: any;
  constructor(
    private route: Router,
    public ticketService: ProductService,
    private routes: ActivatedRoute,

  ) { }
  ngOnInit(): void {
    this.idProduct = this.routes.snapshot.paramMap.get('id');
    this.idProductRD = this.routes.snapshot.paramMap.get('idRD');
    this.personalInformation = this.ticketService.getTicketInformation();
  }
  next(e) {
    const id = Number(localStorage.getItem('token'));
    // tslint:disable-next-line: max-line-length
    if (this.personalInformation.name  && this.personalInformation.age && this.personalInformation.phone && this.personalInformation.address) {
      this.ticketService.ticketInformation = this.personalInformation;
      this.personalInformation.id_product = this.idProduct;
      this.personalInformation.idProduct_RD = this.idProductRD;
      this.personalInformation.id_user= id;
      this.personalInformation.create_At = new Date();
      this.route.navigate(['order/payment']);
      return;
  }
}
}
