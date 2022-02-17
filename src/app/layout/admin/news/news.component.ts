import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  forms: FormGroup
  selecttedFile:File
  constructor(private fn: FormBuilder,private mess:MessageService,private service:AdminService,private http:HttpClient) { }

  ngOnInit(): void {
    this.forms= this.fn.group({
      title:['',[Validators.required]],
      decription:['',[Validators.required]],
      image:['',[Validators.required]],
   
    })
  }
  onSubmit(e){
    console.log(e);
    e.image = this.selecttedFile.name
    this.service.postNews(e).subscribe(
      data=>console.log(data)
      
    );
    const uploadData= new FormData();
    uploadData.append("myfile", this.selecttedFile,this.selecttedFile.name)
    this.http.post('http://localhost:80/angular/uploadImgNews.php',uploadData,{
      reportProgress:true,
      observe:'events'
    }).subscribe(
      data=>console.log(data)
    )
    this.mess.add({key: 'c',severity:'success', summary: 'Successful', detail: 'Add Product Complete', life: 3000});
    
  }
  uploadimg(e:any){
    this.selecttedFile = e.target.files[0]
    const type = this.selecttedFile.type
    if(!type.match(/image\/*/)){
      this.mess.add({key: 'c',severity:'error', summary: 'Error', detail: 'Incorrect format, please upload image file', life: 3000})
      this.forms.controls.img.reset()
    }
  }
}
