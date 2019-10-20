import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { Contact } from '../services/models';
import { AddService } from '../services/add.service';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.less']
})
export class AdminContactsComponent extends AddService implements OnInit {
  constructor( private _ws:WaterService, private _fb:FormBuilder) {
    super();
   }

  ngOnInit() {
    this._ws.getContacts().subscribe(contacts => {
      this.items = <Contact[]>contacts;
    })

    this.addForm = this._fb.group({
      Head:[null, Validators.required],
      Time:[null, Validators.required],
      Boss:[null],
      Phone: new FormGroup({
        0: new FormControl(null, [Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)])
      }),
      Address: new FormGroup({
        0: new FormControl(null, Validators.required)
      }),
      Email: new FormGroup({
        0: new FormControl(null, [Validators.required, Validators.email])
      })
    })

    console.log(this.addForm)
  }


  public setForm(id): void{
    this.submitted = true;
    this.item = this.items.find(c => c.Id == id);
    
    this.addForm = this._fb.group({
      Head: this.item.Head, 
      Time: this.item.Time, 
      Boss: this.item.Boss,
      Phone: new FormGroup({}),
      Address: new FormGroup({}),
      Email: new FormGroup({})
    });

    const tels = (<FormGroup>this.addForm.get('Phone'));
    const addresses = (<FormGroup>this.addForm.get('Address'));
    const emails = (<FormGroup>this.addForm.get('Email'));

    this.item.Phone.forEach((t,i) => {
      tels.addControl(i, new FormControl(t,[Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)]))
      console.log(tels)
    })
    this.item.Address.forEach((t,i) => {
      addresses.addControl(i, new FormControl(t,[Validators.required]))
    })
    this.item.Email.forEach((t,i) => {
      emails.addControl(i, new FormControl(t,[Validators.required, Validators.email]))
    })
    console.log(this.addForm)
    this.update = {};
  }

  addContact(formControlName: string){
    const formControl = (<FormGroup>this.addForm.get(formControlName));
    const validators:ValidatorFn[] = [Validators.required];
    if(formControlName == 'Phone'){
      validators.push(Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/));
    }
    if(formControlName == 'Email'){
      validators.push(Validators.email);
    }
    formControl.addControl((Object.keys(formControl.controls).length).toString(), new FormControl(null, validators))
  }

  getFormControls(form: string){
    return Object.values((<FormGroup>this.addForm.get(form)).controls)
  }

  clearContact(formControlName: string, formName: string){
    const form = (<FormGroup>this.addForm.get(formName));
    form.removeControl(formControlName.toString());
    
  }

  save(){
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    if(this.item){
      this.updateContact();
    }else{
      this.saveContact();
    }
  }

  saveContact(){
    let contact = this.addForm.value;
    contact.Phone = Object.values(contact.Phone);
    contact.Address = Object.values(contact.Address);
    contact.Email = Object.values(contact.Email);
    this._ws.addContact(contact).subscribe(id => {
      this.items.push({Id:id, ...contact});
      this.submitted = false;
      this.addForm.reset()
    })
  }

  updateContact(){
    this.update['Id']=this.item.Id;
    this._ws.updateContact(this.update).subscribe(id => {
      this.item = Object.assign(this.item, this.update);
      this.update = {};
    })
  }

  remove(){
    this._ws.removeItem(this.item.Id, 'contacts').subscribe(x => {
      if(x){
        this.addForm.reset();
        (this.items as Contact[]).splice(
          (this.items as Contact[]).findIndex(x => x.Id == this.item.Id),1
        )
        this.submitted = false;
        this.item = null;
      }
    })
  }

}
