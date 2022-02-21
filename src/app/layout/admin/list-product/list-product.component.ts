import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any[];
  vote: any;
  hiden: true;
  constructor(
    private data: AdminService) { }

  ngOnInit(): void {
    this.data.getProduct().subscribe(data => {
      this.products = data;
      data.map(element => {
        this.vote =  (element.vote) / 20;
      }
      );
    });
  }

}
