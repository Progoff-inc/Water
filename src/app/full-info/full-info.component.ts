import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { LoadService } from '../services/load.service';
import { Doc, DocTypes } from '../services/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.less']
})
export class FullInfoComponent implements OnInit {
  docs:Doc[];
  curType:string;
  types = {};
  constructor(private ws:WaterService, private ls:LoadService, private router:ActivatedRoute) {
    this.types[DocTypes.Props] = "Реквизиты";
    this.types[DocTypes.Constituent] = "Учредительные документы";
    this.types[DocTypes.Bookkeeping] = "Бухгалтерская отчетность";
    this.types[DocTypes.Allowing] = "Разрешительная документация";
    this.types[DocTypes.Evaluation] = "Специальная оценка условий труда";
    this.types[DocTypes.VZU] = "Свободные мощности ВЗУ";
   }

  ngOnInit() {
    
    this.ls.showLoad = true;
    this.ws.getTypeDocs([DocTypes.Allowing, DocTypes.Bookkeeping, DocTypes.Constituent, DocTypes.Evaluation, DocTypes.Props, DocTypes.VZU]).subscribe(docs => {
      this.docs = docs;
      this.ls.showLoad = false;
    })
  }

  go(param){
    const element = document.querySelector ( '#'+param );
    element.scrollIntoView ( !!element );
    this.curType=param;
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
