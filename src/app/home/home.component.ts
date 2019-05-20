import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { LoadService } from '../services/load.service';
import { News } from '../services/models';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private ls:LoadService, private ws: WaterService) { }

  ngOnInit() {
  }
}
