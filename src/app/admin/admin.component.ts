import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { ProgAlertComponent } from '../prog-alert/prog-alert.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [AlertService]
})
export class AdminComponent implements OnInit {

  @ViewChild('alert') alert:ProgAlertComponent;

  constructor(private _as:AlertService){}
  ngOnInit(){
    this._as.alert = this.alert;
  }
}
