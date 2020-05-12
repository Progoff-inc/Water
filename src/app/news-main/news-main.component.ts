import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { WaterService } from '../services/water.service';
import { News, Image } from '../services/models';

@Component({
  selector: 'news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.less']
})
export class NewsMainComponent implements OnInit {
  news:News[];
  newsMain:News[];
  imageAr = [];
  //private readonly defaultLogo = "http://vdknf.ru/water/Files/logo_vdknf.png";
  constructor(private ls:LoadService, private ws: WaterService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ws.getLimitNews(4).subscribe(data => {
      this.news = data;
      this.news.forEach(el => {
        if (el.Name.length>30) {
          el.Name = el.Name.substr(0,30)+'...'; 
        }
      });
      this.ws.getImages().subscribe(images => {
        images.forEach(el => {
          this.imageAr.push(el.Image)
        });
      })
      this.ls.showLoad = false;
    })
  }
}
