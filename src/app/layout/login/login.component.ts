import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  forms:FormGroup

  tokens:string
  constructor(private http:JwtService,private fn:FormBuilder,private jwtsv:JwtService, private router: Router,private mess:MessageService) { }

  ngOnInit(): void {
    // this.jwtsv.getToken().subscribe(res=>this.tokens=res.request_token)
    this.forms= this.fn.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
 
    
  }
  login(e){
    // e.request_token=this.tokens
    this.http.login(e).subscribe(
      data =>  {
       if(data.length > 0){
        this.mess.add({severity:'success',key:"c", summary: 'Successful', detail: 'Login Success', life: 1500});
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
       }else{
        this.mess.add({severity:'error',key:"c", summary: 'Erorr', detail: 'Username of Password incorrect', life: 3000})
       }
      },
      err  => this.mess.add({severity:'error',key:"c", summary: 'Erorr', detail: 'Username of Password incorrect', life: 3000})
    )
  }
  register(){
    this.router.navigate(['/register']);

  }
}
