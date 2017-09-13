import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../../providers/url-master/url-master';

@Injectable()
export class ProfileProvider {
  private headers = new Headers({'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiaXBBZGRyZXNzIjoiMTkyLjE2OC4wLjE5MCIsImlzcyI6Imh0dHBzOi8vbW91bnRkcmVhbXMuaWQiLCJlbXBsb3llZUlkIjoyOTIsImZvdG8iOiIiLCJ1c2VyX2lkIjoyOSwiY29tcGFueSI6IlBULiBNb3VudCBEcmVhbXMgSW5kb25lc2lhIDEiLCJmdWxsbmFtZSI6IkluZHJhIFN1cnlhd2FuIiwiZXhwIjoxNTA1NDYwNzk0MDY3LCJpYXQiOjE1MDUyODc5OTQwNjcsInVzZXJuYW1lIjoiaW5kcmEifQ.cMvNpDWVUOIq2A7J7FBA6QSa2ZWB8PXC5CYmOLpMsuU'});
  private profileUrl = UrlMasterProvider.urlAPI + '/master/employee/';

  constructor(public http: Http) {
  }

  getProfile(id) {
    return this.http.get(this.profileUrl + id, {headers: this.headers}).map(data => data.json().result);
  }
}
