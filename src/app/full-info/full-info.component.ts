import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { LoadService } from '../services/load.service';
import { Doc, DocTypes } from '../services/models';

@Component({
  selector: 'full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.less']
})
export class FullInfoComponent implements OnInit {
  docs:Doc[];
  types = {};
  constructor(private ws:WaterService, private ls:LoadService) {
    this.types[DocTypes.Props] = "Реквизиты";
    this.types[DocTypes.Constituent] = "Учредительные документы";
    this.types[DocTypes.Bookkeeping] = "Бухгалтерская отчетность";
    this.types[DocTypes.Allowing] = "Разрешительная документация";
    this.types[DocTypes.Evaluation] = "Специальная оценка условий труда";
   }

  ngOnInit() {
    this.ls.showLoad = true;
    this.ws.getTypeDocs([DocTypes.Allowing, DocTypes.Bookkeeping, DocTypes.Constituent, DocTypes.Evaluation, DocTypes.Props]).subscribe(docs => {
      this.docs = docs;
      console.log(docs);
      this.ls.showLoad = false;
    })
  }

  getDocs(prop){
    if(this.docs){
      return this.docs.filter(x => x.Type == prop);
    }
  }

  get docTypes() { 
    return Object.keys(this.types);
  }

}
