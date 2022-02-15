import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from 'src/app/layout/service/admin.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:any
  forms: FormGroup
  constructor(public ref: DynamicDialogRef,private fn: FormBuilder,public config: DynamicDialogConfig,private data:AdminService, private confirm:ConfirmationService,private mess:MessageService) { }

  ngOnInit(): void {
    const  id = this.config.data.id
    console.log(id);
    this.data.getUserById(id).subscribe(data=>{
      console.log(data)
      
      this.user = data[0]
    })
    this.forms= this.fn.group({
      username:[],
      age:[],
      email:[],
      phone:[],
      address:[]
    })
  }
  update(e:any,id){
    this.confirm.confirm({
      message: 'Are you sure you want to Update the User?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.data.updateUser(e,id).subscribe(data=>{this.ref.close();})
        this.mess.add({key: 'c',severity:'success', summary: 'Successful', detail: 'User Update Complete', life: 3000})
    }
  })
   }
    

}
