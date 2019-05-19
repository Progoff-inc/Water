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
  public myWin;
  constructor(private ls:LoadService, private ws: WaterService) { }

  ngOnInit() {
    this.ws.getNews().subscribe(data => {
      this.news = data;
    })
  }
}
