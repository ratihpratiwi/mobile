import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RefserviceProvider {
  private headers = new Headers({ 'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiZm90byI6bnVsbCwidXNlcl9pZCI6NzksImlwQWRkcmVzcyI6IjA6MDowOjA6MDowOjA6MSIsInZhbGlkVW50aWwiOiIyMDE3LTA5LTEzVDA4OjI0OjEzLjE3OSswNzowMCIsImVtcGxveWVlSWQiOjMzMSwiY29tcGFueSI6IlBULiBNb3VudCBEcmVhbXMgSW5kb25lc2lhIDEiLCJmdWxsbmFtZSI6IkhlbmRyYSBFZmVuZGkiLCJ1c2VybmFtZSI6ImhlbmRyYSJ9.u0hBirMNdmEHXkSe0k476gL-2JlLVM6AwHLzDmbYmvg' });
  private termUrl = UrlMasterProvider.urlAPI+'/master/reference/get_reference/';
  result: any;
  constructor(private http: Http) {

  }
  getRef(id: number) {

    return this.http.get(this.termUrl + id, { headers: this.headers }).toPromise().then(data => data.json().mst_ref_name)
  }
}
