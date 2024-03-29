﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { AppService } from './app.service'
import {NavigationStart, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showMenu: boolean;
  hero = 'My hero';
  title = 'Shop';

  constructor(private appService: AppService, private router: Router) {
    this.showMenu = true;
  }

  ngOnInit() {
    this.appService.showMenuSource.subscribe(bool => {
      this.showMenu = bool;
    });

    this.router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        if (val.url == '/') {
          this.appService.setShowMenu(true);
        }
        if (val.url == '/login') {
          this.appService.setShowMenu(false);
        }
      }
      console.log(val);
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
