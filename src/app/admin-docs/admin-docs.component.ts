import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { DocTypes, Doc } from '../services/models';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddService } from '../services/add.service';

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
  constructor(private _ws: WaterService, private _fb: FormBuilder) {
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
      Image:['', Validators.pattern(this.ipattern)],
      Document:['', Validators.pattern(this.tpattern)]
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
    console.log(this.item);
    this.addForm.setValue({
      Name: this.item.Name,
      Type: this.item.Type,
      Description: this.item.Description,
      Image: '',
      Document: ''
    });
  }


}
