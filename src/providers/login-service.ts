import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { Http} from '@angular/http';
import {UrlMasterProvider} from '../providers/url-master/url-master';
@Injectable()
export class LoginService {

  constructor(public authHttp: AuthHttp, public http:Http) {
  }
  login(loginData) {
   return this.http.post(UrlMasterProvider.urlAPI+"/login/auth",loginData);
  };


}


