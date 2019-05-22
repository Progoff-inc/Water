import { Component, OnInit } from '@angular/core';
import { Doc } from '../services/models';

@Component({
  selector: 'docs-main',
  templateUrl: './docs-main.component.html',
  styleUrls: ['./docs-main.component.less']
})
export class DocsMainComponent implements OnInit {
  docs:Doc[];
  docs1 = [];
  docs2 = [];
  constructor() { }

  ngOnInit() {
    this.docs = [{
        Id: 1,
        Image:'../../assets/images/main-page/doc.png',
        Name: 'ПРИКАЗ 1',
        Document:'',
      },
      {
        Id: 2,
        Image:'../../assets/images/main-page/pdf.png',
        Name: 'ПРИКАЗ 2',
        Document:'',
      },
      {
        Id: 3,
        Image:'../../assets/images/main-page/doc.png',
        Name: 'ПРИКАЗ 3',
        Document:'',
      },
      {
        Id: 4,
        Image:'../../assets/images/main-page/pdf.png',
        Name: 'ПРИКАЗ 4',
        Document:'',
      },
      {
        Id: 5,
        Image:'../../assets/images/main-page/doc.png',
        Name: 'ПРИКАЗ 5',
        Document:'',
      },
      {
        Id: 6,
        Image:'../../assets/images/main-page/pdf.png',
        Name: 'ПРИКАЗ 6',
        Document:'',
      },
      {
        Id: 7,
        Image:'../../assets/images/main-page/doc.png',
        Name: 'ПРИКАЗ 7',
        Document:'',
      },
      {
        Id: 8,
        Image:'../../assets/images/main-page/pdf.png',
        Name: 'ПРИКАЗ 8',
        Document:'',
      },
    ];
  }

}
