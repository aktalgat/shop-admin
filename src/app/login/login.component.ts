import { Component } from '@angular/core';
import { AppService } from './../app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']/*,
  providers: [AppService]*/
})
export class LoginComponent {
  constructor (private appService: AppService, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (val) {
        appService.setShowMenu(false);
      }
      console.log(val);
    });
  }
}
