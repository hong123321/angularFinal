import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute ,Router} from '@angular/router';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { ProductService } from 'src/app/layout/service/product.service';
import { config } from 'process';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class CartComponent implements OnInit {
  hide:any
  listCart:any[]
  count:number = 0
  lengthItem: number
  constructor(private ref:DynamicDialogRef, public config: DynamicDialogConfig,private confSV:ConfirmationService,private mess:MessageService,private primengConfig: PrimeNGConfig, private route:ActivatedRoute,private routes:Router,private auth:JwtService,private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.hide= this.auth.isLoggednIn()
    this.primengConfig.ripple = true;
    this.productService.getCartItem().subscribe(data=>{
      this.listCart=data;
      this.lengthItem = this.listCart.length
    })
  }
  delete(rowIndex:number,id:any){
    this.confSV.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.listCart= this.listCart.filter((input, i) => i !== rowIndex) 
        this.productService.dalateCartItem(id).subscribe()
        this.mess.add({severity:'success',key:"c", summary: 'Successful', detail: 'Products Deleted', life: 3000});
        if(this.listCart.length===0){
          this.ref.close()
        }
      }
    })
   }
 buy(id:number){
   var ids = Math.floor(id)
  if(!this.hide){
    this.confSV.confirm({
      message: 'You need login to buy product, Do you want Login ?',
      header: 'Remind',
      icon: 'pi pi-exclamation-triangle',
      accept: () => { 
        this.ref.close()
        this.routes.navigate(['order',{ id: ids }])
      }
    })
  }
  else{
    this.ref.close()
    this.routes.navigate(['order',{ id: ids }])
  }
 }
}
