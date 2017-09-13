import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class RequestService {
  private headers = new Headers({ 'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiZm90byI6IiIsInVzZXJfaWQiOjI5LCJpcEFkZHJlc3MiOiIwOjA6MDowOjA6MDowOjEiLCJ2YWxpZFVudGlsIjoiMjAxNy0wOS0xNVQwODozMTozMy4wNDIrMDc6MDAiLCJlbXBsb3llZUlkIjoyOTIsImNvbXBhbnkiOiJQVC4gTW91bnQgRHJlYW1zIEluZG9uZXNpYSAxIiwiZnVsbG5hbWUiOiJJbmRyYSBTdXJ5YXdhbiIsInVzZXJuYW1lIjoiaW5kcmEifQ.nmRKnN6vUrA3KvpxcVO9bSEIdVJtD1GJVn9chXejEPU' });
  private requestUrl = UrlMasterProvider.urlAPI+'/api/purchase/approval/approval_request_order';
  results: any;
  constructor(private http: Http) {

  }
  getAllApprovalRequest() {
    return this.http.get(this.requestUrl, { headers: this.headers }).map(data => data.json().result);
  }

}
