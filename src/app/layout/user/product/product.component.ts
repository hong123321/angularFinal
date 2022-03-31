import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from './cart/cart.component';

import { PrimeNGConfig } from 'primeng/api';

import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from '../../service/product.service';
import { MessageService } from 'primeng/api';

import { ConfirmationService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService, DialogService]
})
export class ProductComponent implements OnInit {
  @Input()
  abc: string;
  constructor(
    private productPopular: ProductService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private routes: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  dataPopular: any[];
  sortOptions: SelectItem[];
  vote: number;
  count = 0;
  dataListCart: any[] = [];
  sortOrder: number;
  responsiveOptions: any;
  message: any;
  sortField: string;
  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.productPopular.getPopular().subscribe(data => {
      this.dataPopular = data;
      data.map((element: any) => {
        this.vote = (element.vote) / 20;
      });
    });
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    this.primengConfig.ripple = true;
    this.productPopular.getCartItem().subscribe(data => {
      this.dataListCart = data.filter((el: any) => el.idUser === localStorage.getItem('token'));
      this.count = this.dataListCart.length;
    });
    this.productPopular.countValue.subscribe((res: any) => {
      this.count = res;
    });
  }

  onSortChange(event: any): void {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addToCart(id: number): void {
    if (localStorage.getItem('token') !== null) {
      this.productPopular.getListCart(id).subscribe(data => {
        this.postToCart(data);
      });
    } else {
      this.confirmationService.confirm(
        {
          message: 'Do you want login ?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.routes.navigate(['login']);
          }
        }
      );
    }
  }
  postToCart(value: any): void {
    value.id = value.id + (Math.random() * 1);
    value.idUser = localStorage.getItem('token');
    console.log(value);
    this.productPopular.postListCart(value).subscribe(
      data => {
        console.log(data);
        this.count++;
      },
      err => console.log(err));
  }

  showCart(): void {
    this.ref = this.dialogService.open(CartComponent, {
      data: {
        data: this.dataListCart,
        count: this.count
      },
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000
    });
  }
  e(e: any): void{
    console.log(e);
  }
}
