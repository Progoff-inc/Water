import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {
  
  constructor(private ws:WaterService, private router:Router, private ls:LoadService) { }

  ngOnInit() {
    
  }
  search(str){
    let s = str.value;
    if (s!="") {
      this.ls.showLoad = true;
      this.ws.search(s).subscribe(res => {
        sessionStorage.setItem('searchResultWater', JSON.stringify(res));
        this.ls.showLoad = false;
        str.value='';
        this.router.navigate(['/search'], 
        {
          queryParams:{
              'searchStr': s
          }
        });
      }) 
    }
  }
  searchBtn(e, str){
    if(e.key=='Enter'){
      this.search(str);
    }
  }

}
