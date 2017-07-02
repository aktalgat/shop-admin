import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {environment} from '../environments/environment';

@Injectable()
export class AppService {

  apiUrl = environment.apiUrl;

  constructor (private http: Http) {}

  getStructure() {
    return this.http.get(this.apiUrl  + '');
  }

  public showMenuSource = new BehaviorSubject<boolean>(true);

  public setShowMenu(showMenu: boolean) {
    this.showMenuSource.next(showMenu);
  }
}
