import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.less']
})
export class BusinessServicesComponent implements OnInit {
  shows = {first:true};
  constructor() { }

  ngOnInit() {
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }

}
