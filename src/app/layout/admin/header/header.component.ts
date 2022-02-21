import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { JwtService } from 'src/app/shared/service/jwt.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  items: MenuItem[];
  text = 'Log out';
  constructor(
    private auth: JwtService,
    private confirm: ConfirmationService,
    // private service: AdminService,
    // private productSerive: ProductService,
    private mess: MessageService,
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'List User',
        icon: 'pi pi-users',
        routerLink: 'home'
      },
      {
        label: 'List Product',
        icon: 'pi pi-shopping-cart',
        routerLink: 'listProduct'
      },
      {
        label: 'Order Management',
        icon: 'pi pi-fw pi-file',
        routerLink: 'managementProduct'
      },
      {
        label: 'List News',
        icon: 'pi pi-fw pi-file',
        routerLink: 'news'
      },
      {
        label: this.text,
        icon: 'pi pi-sign-out',
      }
    ]
  }
  menu(event){
    if(event.target.innerText === this.text){
      this.confirm.confirm({
        message: 'Are you sure you want to Log Out ?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.auth.logout_admin();
        }
      });
    }
  }
}
