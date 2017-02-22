import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*,
  providers: [AppService]*/
})
export class AppComponent implements OnInit {

  showMenu: boolean;
  hero = 'My hero';
  title = 'My title';

  constructor(private appService: AppService) {
    this.showMenu = true;
  }

  ngOnInit() {
    this.appService.showMenuSource.subscribe(bool => {
      console.log(bool);
      this.showMenu = bool;
    });
  }
}
