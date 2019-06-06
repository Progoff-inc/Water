import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  result = [];
  shows = {};
  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('searchResultWater')){
      this.result = JSON.parse(sessionStorage.getItem('searchResultWater'));
      this.shows['first'] = true;
    }else{
      this.router.navigate(['/']);
    }
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }

  // ngOnDestroy(){
  //   sessionStorage.removeItem('searchResultWater');
  // }

  

}
