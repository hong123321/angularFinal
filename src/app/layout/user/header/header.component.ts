import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { JwtService } from 'src/app/shared/service/jwt.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hide:any
  logout:any
  items: MenuItem[];
  
  activeItem: MenuItem;
  constructor(private auth:JwtService) { }

  ngOnInit(): void {
    this.hide= this.auth.isLoggednIn()

    this.items = [
      {
        label: 'Home', 
        icon: 'pi pi-fw pi-home',
        routerLink:'home'
      },
      {
        label: 'news',
        icon: 'pi pi-fw pi-calendar',
        routerLink:'news'
      },
      

  ];

  this.activeItem = this.items[0];
  }
  logOut(){
    this.auth.logout()
  }

}
