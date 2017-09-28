import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers} from '@angular/http';
import {UrlMasterProvider} from '../providers/url-master/url-master';
@Injectable()
export class LoginService {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token1 });

  constructor(public authHttp: AuthHttp, public http: Http) {
  }

  login(loginData) {
    return this.http.post(UrlMasterProvider.urlAPI + "/login/auth", loginData);
  };

  registerPushId(regId) {
    console.log(regId)
    return this.http.post(UrlMasterProvider.urlAPI + "/user/receive_reg_id", {"registerId": regId},{ headers: this.headers }).map(data => data.json().result);
  }

}


