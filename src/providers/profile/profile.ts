import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../../providers/url-master/url-master';

@Injectable()
export class ProfileProvider {
  private headers = new Headers({ 'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiZm90byI6IiIsInVzZXJfaWQiOjI5LCJpcEFkZHJlc3MiOiIwOjA6MDowOjA6MDowOjEiLCJ2YWxpZFVudGlsIjoiMjAxNy0wOS0xNVQwODozMTozMy4wNDIrMDc6MDAiLCJlbXBsb3llZUlkIjoyOTIsImNvbXBhbnkiOiJQVC4gTW91bnQgRHJlYW1zIEluZG9uZXNpYSAxIiwiZnVsbG5hbWUiOiJJbmRyYSBTdXJ5YXdhbiIsInVzZXJuYW1lIjoiaW5kcmEifQ.nmRKnN6vUrA3KvpxcVO9bSEIdVJtD1GJVn9chXejEPU' });
  private profileUrl = UrlMasterProvider.urlAPI + '/master/employee/';
  constructor(public http: Http) {}

  getProfile(id) {
    return this.http.get(this.profileUrl + id, { headers: this.headers }).map(data => data.json().result);
  }

}
