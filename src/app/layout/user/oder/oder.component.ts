import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import {MessageService} from 'primeng/api';
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
  constructor(
    private form: FormBuilder,
    private routes: ActivatedRoute,
    private adminService: AdminService,
    private route: Router,
    private mess: MessageService,
    private productSerice: ProductService) { }

  ngOnInit(): void {
    this.idProduct = this.routes.snapshot.paramMap.get('id');
    this.idProductRD= this.routes.snapshot.paramMap.get('id_RD');
    console.log(this.idProductRD);
    
    const id = Number(localStorage.getItem('token'));
    this.adminService.getOrderProductById(this.idProduct).subscribe(data => this.product.push(data)
    );
    this.forms = this.form.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      id_product: [this.idProduct],
      create_At: [new Date()],
      product: [this.product],
      id_user: [id]
    });
  }
  buy(e: any){
    console.log(e);
    this.adminService.orderProduct(e).subscribe(
      data=>{
        this.mess.add({severity: 'success', key: 'c', summary: 'Successful', detail: 'Order Success', life: 3000});
        this.productSerice.dalateCartItem(this.idProductRD).subscribe();
      }
    );
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 2000);
  }

}
