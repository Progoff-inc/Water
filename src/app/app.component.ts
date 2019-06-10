import { Component, HostListener } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/admin']);
  }
  title = 'Water';
  constructor(public router:Router){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0,0);
     });
    
  }
}
