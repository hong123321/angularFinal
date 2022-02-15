import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from 'src/app/layout/service/admin.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class ChangePasswordComponent implements OnInit {
  forms:FormGroup
  id:any
  oldPass:any
  password= new Object()
  constructor(private service:AdminService, private fn:FormBuilder,private config:DynamicDialogConfig,private mess:MessageService,public ref: DynamicDialogRef) { }

  ngOnInit(): void {
      this.forms = this.fn.group({
      oldpassword:[''],
      password:['',[Validators.required,Validators.minLength(6)]],
  })
  this.id = localStorage.getItem('token')
  this.service.UpdateUserAPI
  }
  change(e:any){
    delete e.oldpassword
    const user = this.config.data.data
    user.forEach(el=>
      this.oldPass=el.password
    )
    if(this.oldPass !== this.oldpassword){
      console.log(this.oldPass);
      console.log(this.oldpassword);
      this.mess.add({key: 'c',severity:'error', summary: 'Error', detail: 'Old password is not correct', life: 3000});
    }else{
      this.service.updatePass(e,this.id).subscribe(
        data=> {
          this.mess.add({key: 'c',severity:'success', summary: 'Success', detail: 'Change passWord Success'})
          setTimeout(() => {
            this.ref.close()
          }, 2000);
        }
      )
     
    }
    
  }
  get oldpassword() {return this.forms.get('oldpassword').value}
  get passwords() { return this.forms.get('password'); }

}
