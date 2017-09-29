import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from 'angular2-jwt';
import {UrlMasterProvider} from '../../providers/url-master/url-master';

@Injectable()
export class ProfileProvider {
  private headers = new Headers({'precise-token': UrlMasterProvider.token1});
  private profileUrl = UrlMasterProvider.urlAPI + '/master/employee/';

  constructor(public http: AuthHttp) {
  }

  getProfile(id) {
    return this.http.get(this.profileUrl + id, {headers: this.headers}).map(data => data.json().result);
  }
}
