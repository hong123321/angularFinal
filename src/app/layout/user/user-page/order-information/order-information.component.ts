import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/layout/service/admin.service';
@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {
  listOrder:any[]=[]
  lisproduct:any[]=[]
  constructor(private seerive:AdminService) { }

  ngOnInit(): void {
    this.seerive.getOrderProduct().subscribe(data=>
      {
       const product = data.filter(el=>el.id_user ===Number(localStorage.getItem('token')))
       console.log(product);
      product.forEach(el=>{
        console.log(el.product);
        this.lisproduct.push(el.product)
        console.log(this.lisproduct);
      })
      this.lisproduct.map(el=>{
        el.map(el=>{
          console.log(el);
          this.listOrder.push(el)
          console.log(this.listOrder);
        }
        )
      }
      )
      }
    )
  }

}
