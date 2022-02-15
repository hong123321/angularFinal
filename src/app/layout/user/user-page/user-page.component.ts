import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { ConfirmationService } from 'primeng/api';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],

})
export class UserPageComponent implements OnInit {
  items: MenuItem[];
  text:string ='Log Out'
  datauser:any[]
  constructor(private auth:JwtService,private confirm:ConfirmationService,private service:AdminService) { }

  ngOnInit(): void {
    const id= Number(localStorage.getItem('token'))
    this.service.getUserById(id).subscribe(data=>this.datauser=data
    )
    
    this.items = [
      {
      label: 'Persional Information',
      icon:'pi pi-fw pi-user',
      routerLink:'information',
      },
      {
      label: 'Purchase order',
      icon:'pi pi-shopping-cart',
      routerLink:'orderinformation'
      },
      {
      label: this.text,
      icon:'pi pi-sign-out',
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
        this.auth.logout()
      }
    })
  }
}

}
