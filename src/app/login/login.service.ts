import {Injectable} from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private loginUrl = 'api/login';

  constructor(private http: Http) { }
}
