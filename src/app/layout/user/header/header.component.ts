import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hide: any;
  logout: any;
  items: MenuItem[];
  Image:any[];
  activeItem: MenuItem;
  constructor(private auth: JwtService, private serive: AdminService) { }

  ngOnInit(): void {
    this.serive.getUserById(Number(localStorage.getItem('token'))).subscribe(data => this.Image = data
    );
    this.hide= this.auth.isLoggednIn();
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'News',
        icon: 'pi pi-fw pi-calendar',
        routerLink: 'news'
      },
  ];
    this.activeItem = this.items[0];
  }
  logOut(){
    this.auth.logout();
  }

}
