import { Component, OnInit } from '@angular/core';
import { Doc } from '../services/models';

@Component({
  selector: 'ref-book',
  templateUrl: './reference-book.component.html',
  styleUrls: ['./reference-book.component.less']
})
export class ReferenceBookComponent implements OnInit {
  docs:Doc[] = [
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png"
    },
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png"
    },
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png"
    },
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
