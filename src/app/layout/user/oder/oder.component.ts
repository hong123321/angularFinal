import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute, RouterLink } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import {MenuItem, MessageService} from 'primeng/api';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css'],
  providers: [MessageService]
})
export class OderComponent implements OnInit {
  forms: FormGroup;
  idProduct: any;
  idProductRD: any;
  product: any[] = [];
  items: MenuItem[];
  activeIndex: number = 1;
  constructor(
    private form: FormBuilder,
        private routes: ActivatedRoute,
 ) { }

  ngOnInit(): void {
    this.idProduct = this.routes.snapshot.paramMap.get('id');
    this.idProductRD= this.routes.snapshot.paramMap.get('id_RD');
    // console.log(this.idProductRD);
    


    // );
    // this.forms = this.form.group({
    //   name: ['', [Validators.required]],
    //   age: ['', [Validators.required]],
    //   phone: ['', [Validators.required]],
    //   address: ['', [Validators.required]],
    //   id_product: [this.idProduct],
    //   create_At: [new Date()],
    //   product: [this.product],
    //   id_user: [id]
    // });
    this.items = [
    {
      label: 'Personal',
      routerLink: ['personal',{id: this.idProduct, idRD: this.idProductRD}],
      command: (event: any) => {
        this.activeIndex = 0;
    }
    },
    {
      label: 'Payment',
      routerLink: 'payment',
      command: (event: any) => {
        this.activeIndex = 1;
    }
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation',
      command: (event: any) => {
        this.activeIndex = 2;
    }
    }
];
}
  buy(e: any){
    console.log(e);
    
  }

}
