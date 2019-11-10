import { Component, OnInit, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'prog-file-input',
  templateUrl: './prog-file-input.component.html',
  styleUrls: ['./prog-file-input.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>ProgFileInputComponent),
    multi: true
  }]
})
export class ProgFileInputComponent implements ControlValueAccessor, OnInit {
  @Input() singleFile = true;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  private onChange = (value: any)=> {};
  private onTouched = () => {};
  value = null;
  file = null;
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

  updateValue(event){
    console.dir(event);
    this.file = this.singleFile? event.target.files[0]: event.target.files;
    if (this.file) {
      this.value = this.singleFile? this.file.name : this.file.map(x => x.name);
    }
    else{
      this.value = null;
    }
    this.onChange(this.file);
    this.onTouched();
    this.change.emit(this.file);
  }

  get Value() { 
    return this.value;
  };
}
