import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit {
  @Input() type:string;
  @Input() href:string;
  @Input() text:string;
  @Input() showImage:boolean = true;
  @Output() removeImg: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  getValue(v){
    
    if(v){
      let vs = v.split('/');
        return vs[vs.length-1];
    }
  }

  remove(){
    this.removeImg.emit(true);
  }

}
