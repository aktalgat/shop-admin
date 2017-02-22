import {Injectable} from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {
  public showMenuSource = new BehaviorSubject<boolean>(true);

  public setShowMenu(showMenu: boolean) {
    this.showMenuSource.next(showMenu);
  }
}
