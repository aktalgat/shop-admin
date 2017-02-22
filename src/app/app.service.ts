import {Injectable} from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  public showMenuSource = new BehaviorSubject<boolean>(true);

  public setShowMenu(showMenu: boolean) {
    console.log('set shown ' + showMenu);
    this.showMenuSource.next(showMenu);
  }
}
