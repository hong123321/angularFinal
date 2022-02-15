import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formsRegister:FormGroup
  constructor(private http:JwtService,private fn:FormBuilder,private jwtsv:JwtService, private router: Router,private mess:MessageService) { }

  ngOnInit(): void {
    this.formsRegister = this.fn.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      age:['',[Validators.required]],
      address:['',[Validators.required]]

    })
  }
  register(e:any){
    this.http.register(e).subscribe(
      data=>{
        
        this.mess.add({key: 'c',severity:'success', summary: 'Successful', detail: 'Sign Up Success', life: 3000})
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      }
    )
    
  }
  get username() { return this.formsRegister.get('username'); }
  get password() { return this.formsRegister.get('password'); }
  get email() { return this.formsRegister.get('email'); }
  get phone() { return this.formsRegister.get('phone'); }
  get age() { return this.formsRegister.get('age'); }
  get address() { return this.formsRegister.get('address'); }


}
