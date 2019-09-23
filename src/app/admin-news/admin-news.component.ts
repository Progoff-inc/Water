import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { UploadTypes, BaseEntity, News } from '../services/models';
import { WaterService } from '../services/water.service';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.less']
})
export class AdminNewsComponent implements OnInit {

  shows:any = {};
  news:News[];
  submitted = false;
  image = null;
  invalidImage = false;
  showBtn = false;
  public Editor = ClassicEditor;
  
  public config = {
    language: 'ru',
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
  };

  constructor(private ws:WaterService, private router:Router, private ls:LoadService) { }

  ngOnInit() {
    this.submitted = false;
    this.image = null;
    this.invalidImage = false;
    this.showBtn = false;
    this.ws.getNews().subscribe(news => {
      this.news=news;
    })

    
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  save(news){
    if(!this.checkNew(news)){
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
    return nw.Name!='' && nw.Description!='' && !this.invalidImage;
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
