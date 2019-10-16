import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { AddService } from '../services/add.service';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup, ValidatorFn } from '@angular/forms';
import { VacancyType, Vacancy } from '../services/models';

@Component({
  selector: 'app-admin-vacancies',
  templateUrl: './admin-vacancies.component.html',
  styleUrls: ['./admin-vacancies.component.less']
})
export class AdminVacanciesComponent extends AddService implements OnInit {
  type = VacancyType;
  constructor(private _ws:WaterService, private _fb:FormBuilder) { 
    super();
  }

  ngOnInit() {
    this._ws.getVacancies().subscribe(v => {
      this.items = v;
    })
    this.addForm = this._fb.group({
      Name:[null, Validators.required],
      WorkTime:[null, Validators.required],
      Salary:[null, Validators.required],
      Duties: new FormArray([
        this._fb.group({
          Type: [VacancyType.Duty],
          Name: [null, Validators.required]
        })
      ]),
      Requirements: new FormArray([
        this._fb.group({
          Type: [VacancyType.Requirement],
          Name: [null, Validators.required]
        })
      ]),
      Conditions: new FormArray([
        this._fb.group({
          Type: [VacancyType.Condition],
          Name: [null, Validators.required]
        })
      ]),
    })

    console.log(this.addForm)
  }


  public setForm(id): void{
    this.submitted = true;
    this.item = this.items.find(c => c.Id == id);
    
    this.addForm = this._fb.group({
      Name:[this.item.Name, Validators.required],
      WorkTime:[this.item.WorkTime, Validators.required],
      Salary:[this.item.Salary, Validators.required],
      Duties: new FormArray([]),
      Requirements: new FormArray([]),
      Conditions: new FormArray([]),
    });
    

    const duties = (<FormArray>this.addForm.get('Duties'));
    const requirements = (<FormArray>this.addForm.get('Requirements'));
    const conditions = (<FormArray>this.addForm.get('Conditions'));

    this.item.Duties.forEach((t,i) => {
      duties.push(
        this._fb.group({
          Type: [VacancyType.Duty],
          Name: [t.Name, Validators.required]
        })
      )
    })
    this.item.Requirements.forEach((t,i) => {
      requirements.push(
        this._fb.group({
          Type: [VacancyType.Requirement],
          Name: [t.Name, Validators.required]
        })
      )
    })
    this.item.Conditions.forEach((t,i) => {
      conditions.push(
        this._fb.group({
          Type: [VacancyType.Condition],
          Name: [t.Name, Validators.required]
        })
      )
    })
    this.update = {};
  }

  getFormControls(form: string){
    return (<FormArray>this.addForm.get(form)).controls;
  }

  clearVacancy(index: number, formName: string){
    const form = (<FormArray>this.addForm.get(formName));
    form.removeAt(index);
    
  }

  addVacancy(formControlName: string, type: VacancyType){
    const formControl = (<FormArray>this.addForm.get(formControlName));
    formControl.push(
      this._fb.group({
        Type: [type],
        Name: [null, Validators.required]
      }))
  }

  save(){
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    if(this.item){
      this.updateVacancy();
    }else{
      this.saveVacancy();
    }
  }

  saveVacancy(){
    console.log(this.v)
    // this._ws.addContact(contact).subscribe(id => {
    //   this.items.push({Id:id, ...contact});
    //   this.addForm.reset()
    // })
  }

  updateVacancy(){
    this.update['Id']=this.item.Id;
    console.log(this.update);
    // this._ws.updateContact(this.update).subscribe(id => {
    //   this.item = JSON.parse(JSON.stringify(this.update));
    // })
  }

}
