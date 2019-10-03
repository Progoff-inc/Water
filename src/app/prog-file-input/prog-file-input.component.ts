import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'prog-file-input',
  templateUrl: './prog-file-input.component.html',
  styleUrls: ['./prog-file-input.component.less']
})
export class ProgFileInputComponent implements ControlValueAccessor, OnInit {

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  private onChange = (value: any)=> {};
  private onTouched = () => {};
  value = 0;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }
  /*
    Value Accessor
  */
  registerOnChange(fn:any){
    this.onChange=fn;
  }

  registerOnTouched(fn:any){
    this.onTouched = fn;
  }

  writeValue(out: any){
    this.value = out;
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

  updateValue(value){
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.change.emit(value);
  }

  get Value() { 
    return this.value;
  };
}
