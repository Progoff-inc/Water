import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { LoadService } from '../services/load.service';
import { News } from '../services/models';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  news:News[];
  public myWin;
  constructor(private ls:LoadService, private ws: WaterService) { }

  ngOnInit() {
    this.ws.getNews().subscribe(data => {
      this.news = data;
    })
  }

  openNewWin(url) {
    this.myWin = open(url);
  }

}
