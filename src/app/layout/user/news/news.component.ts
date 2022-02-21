import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  dataNews: any[];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(data => {
      this.dataNews = data;
      console.log(this.dataNews);
    }
    );
  }

}
