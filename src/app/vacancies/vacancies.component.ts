import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.less']
})
export class VacanciesComponent implements OnInit {
  vacancies = [{},{},{},{}];
  constructor() { }

  ngOnInit() {
  }

}
