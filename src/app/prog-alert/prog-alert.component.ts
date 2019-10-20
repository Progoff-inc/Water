import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { AlertComponent } from 'ngx-bootstrap';

@Component({
  selector: 'prog-alert',
  templateUrl: './prog-alert.component.html',
  styleUrls: ['./prog-alert.component.less']
})
export class ProgAlertComponent implements OnInit {
  alerts: any[] = [];
  constructor(private _as: AlertService) { }
  ngOnInit() {
  }

  showAlert(alert:Alert){
    this.alerts.push(alert);

  }
 
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}

export interface Alert{
  type:AlertType;
  message: string;
} 

export enum AlertType{
  Success = "success",
  Warning = "warning",
  Info = "info",
  Danger = "danger"
}