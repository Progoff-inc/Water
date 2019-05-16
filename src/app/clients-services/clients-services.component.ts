import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clients-services',
  templateUrl: './clients-services.component.html',
  styleUrls: ['./clients-services.component.less']
})
export class ClientsServicesComponent implements OnInit {
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
