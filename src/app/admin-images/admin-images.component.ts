import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { WaterService } from '../services/water.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadService } from '../services/load.service';
import { AddService } from '../services/add.service';
import { WaterValidators } from '../services/water.validators';
import { AlertType } from '../prog-alert/prog-alert.component';
import { UploadTypes, Image } from '../services/models';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'admin-images',
  templateUrl: './admin-images.component.html',
  styleUrls: ['./admin-images.component.less']
})
export class AdminImagesComponent extends AddService implements OnInit {

  ipattern=/(\.png|\.jpg)$/i;

  constructor(private as:AlertService, private ws: WaterService, private fb: FormBuilder, private ls:LoadService) {
    super()
  }

  ngOnInit() {
    this.ws.getImages().subscribe(images => {
      this.items = images;
    })
    this.initForm();
  }

  public initForm(){
    this.addForm = this.fb.group({
      Image:[null, [Validators.required, WaterValidators.FileNameValidator(this.ipattern)]],
      Name: [null, [Validators.required]]
    })
  }
  
  public setForm(id){
    this.item = this.items.find(x => x.Id == id);
    this.addForm.patchValue(this.item);
  }

  public save(): void{
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    if(this.item){
      this._update();
    }else{
      this._add();
    }
  }

  private _update(){
    this.update['Id']=this.item.Id;
    this.ws.updateDocType(this.update).subscribe(() => {
      this.item = Object.assign(this.item, this.update);
      this.update = {};
      this.as.alert.showAlert({
        type: AlertType.Success,
        message: "Данные раздела успешно обновлены"
      })
    })
  }

  private _add(){
    this.ws.addImage({Name: this.v.Name}).subscribe(id => {
      console.log(id);
      this.ls.showLoad = true;
      const formData = new FormData();
      formData.append('Image', this.v.Image);
      this.ws.UploadFile(id, UploadTypes.MainImage, formData).subscribe(event => {
        if(event.type == HttpEventType.UploadProgress){
          this.ls.load = Math.round(event.loaded/event.total * 100);
        }
        else if(event.type == HttpEventType.Response){
          this.items.unshift({
            Id: id, 
            Image: event.body[0].Image,
            Name: this.v.Name
          });
          this.ls.showLoad = false;
          this.submitted = false;
          this.addForm.reset();
          this.as.alert.showAlert({
            type: AlertType.Success,
            message: "Изображение успешно добавлено"
          })
        }
      })
    })
  }

  public remove(){
    this.ws.removeItem(this.item.Id, 'mainimages').subscribe(x => {
      if(x){
        (this.items as Image[]).splice(
          (this.items as Image[]).findIndex(x => x.Id == this.item.Id),1
        )
        this.submitted = false;
        this.initForm();
        this.item = null;
        this.as.alert.showAlert({
          type: AlertType.Success,
          message: "Изображение успешно удалено"
        })
      }
    })
  }

  clear(){
    this.submitted = false;
    this.addForm.reset();
    this.item = null;
    document.getElementsByTagName('prog-select')[0].getElementsByTagName("input")[0].value = '';
  }
}
