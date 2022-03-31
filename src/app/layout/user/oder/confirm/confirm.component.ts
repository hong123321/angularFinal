import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminService } from 'src/app/layout/service/admin.service';
import { ProductService } from 'src/app/layout/service/product.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  ticketInformation: any;
  product:any[]=[];
  constructor(
    private router:Router,
    public ticketService: ProductService,
    private routes: ActivatedRoute,
    private adminService: AdminService,
    private route: Router,
    private mess: MessageService,

  ) { }

  ngOnInit(): void {
    this.ticketInformation = this.ticketService.ticketInformation;
    this.adminService.getOrderProductById(this.ticketInformation.id_product).subscribe(data => this.product.push(data));
  }
  prevPage() {
    this.router.navigate(['order/payment']);
  }
  complete(){
    console.log(this.ticketInformation);
    this.ticketInformation.product = this.product;
    this.adminService.orderProduct(this.ticketInformation).subscribe(
      data=>{
        this.mess.add({severity: 'success', key: 'c', summary: 'Successful', detail: 'Order Success', life: 3000});
        this.ticketService.dalateCartItem(this.ticketInformation.idProduct_RD).subscribe();
        this.ticketService.complete();
      }
    );
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 2000);
  }
}
