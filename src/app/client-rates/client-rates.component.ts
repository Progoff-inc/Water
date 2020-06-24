import { Component, OnInit, Injectable } from '@angular/core';
import { Doc, DocTypes, RateTypes, ClientTypes, Rate, DocType } from '../services/models';
import { WaterService } from '../services/water.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'client-rates',
  templateUrl: './client-rates.component.html',
  styleUrls: ['./client-rates.component.less']
})

export class ClientRatesComponent implements OnInit {
  docs:Doc[];
  shows = {};
  years = [];
  curYears = {};
  rateTypes = {};
  arOfTypes = [];

  rates:Rate[] = [];

  archs = [
    {Year:2012},
    {Year:2013},
    {Year:2014},
    {Year:2015},
    {Year:2016},
    {Year:2017}
  ]
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
      forkJoin(this.ws.getTypeDocs(this.arOfTypes),this.ws.getRates(ClientTypes.Client)).subscribe(([docs, rates]) => {
        this.docs = docs;
        if(rates.length>0){
          //this.rates = rates;
          rates.forEach(rate => {
            if (rate.Name != RateTypes.GetWater) {
              this.rates.push(rate);
            }
          });
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

  getDocs(type){
    if(this.docs){
      return this.docs.filter(x => x.TypeId == type).reverse();
    }else{
      return [];
    }
    
  }

}
