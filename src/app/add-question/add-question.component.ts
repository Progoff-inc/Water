import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import { LoadService } from '../services/load.service';
import { WaterService } from '../services/water.service';
import { HttpEventType } from '@angular/common/http';
import { UploadTypes, BaseEntity } from '../services/models';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.less']
})
export class AddQuestionComponent implements OnInit {
  newForm:FormGroup;
  faqs:BaseEntity[];
  submitted = false;
  //public Editor = ClassicEditor;
  showBtn = false;
  shows:any = {};
  
  // public config = {
  //   language: 'ru',
  //   toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
  // };
  constructor(private fb:FormBuilder, private ls:LoadService, private ws:WaterService) { }

  ngOnInit() {
    this.submitted = false;
    this.newForm = this.fb.group({
      Name:['',Validators.required],
      Description:['',Validators.required]
    })
    this.ws.getQuestions().subscribe(faq =>{
      this.faqs = faq.Questions;
    })
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  add(){
    this.submitted=true;
    if(this.newForm.invalid){
      return;
    }
    this.ls.showLoad = true;
    this.ls.load = 0;
    this.ws.addQuestion(this.newForm.value).subscribe(id => {
      let faq={
        Id:id,
        Name:this.newForm.value.Name,
        Description:this.newForm.value.description
      }
      this.faqs.unshift(faq);
      this.ls.showLoad = false;
      this.ngOnInit();
    });
  }

  save(news){
    console.log(news);
    this.ls.showLoad = true;
    this.ls.load = 0;
    this.ws.updateQuestion(news).subscribe(id => {
      this.ls.showLoad = false;
      this.ngOnInit(); 
    })
  }

  remove(id){
    this.ws.removeQuestion(id).subscribe(x => {
      this.faqs = this.faqs.filter(x=>x.Id!=id);
    })
  }

  checkChange(){
    this.showBtn = true;
  }
  checkNew(nw){
    return nw.Name!='' && nw.Description!='';
  }
  show(s){
    this.submitted = false;
    this.showBtn = false;
    if(this.shows[s]){
      this.shows = {};
      return;
    }
    this.shows = {};
    this.shows[s] = true;
  }
  get f() { return this.newForm.controls; };
}
