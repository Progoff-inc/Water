import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { DocTypes, Doc } from '../services/models';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-docs',
  templateUrl: './admin-docs.component.html',
  styleUrls: ['./admin-docs.component.less']
})
export class AdminDocsComponent implements OnInit {
  docs: Doc[];
  description = '';
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
  docForm: FormGroup;
  constructor(private _ws: WaterService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._ws.getTypeDocs(<DocTypes[]>Object.keys(DocTypes)).subscribe(docs => {
      this.docs = docs;
    })

    this.docForm = this._fb.group({
      Name:['', Validators.required],
      Type:[null, Validators.required],
      Description: ['']
    })
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }
  public setForm(id){
    console.log(id)
    this.docForm.patchValue(this.docs.find(x => x.Id == id));
    console.log(this.docForm.value)
  }

}
