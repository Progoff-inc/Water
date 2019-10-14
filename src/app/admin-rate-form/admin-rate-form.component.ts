import { Component, OnInit, Input } from '@angular/core';
import { Rate, Price } from '../services/models';
import { AddService } from '../services/add.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-rate-form',
  templateUrl: './admin-rate-form.component.html',
  styleUrls: ['./admin-rate-form.component.less']
})
export class AdminRateFormComponent extends AddService implements OnInit {
  @Input() rate: Rate;
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

  public choosedPriceId: number;

  constructor(private _fb: FormBuilder) {
    super();
   }

  ngOnInit() {
    this.addForm = this._fb.group({
      DateStart: [null, Validators.required],
      DateFinish: [null, Validators.required],
      Price: [null, Validators.required]
    });

    // this.addForm.controls.DateStart.valueChanges.subscribe(ds => {
    //   console.log(ds);
    //   if(this.v.DateFinish && this.v.DateFinish>ds){
    //     let price = this.findPrice(ds, this.v.DateFinish);
    //     if(price){
    //       this.f.Price.setValue(price.Price);
    //       this.choosedPriceId = price.Id;
    //     }else{
    //       this.choosedPriceId = null;
    //     }
    //   }else{
    //     this.f.DateFinish.reset();
    //   }
    // })

    // this.addForm.controls.DateFinish.valueChanges.subscribe(df => {
    //   if(this.v.DateStart && this.v.DateStart<df){
    //     let price = this.findPrice(this.v.DateStart, df);
    //     if(price){
    //       this.f.Price.setValue(price.Price);
    //       this.choosedPriceId = price.Id;
    //     }else{
    //       this.choosedPriceId = null;
    //     }
    //   }else{
    //     this.f.DateStart.reset();
    //   }
    // })
  }

  setDateStart(ds){
    // this.choosedPriceId = null;
    // if(this.v.DateFinish && this.v.DateFinish>ds){
    //   let price = this.findPrice(ds, this.v.DateFinish);
    //   if(price){
    //     this.choosePrice(price.Id, price);
    //   }
    // }else{
    //   this.f.DateFinish.reset();
    // }
  }

  setDateFinish(df){
    // this.choosedPriceId = null;
    // if(this.v.DateStart && this.v.DateStart<df){
    //   let price = this.findPrice(this.v.DateStart, df);
    //   if(price){
    //     this.choosePrice(price.Id, price);
    //   }
    // }else{
    //   this.f.DateStart.reset();
    // }
  }

  findPrice(dateStart: Date, dateFinish:Date){
    return this.rate.Prices.find(p => p.DateStart.toString() == dateStart.toString() 
    && p.DateFinish.toString() == dateFinish.toString());
  }

  choosePrice(id: number, price?: Price): void{
    if(!price){
      price = this.rate.Prices.find(p => p.Id == id);
    }
    this.item = price;
    this.addForm.patchValue(price, {emitEvent: false});
    
    this.choosedPriceId = id;
    this.update = {};
    this.setSubscriptions();
  }

  clearForm(){
    this.choosedPriceId = null;
    this.addForm.reset();
  }

  save(){
    if(this.addForm.invalid){
      return;
    }

    if(this.choosedPriceId){
      let price = this.rate.Prices.find(p => p.Id==this.choosedPriceId);
      Object.assign(price, this.v);
      this.update = {};
    }else{
      this.rate.Prices.push({
        Id: this.rate.Prices.length + 111,
        PriceTypeId: this.rate.Id,
        ...this.addForm.value
      });
      this.addForm.reset();
      
    }
  }



}
