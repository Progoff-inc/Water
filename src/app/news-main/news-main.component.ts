import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { WaterService } from '../services/water.service';
import { News } from '../services/models';

@Component({
  selector: 'news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.less']
})
export class NewsMainComponent implements OnInit {
  news:News[];
  newsMain:News[];
  imageAr:string[];
  private readonly defaultLogo = "http://vdknf.ru/water/Files/logo_vdknf.png";
  constructor(private ls:LoadService, private ws: WaterService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ws.getLimitNews(4).subscribe(data => {
      this.news = data;
      this.imageAr = [
        'http://vdknf.ru/water/Files/new_1_narofominsk2.jpg',
        'http://vdknf.ru/water/Files/logo_vdknf.png',
      ]
      this.ls.showLoad = false;
    })
  }
}
