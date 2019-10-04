import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  getValue(v){
    
    if(v){
      let vs = v.split('/');
        return vs[vs.length-1];
    }
  }

}
