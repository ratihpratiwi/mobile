import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class PocService {
  private headers = new Headers({ 'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiZm90byI6bnVsbCwidXNlcl9pZCI6NzksImlwQWRkcmVzcyI6IjA6MDowOjA6MDowOjA6MSIsInZhbGlkVW50aWwiOiIyMDE3LTA5LTEzVDA4OjI0OjEzLjE3OSswNzowMCIsImVtcGxveWVlSWQiOjMzMSwiY29tcGFueSI6IlBULiBNb3VudCBEcmVhbXMgSW5kb25lc2lhIDEiLCJmdWxsbmFtZSI6IkhlbmRyYSBFZmVuZGkiLCJ1c2VybmFtZSI6ImhlbmRyYSJ9.u0hBirMNdmEHXkSe0k476gL-2JlLVM6AwHLzDmbYmvg' });
  private pocUrl = UrlMasterProvider.urlAPI+'/api/sales/approval/approval_pocustomer/';
  results: any;
  constructor(private http: Http) {  }
  getAllApprovalPoc() {
    return this.http.get(this.pocUrl, { headers: this.headers }).map(data => data.json().result);
  }
}
