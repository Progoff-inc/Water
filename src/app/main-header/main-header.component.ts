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
    this.ls.showLoad = true;
    this.ws.search(str).subscribe(res => {
      sessionStorage.setItem('searchResultWater', JSON.stringify(res));
      this.ls.showLoad = false;
      this.router.navigate(['/search'], 
      {
        queryParams:{
            'searchStr': str
        }
    });
    })
  }
  searchBtn(e, str){
    if(e.key=='Enter'){
      this.search(str);
    }
  }

}
