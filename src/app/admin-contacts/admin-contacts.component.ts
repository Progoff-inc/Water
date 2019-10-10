import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { Contact } from '../services/models';
import { AddService } from '../services/add.service';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.less']
})
export class AdminContactsComponent extends AddService implements OnInit {
  contacts:Contact[] = null;
  constructor( private _ws:WaterService, private _fb:FormBuilder) {
    super();
   }

  ngOnInit() {
    this._ws.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts)
      this.items = contacts;
    })

    this.addForm = this._fb.group({
      Head:[null, Validators.required],
      Time:[null, Validators.required],
      Boss:[null, Validators.required],
      Tel: new FormGroup({}),
      Address: new FormGroup({}),
      Email: new FormGroup({})
    })
  }


  public setForm(id): void{
    console.log(id)
    this.item = this.contacts.find(c => c.Id == id);
    console.log(this.item)
    this.addForm.patchValue({Head: this.item.Head, Time: this.item.Time, Boss: this.item.Boss});
    let tels:FormGroup = this.addForm.get('Tel') as FormGroup;
    this.item.Tel.forEach((t,i) => {
      tels.addControl(i, new FormControl(t,[Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]))
    })
    let addresses:FormGroup = this.addForm.get('Address') as FormGroup;
    this.item.Address.forEach((t,i) => {
      console.log(111)
      addresses.addControl(i, new FormControl(t,[Validators.required]))
    })
    let emails:FormGroup = this.addForm.get('Email') as FormGroup;
    this.item.Email.forEach((t,i) => {
      emails.addControl(i, new FormControl(t,[Validators.required, Validators.email]))
    })

    console.log(this.addForm)
  }

}
