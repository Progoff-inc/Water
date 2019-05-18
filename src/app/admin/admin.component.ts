import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { News } from '../services/models';
import { WaterService } from '../services/water.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  shows:any = {};
  news:News[];
  submitted = false;
  image = null;
  invalidImage = false;
  showBtn = false;
  constructor(private ws:WaterService, private router:Router) { }

  ngOnInit() {
    this.ws.getNews().subscribe(news => {
      this.news=news;
    })
  }

  checkChange(){
    this.showBtn = true;
  }

  show(s){
    if(this.shows[s]){
      this.shows = {};
      return
    }
    this.shows[s] = true;
  }

  putFile(event){
    if(event.target.files[0].type=='image/jpeg' || event.target.files[0].type=='image/png'){
      this.image = <File>event.target.files[0];
      this.invalidImage = false;
    }else{
      this.invalidImage = true;
    }

    
  }
  unload(){
    this.image = null;
  }
  unloadLink(s){
    s.Image = null;
  }

}
