import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/layout/service/admin.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [DialogService, MessageService]
})
export class PersonalInformationComponent implements OnInit {
  constructor(
  private service: AdminService,
  public dialogService: DialogService) { }
  id: any;
  dataUser: any[];
  ref: DynamicDialogRef;
  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    this.service.getUserById(this.id).subscribe(data =>
      {
      this.dataUser = data ;
      console.log(data);
      }
    );
  }
  // tslint:disable-next-line: typedef
  changePass(){
    this.ref = this.dialogService.open(ChangePasswordComponent, {
      data: {
        data: this.dataUser
      },
      header: 'Change Password',
      width: '50%',
      contentStyle: {'max-height': '1000px', 'min-height': '300px', overflow: 'auto', 'justify-content': 'center',    display: 'inherit'},
      baseZIndex: 10000
    });
  }
}
