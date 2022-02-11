import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  uploadedFiles: any[] = [];
  forms: FormGroup
  filename:string
  selecttedFile:File
  constructor(private fn: FormBuilder,private serviceAdmin:AdminService, private http:HttpClient,private confirm:ConfirmationService,private mess:MessageService) { }

  ngOnInit(): void {
    this.forms= this.fn.group({
      name:['',[Validators.required]],
      img:['',[Validators.required]],
      price:['',[Validators.required]],
      vote:['',[Validators.required]],
      view:['',[Validators.required]]
    })
  }
  uploadimg(e:any){
    this.selecttedFile = e.target.files[0]
    const type = this.selecttedFile.type
    if(!type.match(/image\/*/)){
      this.mess.add({key: 'c',severity:'error', summary: 'Error', detail: 'AIncorrect format, please upload image file', life: 3000})
      this.forms.controls.img.reset()
    }
  }
  onSubmit(e:any){
    console.log(e);
    this.confirm.confirm({
      message: 'Are you sure you want to Add new Product?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        e.img = this.selecttedFile.name
        this.serviceAdmin.addProduct(e).subscribe();
        const uploadData= new FormData();
        uploadData.append("myfile", this.selecttedFile,this.selecttedFile.name)
        this.http.post('http://localhost:80/angular/upload.php',uploadData,{
          reportProgress:true,
          observe:'events'
        }).subscribe(
          data=>console.log(data)
        )
        this.mess.add({key: 'c',severity:'success', summary: 'Successful', detail: 'Add Product Complete', life: 3000})
        
    }
  })
  }
}
