import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { News, UploadTypes, BaseEntity } from '../services/models';
import { WaterService } from '../services/water.service';
import { HttpEventType } from '@angular/common/http';
import { LoadService } from '../services/load.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  ngOnInit(){}

}
