import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../services/models';
import { WaterService } from '../services/water.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.less']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = null;
  shows:any = {};
  constructor(private _ws: WaterService) { }

  ngOnInit() {
    this._ws.getVacancies().subscribe(v => {
      this.vacancies = v;
    })
  }

  toggle(s){
    this.shows[s] = !this.shows[s];
  }

}
