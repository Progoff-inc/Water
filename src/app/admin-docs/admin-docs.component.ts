import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { DocTypes, Doc, UploadTypes } from '../services/models';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddService } from '../services/add.service';
import { WaterValidators } from '../services/water.validators';
import { Subscription, forkJoin } from 'rxjs';
import { LoadService } from '../services/load.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-admin-docs',
  templateUrl: './admin-docs.component.html',
  styleUrls: ['./admin-docs.component.less']
})
export class AdminDocsComponent extends AddService implements OnInit {
  docs: Doc[];
  description = '';
  tpattern=/(\.docx|\.pdf|\.txt|\.doc|\.xlsx|\.xls)$/i;
  ipattern=/(\.png|\.jpg)$/i;
  docTypes = Object.keys(DocTypes).map(t => {
    return {Id: t.toLowerCase(), Name: t.toLowerCase()}
  });
  public Editor = ClassicEditor;
  
  public config = {
    language: 'ru',
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
  };
  public model = {
    editorData: this.description
  };
  constructor(private _ws: WaterService, private _fb: FormBuilder, private _ls:LoadService) {
    super();
   }

  ngOnInit() {
    this._ws.getTypeDocs(<DocTypes[]>Object.keys(DocTypes)).subscribe(docs => {
      this.docs = docs;
    })

    this.addForm = this._fb.group({
      Name:['', Validators.required],
      Type:[null, Validators.required],
      Description: [''],
      Image:['', [Validators.required, WaterValidators.FileNameValidator(this.ipattern)]],
      Document:['', [Validators.required, WaterValidators.FileNameValidator(this.tpattern)]]
    })
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
  public setForm(id){
    this.item = this.docs.find(x => x.Id == id)
    this.addForm.patchValue(this.item);
  }

  public save(): void{
    if(this.addForm.invalid){
      return;
    }
    if(this.item){
      this._update();
    }else{
      this._add();
    }
  }

  private _add(): void{
    this._ls.showLoad = true;
    this._ws.addDoc({Name: this.v.Name, Type: this.v.Type, Description: this.v.Description}).subscribe(docId => {
      const formData = new FormData();
      formData.append('Image', this.v.Image);
      formData.append('Document', this.v.Document);
      this._ws.UploadFile(docId, UploadTypes.Docs, formData).subscribe(event=>{
        if(event.type == HttpEventType.UploadProgress){
          this._ls.load = Math.round(event.loaded/event.total * 100);
          
        }
        else if(event.type == HttpEventType.Response){
          this.items.unshift({
            Id: docId, 
            Image: event.body.Image, 
            Document: event.body.Document, 
            Name: this.v.Name, 
            Type: this.v.Type, 
            Description: this.v.Description
          });
          this._ls.showLoad = false;
          this.addForm.reset();
        }
        
      })
    })
  }

  private _update(){

  }


}


