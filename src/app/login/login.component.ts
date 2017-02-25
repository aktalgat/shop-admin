import { Component } from '@angular/core';
import { AppService } from '../app.service'
import { Router } from '@angular/router'
import { LoginService } from './login.service'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  login: String;
  password: String;

  constructor (private appService: AppService, private router: Router) {
    router.events.subscribe((val) => {
      if (val.url == '/login') {
        appService.setShowMenu(false);
      }
    });
  }

  logIn() {
    console.log('login: ' + this.login);
    console.log('password: ' + this.password);
  }
}
