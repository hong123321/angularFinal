import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css'],
  providers:[MessageService]
})
export class OderComponent implements OnInit {
  forms:FormGroup
  idUser:any
  product:any[]=[]
  constructor(private form:FormBuilder,private routes:ActivatedRoute,private data:AdminService,private route:Router,private mess:MessageService) { }

  ngOnInit(): void {
    this.idUser = this.routes.snapshot.paramMap.get('id');
    const id = Number(localStorage.getItem('token'))
    this.data.getOrderProductById(this.idUser).subscribe(data=>this.product.push(data)
    )
    this.forms= this.form.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]],
      id_product:[this.idUser],
      create_At:[new Date()],
      product:[this.product],
      id_user:[id]
    })
  }
  buy(e:any){
    console.log(e);
    this.data.orderProduct(e).subscribe()
    this.mess.add({severity:'success',key:"c", summary: 'Successful', detail: 'Order Success', life: 3000});
    setTimeout(()=>{
      this.route.navigate(['/home'])
    },2000);
  }

}
