import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'prog-alert',
  templateUrl: './prog-alert.component.html',
  styleUrls: ['./prog-alert.component.less']
})
export class ProgAlertComponent implements OnInit {
  alert:Alert = null;
  show: boolean = false;
  constructor(private _as: AlertService) { }
  ngOnInit() {
  }

  showAlert(alert:Alert){
    this.alert = alert;
    this.show = true;
    let af = this;
    
    setTimeout(() => {
      af.show = false;
    }, 5000)

  }

}

export interface Alert{
  type:AlertType;
  message: string;
} 

export enum AlertType{
  Success = "fa-check-circle",
  Warning = "fa-times-circle",
  Info = "fa-exclamation-circle"
}