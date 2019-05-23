import { Component, OnInit } from '@angular/core';
import { Doc } from '../services/models';
import { WaterService } from '../services/water.service';

@Component({
  selector: 'docs-main',
  templateUrl: './docs-main.component.html',
  styleUrls: ['./docs-main.component.less']
})
export class DocsMainComponent implements OnInit {
  docs:Doc[];
  
  constructor(private ws:WaterService) { }

  ngOnInit() {
    this.ws.getImportantDocs().subscribe(docs => {
      this.docs = docs;
    })
  }

}
