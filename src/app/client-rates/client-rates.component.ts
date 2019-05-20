import { Component, OnInit } from '@angular/core';
import { Doc } from '../services/models';

@Component({
  selector: 'client-rates',
  templateUrl: './client-rates.component.html',
  styleUrls: ['./client-rates.component.less']
})
export class ClientRatesComponent implements OnInit {
  docs:Doc[] = [
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png",
      Description:"об установлении тарифов на подключение (тех. присоединение) к системе водоснабзения на 2019 год."
    },
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png",
      Description:"об установлении тарифов на подключение (тех. присоединение) к системе водоснабзения на 2019 год."
    },
    {
      Id:1,
      Name:"ПРИКАЗ №157 ОБ УТВЕРЖДЕНИИ СБРОСА ПО СОСТАВУ СТОЧНЫХ ВОД",
      Image:"../../assets/images/doc.png",
      Description:"об установлении тарифов на подключение (тех. присоединение) к системе водоснабзения на 2019 год."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
