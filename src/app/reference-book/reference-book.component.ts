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
  docs:Doc[] = [];
  arOfTypes = [];
  constructor(private ws:WaterService, private router:Router) { }

  ngOnInit() {
    this.ws.getDocTypes(false).subscribe(types => {
      types.forEach(el => {
        if (el.Name == 'Справочник абонента') {
          this.arOfTypes.push(el.Id);
        }
      });
      this.ws.getTypeDocs(this.arOfTypes).subscribe(docs => {
        this.docs = docs;
      })
    })
  }

  getDoc(url){
    this.router.navigateByUrl(url);
  }

}
