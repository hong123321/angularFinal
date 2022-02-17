import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/layout/service/product.service'; 
@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {
  dataNews:any
  listDataNews:any[]
  constructor(private route: ActivatedRoute,private service:ProductService,private routes:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.service.getNewsById(id).subscribe(data=>{
      this.dataNews=data
      console.log(data);
    }
    )
    this.service.getNews().subscribe(data=>{
      this.listDataNews=data
    })
    
    
  }
  move(id){
    this.routes.navigate(['./detail',{id:id}])
    setTimeout(() => {
      location.reload()
    }, 300);
  }
}
