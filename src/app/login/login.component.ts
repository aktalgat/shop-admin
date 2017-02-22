import { Component } from '@angular/core';
import { AppService } from './../app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor (private appService: AppService, private router: Router) {
    router.events.subscribe((val) => {
      if (val.url == '/login') {
        appService.setShowMenu(false);
      }
    });
  }
}
