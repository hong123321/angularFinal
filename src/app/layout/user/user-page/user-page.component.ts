import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { ConfirmationService } from 'primeng/api';
import { AdminService } from '../../service/admin.service';
import { ProductService } from '../../service/product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],

})
export class UserPageComponent implements OnInit {
  items: MenuItem[];
  text = 'Log Out';
  datauser: any[];
  selectedFile: File;
  imagePath: any;
  url: any;
  hide = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/JSON' })
  };
  constructor(
    private auth: JwtService,
    private confirm: ConfirmationService,
    private service: AdminService,
    private productSerive: ProductService,
    private mess: MessageService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    const id = Number(localStorage.getItem('token'));
    this.service.getUserById(id).subscribe(data => {
      this.datauser = data;
      console.log(data);
    }
    );
    this.items = [
      {
      label: 'Persional Information',
      icon: 'pi pi-fw pi-user',
      routerLink: 'information',
      },
      {
      label: 'Purchase order',
      icon: 'pi pi-shopping-cart',
      routerLink: 'orderinformation'
      },
      {
      label: this.text,
      icon: 'pi pi-sign-out',
      }
  ];
}
// tslint:disable-next-line: typedef
menu(event){
  if(event.target.innerText === this.text){
    this.confirm.confirm({
      message: 'Are you sure you want to Log Out ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.auth.logout();
      }
    });
  }
}
// tslint:disable-next-line: typedef
processFile(e: any) {

  // tslint:disable-next-line: prefer-const
  const files = e.target.files;
  const reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) => {
      this.url = reader.result;
      this.hide = false
  };
  const id = localStorage.getItem('token');
  this.selectedFile = e.target.files[0];
  const dataImage = {
    image: this.selectedFile.name
  };
  const uploadData = new FormData();
  uploadData.append('myfile', this.selectedFile, this.selectedFile.name);
  // this.http.post('http://localhost/angular/uploadAvatar.php', uploadData, {
  //   reportProgress: true,
  //   observe: 'events'
  // }).subscribe(
  //   data =>{ 
  //   }
  // );
  this.productSerive.changeAvt(dataImage, Number(id)).subscribe(
    data=> {
      this.mess.add({key: 'c', severity: 'success', summary: 'Success', detail: 'Change Avatar Success'});
    }
  );
}
}
