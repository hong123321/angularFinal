import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import { CartComponent } from './cart/cart.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[MessageService,DialogService]
})
export class ProductComponent implements OnInit {
  dataPopular:any[]
  sortOptions:SelectItem[];
  vote:number 
  count:number = 0
  dataListCart:any[]=[]
  sortOrder: number;

    sortField: string;
  constructor(private productPopular:ProductService, private primengConfig: PrimeNGConfig,public dialogService: DialogService) { }

  ngOnInit(): void {
    this.productPopular.getPopular().subscribe(data=>{
      this.dataPopular=data;
      data.map(element => {
        this.vote =  (element.vote) / 20
      });
    })

    
      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
    this.primengConfig.ripple = true;
    }
    onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
    addToCart(id:number){

      this.productPopular.getListCart(id).subscribe(data=>this.dataListCart.push(data))
      this.count=this.dataListCart.length+1
      
    }
    ref:DynamicDialogRef
    showCart() {
      this.ref = this.dialogService.open(CartComponent, {
          data:{
            data:this.dataListCart,
            count:this.count
          },
          header: 'Choose a Product',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000
      });

  }
}
