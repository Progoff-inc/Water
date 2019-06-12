import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { News, UploadTypes, BaseEntity } from '../services/models';
import { WaterService } from '../services/water.service';
import { HttpEventType } from '@angular/common/http';
import { LoadService } from '../services/load.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  shows:any = {};
  news:News[];
  question:BaseEntity[];
  submitted = false;
  image = null;
  invalidImage = false;
  showBtn = false;
  

  constructor(private ws:WaterService, private router:Router, private ls:LoadService) { }

  ngOnInit() {
    this.submitted = false;
    this.image = null;
    this.invalidImage = false;
    this.showBtn = false;
    this.ws.getNews().subscribe(news => {
      this.news=news;
    })
    this.ws.getQuestions().subscribe(news => {
      this.question=news;
    })

    
  }

  save(news){
    if(!this.checkNew){
      return;
    }
    this.ls.showLoad = true;
    this.ls.load = 0;
    this.ws.updateNews(news).subscribe(id => {
      if(this.image){
        var formData = new FormData();
        formData.append('Data', this.image);
        this.ws.UploadFile(news.Id, UploadTypes.News, formData).subscribe(event=>{
          if(event.type == HttpEventType.UploadProgress){
            this.ls.load = Math.round(event.loaded/event.total * 100);
            
          }
          else if(event.type == HttpEventType.Response){
            this.ls.showLoad = false;
            this.ngOnInit();
          }
          
        })
      }else{
        this.ls.showLoad = false;
        this.ngOnInit();
      }
      
    })
  }

  remove(id){
    this.ws.removeNews(id).subscribe(x => {
      this.news = this.news.filter(x=>x.Id!=id);
    })
  }

  checkChange(){
    this.showBtn = true;
  }
  checkNew(nw:News){
    return nw.Name!='' && nw.Description!='' && (!!nw.Image || this.image);
  }
  show(s){
    this.submitted = false;
    this.image = null;
    this.invalidImage = false;
    this.showBtn = false;
    if(this.shows[s]){
      this.shows = {};
      return;
    }
    this.shows = {};
    this.shows[s] = true;
  }

  putFile(event){
    if(event.target.files[0].type=='image/jpeg' || event.target.files[0].type=='image/png'){
      this.image = <File>event.target.files[0];
      this.checkChange();
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
    return true;
  }

}
