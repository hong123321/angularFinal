import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { AdminService } from '../../service/admin.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {UpdateUserComponent} from './update-user/update-user.component'
import { AddUserComponent } from './add-user/add-user.component';
@Component({
  
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers:[ConfirmationService,MessageService,DialogService]
})
export class ListUserComponent implements OnInit {
  listUser:any[]
  cols:any[]
  constructor(private dataUser:AdminService,private confSV:ConfirmationService,private mess:MessageService,private config:PrimeNGConfig,public dialogService: DialogService,) { }

  ngOnInit(): void {
    this.config.ripple=true
    this.dataUser.getUser().subscribe(data=>{
      this.listUser=data
    })
  }
  addUser(){
    this.ref = this.dialogService.open(AddUserComponent,{
      data:{
        data:this.listUser
      },
      header: 'Add new User',
      width: '50%',
      contentStyle: {"max-height": "1000px","min-height": "300px", "overflow": "auto", "justify-content": "center",    "display": "inherit"},
      baseZIndex: 10000
    })
  }
  delete(id:any,rowIndex:any){
    console.log('abc');
    this.confSV.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataUser.deleteUser(id).subscribe(
          data =>  {
            this.mess.add({key: 'c',severity:'success', summary: 'Successful', detail: 'User delete Complete', life: 5000})
            this.listUser= this.listUser.filter((input, i) => i !== rowIndex)
            console.log(data);
            
          },
          err  =>  console.log(err)
          
        )
      }
    })
  }
  ref: DynamicDialogRef;
  update(id:number){
    console.log(id);
    this.ref = this.dialogService.open(UpdateUserComponent, {
      header: 'Update user',
      data:{
        id:id
      },
      width: '50%',
      contentStyle: {"max-height": "1000px","min-height": "300px", "overflow": "auto", "justify-content": "center",    "display": "inherit"},
      baseZIndex: 10000
  })
  }
  

}
