import { Component, OnInit, Injectable } from '@angular/core';
import { Doc, DocTypes, RateTypes, ClientTypes } from '../services/models';
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
  years = [2018, 2019, 2020];
  curYears = {};
  rateTypes = {};

  rates:any = [
    {
      Name:RateTypes.GetWater,
      Prices: [
        {
          DateStart: new Date(2018, 0),
          DateFinish: new Date(2018, 5, 30),
          Price: 26.46
        },
        {
          DateStart: new Date(2018, 6),
          DateFinish: new Date(2018, 11, 31),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 0),
          DateFinish: new Date(2019, 5, 30),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 6),
          DateFinish: new Date(2019, 11, 31),
          Price: 28.77
        },
        {
          DateStart: new Date(2020, 0),
          DateFinish: new Date(2020, 5, 30),
          Price: 28.01
        },
        {
          DateStart: new Date(2020, 6),
          DateFinish: new Date(2020, 11, 31),
          Price: 28.96
        }
      ]
    },
    {
      Name:RateTypes.GiveWater,
      Prices: [
        {
          DateStart: new Date(2018, 0),
          DateFinish: new Date(2018, 5, 30),
          Price: 26.46
        },
        {
          DateStart: new Date(2018, 6),
          DateFinish: new Date(2018, 11, 31),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 0),
          DateFinish: new Date(2019, 5, 30),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 6),
          DateFinish: new Date(2019, 11, 31),
          Price: 28.77
        },
        {
          DateStart: new Date(2020, 0),
          DateFinish: new Date(2020, 5, 30),
          Price: 28.01
        },
        {
          DateStart: new Date(2020, 6),
          DateFinish: new Date(2020, 11, 31),
          Price: 28.96
        }
      ]
    },
    {
      Name:RateTypes.DrinkWater,
      Prices: [
        {
          DateStart: new Date(2018, 0),
          DateFinish: new Date(2018, 5, 30),
          Price: 26.46
        },
        {
          DateStart: new Date(2018, 6),
          DateFinish: new Date(2018, 11, 31),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 0),
          DateFinish: new Date(2019, 5, 30),
          Price: 27.34
        },
        {
          DateStart: new Date(2019, 6),
          DateFinish: new Date(2019, 11, 31),
          Price: 28.77
        },
        {
          DateStart: new Date(2020, 0),
          DateFinish: new Date(2020, 5, 30),
          Price: 28.01
        },
        {
          DateStart: new Date(2020, 6),
          DateFinish: new Date(2020, 11, 31),
          Price: 28.96
        }
      ]
    }
  ]

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
    this.rateTypes[RateTypes.GetWater] = "Водоснабжение",
    this.rateTypes[RateTypes.GiveWater] = "Водоотведение",
    this.rateTypes[RateTypes.DrinkWater] = "Питьевая вода",
    forkJoin(this.ws.getTypeDocs([DocTypes.RatesPay, DocTypes.RatesConnect]),this.ws.getRates(ClientTypes.Client))
    .subscribe(([docs, rates]) => {
      this.docs = docs;
      if(rates.length>0){
        this.rates = rates;
      }
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
      return this.docs.filter(x => x.Type == type);
    }else{
      return [];
    }
    
  }

}
