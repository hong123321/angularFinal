import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-managament-product',
  templateUrl: './managament-product.component.html',
  styleUrls: ['./managament-product.component.css']
})
export class ManagamentProductComponent implements OnInit {
  user: any[];
  id: any;
  product: any[]=[];
  constructor(private data: AdminService) { }
  ngOnInit(): void {
    this.data.getOrderProduct().subscribe(datas =>
          {
            this.user=datas;
            datas.forEach( element => {
              this.product.push(element.product);
            });
          }
      );
  }

}
