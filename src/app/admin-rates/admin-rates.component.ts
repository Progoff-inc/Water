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
  ru = {
    firstDayOfWeek: 1,
    dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    weekHeader: 'Нед'
};
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
      this.items.forEach(rate => {
        rate.Prices.forEach(p => {
          p.DateStart = new Date(p.DateStart);
          p.DateFinish = new Date(p.DateFinish);
        })
        
      })
      this._initForm(this.items);
    })
    
  }

  private _initForm(items: Rate[]){
    this.items.forEach((r:Rate) => {
      const priceForm = new FormArray([]);
      r.Prices.forEach((p:Price) => {
        priceForm.push(new FormGroup({
          DateStart: new FormControl(p.DateStart, [Validators.required]),
          DateFinish: new FormControl(p.DateFinish, [Validators.required]),
          Price: new FormControl(p.Price, [Validators.required])
        }))
      })
      this.addForm.addControl(`${r.Name}-${r.Type}`, priceForm);
    })
  }

  getForms(){
    return Object.keys(this.addForm.controls);
  }

  getRatePrices(form: string){
    return <FormArray>this.addForm.get(form)
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }

}
