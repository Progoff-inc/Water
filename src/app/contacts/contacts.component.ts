import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { Contact } from '../services/models';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  constructor(private ws:WaterService) { }

  ngOnInit() {
    this.ws.getContacts().subscribe(c => {
      this.contacts = c;
    })
  }
  getTel(tel){
    tel = tel.replace(/\D+/g,"");
    return 'tel:+'+tel;
  }
  
}
