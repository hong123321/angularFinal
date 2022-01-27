import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute ,Router} from '@angular/router';
import { JwtService } from 'src/app/shared/service/jwt.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class CartComponent implements OnInit {
  hide:any
  listCart:any[]
  count:number
  constructor(private ref:DynamicDialogRef, public config: DynamicDialogConfig,private confSV:ConfirmationService,private mess:MessageService,private primengConfig: PrimeNGConfig, private route:ActivatedRoute,private routes:Router,private auth:JwtService
  ) { }

  ngOnInit(): void {
    this.hide= this.auth.isLoggednIn()
    const  cartItem = this.config.data.data
    const  count = this.config.data.count
    this.listCart=cartItem
    this.count=count
    this.primengConfig.ripple = true;
  }
  delete(rowIndex:number){
    this.confSV.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.listCart= this.listCart.filter((input, i) => i !== rowIndex)   
        this.mess.add({severity:'success',key:"c", summary: 'Successful', detail: 'Products Deleted', life: 3000});
        if(this.listCart.length===0){
          this.ref.close()
        }
      }
    })
   }
 buy(id:number){
  if(!this.hide){
    this.confSV.confirm({
      message: 'You need login to buy product, Do you want Login ?',
      header: 'Remind',
      icon: 'pi pi-exclamation-triangle',
      accept: () => { 
        this.ref.close()
        this.routes.navigate(['order',{ id: id }])
      
      }
    })
  }
  else{
    this.ref.close()
    this.routes.navigate(['order',{ id: id }])

  }
   
 }
}
