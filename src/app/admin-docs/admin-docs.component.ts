import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { DocTypes, Doc } from '../services/models';

@Component({
  selector: 'app-admin-docs',
  templateUrl: './admin-docs.component.html',
  styleUrls: ['./admin-docs.component.less']
})
export class AdminDocsComponent implements OnInit {
  docs: Doc[];
  constructor(private _ws: WaterService) { }

  ngOnInit() {
    this._ws.getTypeDocs(<DocTypes[]>Object.keys(DocTypes)).subscribe(docs => {
      this.docs = docs;
    })
  }

}
