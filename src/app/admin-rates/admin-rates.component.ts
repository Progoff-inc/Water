import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { ClientTypes, Rate, Price } from '../services/models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-rates',
  templateUrl: './admin-rates.component.html',
  styleUrls: ['./admin-rates.component.less']
})
export class AdminRatesComponent implements OnInit {
  shows:any = { };
  items:Rate[] = [];
  rates: any = [];
  
  constructor( private _ws: WaterService) { 
  }

  ngOnInit() {
    forkJoin([
      this._ws.getRates(ClientTypes.Client),
      this._ws.getRates(ClientTypes.Business)
    ]).subscribe(([clientRates, businessRates]) => {
      this.items = [...clientRates, ...businessRates];
      this.items.forEach(rate => {
        rate.Prices.forEach(p => {
          p.DateStart = new Date(p.DateStart);
          p.DateFinish = new Date(p.DateFinish);
        })
        
      })
      this.rates = this.getRates();
    })
    
  }

  getRates(): {rateFormName: string, rate: Rate}[]{
    return this.items.map(r => {
      return {
        rateFormName: `${r.Name}_${r.Type}`,
        rate: r
      };
    })
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }

}
