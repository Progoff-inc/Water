import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadService } from '../services/load.service';
import { WaterService } from '../services/water.service';
import { UploadTypes, News } from '../services/models';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.less']
})
export class AddNewsComponent implements OnInit {

  @Input() news:News[] = [];

  newForm:FormGroup;
  submitted = false;
  image = null;
  invalidImage = false;
  constructor(private fb:FormBuilder, private ls:LoadService, private ws:WaterService) { }

  ngOnInit() {
    this.submitted = false;
    this.image = null;
    this.invalidImage = false;
    this.newForm = this.fb.group({
      Name:['',Validators.required],
      Description:['',Validators.required]
    })
  }

  add(news){
    this.submitted=true;
    if(this.newForm.invalid || !this.image){
      return;
    }
    this.ls.showLoad = true;
    this.ls.load = 0;
    console.log(news);
    this.ws.addNews(this.newForm.value).subscribe(news => {
      if(this.image){
        var formData = new FormData();
        formData.append('Data', this.image);
        this.ws.UploadFile(news.Id, UploadTypes.News, formData).subscribe(event=>{
          if(event.type == HttpEventType.UploadProgress){
            this.ls.load = Math.round(event.loaded/event.total * 100);
            
          }
          else if(event.type == HttpEventType.Response){
            console.log(event.body)
            news.Image = event.body;
            this.news.unshift(news);
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
  get f() { return this.newForm.controls; };

}
