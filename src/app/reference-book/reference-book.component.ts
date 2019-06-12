import { Component, OnInit } from '@angular/core';
import { Doc, DocTypes } from '../services/models';
import { WaterService } from '../services/water.service';
import { Router } from '@angular/router';

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
  constructor(private ws:WaterService, private router:Router) { }

  ngOnInit() {
    this.ws.getTypeDocs([DocTypes.RefBook]).subscribe(docs => {
      this.docs = docs;
    })
  }

  getDoc(url){
    this.router.navigateByUrl(url);
  }

}
