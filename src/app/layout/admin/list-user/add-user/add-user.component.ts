import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminService } from 'src/app/layout/service/admin.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  forms: FormGroup;
  constructor(
    public ref: DynamicDialogRef,
    private fn: FormBuilder,
    private data: AdminService,
    private confirms: ConfirmationService,
    private mess: MessageService,
    public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.forms= this.fn.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      age:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }

  addUser(e: any){
    console.log(e)
    const user = this.config.data.data
    this.confirms.confirm({
      message:'Are you sure you want to add the User?',
      header:'Add new User',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
        this.data.addUser(e).subscribe(
          data =>  {
            this.mess.add({key: 'c', severity: 'success', summary: 'Successful', detail: 'User Add Complete', life: 3000});
            user.push(e)
            this.ref.close();
          },
          err  =>  this.mess.add({key: 'c', severity: 'error', summary: 'Successful', detail: 'User delete Fail', life: 5000})
        )
      }
    })
  }
  get name() { return this.forms.get('username'); }
  get password() { return this.forms.get('password'); }
  get email() { return this.forms.get('email'); }
  get phone() { return this.forms.get('phone'); }
  get age() { return this.forms.get('age'); }
  get address() { return this.forms.get('address'); }
}