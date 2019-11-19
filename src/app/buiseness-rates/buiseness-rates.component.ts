import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { RateTypes, DocTypes, Doc, ClientTypes, Rate } from '../services/models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'buiseness-rates',
  templateUrl: './buiseness-rates.component.html',
  styleUrls: ['./buiseness-rates.component.less']
})
export class BuisenessRatesComponent implements OnInit {
  docs:Doc[];
  shows = {};
  years = [];
  curYears = {};
  rateTypes = {};
  rates:Rate[] = [];
  arOfTypes = [];

  constructor( public ws:WaterService) { }

  ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = -10; i < 10; i++) {
      if ((year+i)>=2018) {
        this.years.push(year+i);
      };
    }
    this.rateTypes[RateTypes.GetWater] = "Водоснабжение",
    this.rateTypes[RateTypes.GiveWater] = "Водоотведение",
    this.rateTypes[RateTypes.DrinkWater] = "Питьевая вода",
    this.ws.getDocTypes(false).subscribe(types => {
      types.forEach(el => {
        if (el.Name == 'Тарифы' || el.Name == 'Тарифы на подключение') {
          this.arOfTypes.push(el.Id);
        }
      });
      forkJoin(this.ws.getTypeDocs(this.arOfTypes),this.ws.getRates(ClientTypes.Business)).subscribe(([docs, rates]) => {
        this.docs = docs;
        if(rates.length>0){
          this.rates = rates;
        }
      })
    })
  }
  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.curYears[s] = new Date().getFullYear();
    this.shows[s]=true;
  }

  getRate(r){
    return r.Prices.filter(x => new Date(x.DateStart).getFullYear()==Number(this.curYears[r.Name]));
  }

}
