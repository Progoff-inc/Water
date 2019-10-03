import { Injectable, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable()
export class AddService{
    private _item:any;
    @Input() public set item(item){
        this._item = item;
        this.update = {};
    };
    @Input() items:any;
    public update = {};
    public _addForm:FormGroup;
    public fb:FormBuilder = new FormBuilder();
    public submitted = false;
    public files = {};
    constructor(){

    }
    public get addForm(){
        return this._addForm;
    }

    public get item(){
        return this._item;
    }
    public set addForm(form:FormGroup){
        this._addForm = form;
        console.log(form.controls)
        Object.keys(this.addForm.controls).forEach(controlName => {
            this._addForm.controls[controlName].valueChanges.subscribe(c => {
                
                if(this.item){
                    if(this.item[controlName] && this.item[controlName]!=c){
                        this.update[controlName]=c;
                    }else{
                        delete this.update[controlName];
                    }
                    console.log(this.update)
                }
            })
        })
    }
    getValue(v){
        if(v){
            return v.split('\\')[2];
        }
        
    }
    setFile(e){
      this.files[e.target.id]=e.target.files[0];
    }

    updArray(name, arr){
        this.update[name]=arr;
    }

    deleteItem(parent, arr, name, id){
        parent[arr] = parent[arr].filter(x => x[name]!=id);
        return true;
    }

    get f() { return this.addForm.controls; }
    get v() { return this.addForm.value; }
    get upd_length() { return Object.keys(this.update).length+Object.keys(this.files).filter(x => !!this.files[x]).length; }
}