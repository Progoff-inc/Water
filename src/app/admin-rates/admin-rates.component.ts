import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { AddService } from '../services/add.service';
import { ClientTypes, Rate, Price } from '../services/models';
import { forkJoin } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-rates',
  templateUrl: './admin-rates.component.html',
  styleUrls: ['./admin-rates.component.less']
})
export class AdminRatesComponent extends AddService implements OnInit {
  shows:any = { };
  constructor( private _ws: WaterService) { 
    super();
  }

  ngOnInit() {
    this.addForm = new FormGroup({});
    forkJoin([
      this._ws.getRates(ClientTypes.Client),
      this._ws.getRates(ClientTypes.Business)
    ]).subscribe(([clientRates, businessRates]) => {
      this.items = [...clientRates, ...businessRates];
      this._initForm(this.items);
    })
    
  }

  private _initForm(items: Rate[]){
    this.items.forEach((r:Rate) => {
      const priceForm = new FormArray([]);
      r.Prices.forEach((p:Price) => {
        priceForm.push(new FormGroup({
          DateStart: new FormControl(p.DateStart, [Validators.required]),
          FinishStart: new FormControl(p.DateFinish, [Validators.required]),
          Price: new FormControl(p.Price, [Validators.required])
        }))
      })
      this.addForm.addControl(`${r.Name}-${r.Type}`, priceForm);
    })
    console.log(this.addForm)
    console.log(this.items)
    console.log(this.addForm.value)
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }

}
