import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, HostListener } from '@angular/core';
import { WaterService } from '../services/water.service';
import { News } from '../services/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit, AfterViewChecked {
  news:News[];
  id:any;
  firstTime = true;
  constructor(private ws:WaterService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.firstTime = true;
    this.ws.getLimitNews(100).subscribe(news => {
      this.news = news;
    })
  }
  ngAfterViewChecked(){
    if(this.firstTime && this.news && this.id && document.querySelector ( '#new'+this.id ) && window.pageYOffset==0 ){
      setTimeout(() => {
        this.go(this.id);
        this.firstTime=false;
      },100);
    }
  }
  go(param){
    const element = document.querySelector ( '#new'+param );
    element.scrollIntoView ( !!element );
  }

}
