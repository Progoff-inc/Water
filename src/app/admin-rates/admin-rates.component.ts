import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { AddService } from '../services/add.service';
import { ClientTypes } from '../services/models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-rates',
  templateUrl: './admin-rates.component.html',
  styleUrls: ['./admin-rates.component.less']
})
export class AdminRatesComponent extends AddService implements OnInit {

  constructor( private _ws: WaterService) { 
    super();
  }

  ngOnInit() {
    forkJoin([
      this._ws.getRates(ClientTypes.Client),
      this._ws.getRates(ClientTypes.Business)
    ]).subscribe(([clientRates, businessRates]) => {
      this.items = [...clientRates, ...businessRates];
    })
    
  }

}
