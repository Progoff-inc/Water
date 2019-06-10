import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  result = [];
  shows = {'first':true,'second':true,'third':true,'forth':true};
  searchStr:string;
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParam: any) => {
          this.searchStr = queryParam['searchStr'];
          if(sessionStorage.getItem('searchResultWater')){
            this.result = JSON.parse(sessionStorage.getItem('searchResultWater'));
          }else{
            this.router.navigate(['/']);
          }
      }
  );
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
