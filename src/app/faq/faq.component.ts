import { Component, OnInit } from '@angular/core';
import { BaseEntity } from '../services/models';
import { WaterService } from '../services/water.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {
  shows:any;
  faq:BaseEntity[];
  constructor(private ws:WaterService) {
    this.shows={first:true};
  }

  ngOnInit() {
    this.ws.getQuestions().subscribe(q => {
      this.faq = q.Questions;
    })
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }
}
