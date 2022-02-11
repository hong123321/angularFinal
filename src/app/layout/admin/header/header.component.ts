import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
      label: 'List User',
      icon:'pi pi-users',
      routerLink:'home'
      },
      {
        label: 'List Product',
        icon:'pi pi-shopping-cart',
        routerLink:'listProduct'
        },
        {
          label: 'Order Management',
          icon:'pi pi-fw pi-file',
          routerLink:'managementProduct'
          } ,
          {
            label: 'List News',
            icon:'pi pi-fw pi-file',
            routerLink:'news'
            },        
    ]
  }

}
