import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
@Injectable()
export class CurrencyLabelProvider {
  private headers = new Headers({ 'precise-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55Q29kZSI6IjAxIiwibGFzdFBhc3NDaGFuZ2UiOiIyMDE3LTA4LTAxIDAwOjAwOjAwLjAiLCJjb21wYW55X2lkIjoyMiwiZm90byI6bnVsbCwidXNlcl9pZCI6NzksImlwQWRkcmVzcyI6IjA6MDowOjA6MDowOjA6MSIsInZhbGlkVW50aWwiOiIyMDE3LTA5LTE1VDA4OjMzOjE2Ljc1MiswNzowMCIsImVtcGxveWVlSWQiOjMzMSwiY29tcGFueSI6IlBULiBNb3VudCBEcmVhbXMgSW5kb25lc2lhIDEiLCJmdWxsbmFtZSI6IkhlbmRyYSBFZmVuZGkiLCJ1c2VybmFtZSI6ImhlbmRyYSJ9.LPIHvDvy7vFoor3sieWx8iyB66GRc6GSJ91mhB20WbM'});
  private termUrl = UrlMasterProvider.urlAPI+'/master/reference/get_currency_name/';
  result: any;
  constructor(private http: Http) {

  }
  getCurrency(id: number) {

    return this.http.get(this.termUrl + id, { headers: this.headers })
      .toPromise()
      .then(data => data.json().currency_name)
  }
}
