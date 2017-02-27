import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private loginUrl = 'api/login';

  constructor(private http: Http) {}

  getLoggedIn(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, {}, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response) {
    let body = response.json();
    console.log(body);
    return body.data || { };
  }

  handleError(error: Response | any) {
    let errMsg: string;

    return Observable.throw(errMsg);
  }
}
