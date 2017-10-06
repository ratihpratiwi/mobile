import { Injectable } from '@angular/core';
import {  Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from 'angular2-jwt';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
@Injectable()
export class CurrencyLabelProvider {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token2});
  private termUrl = UrlMasterProvider.urlAPI+'/master/reference/get_currency_name/';
  result: any;
  constructor(private http: AuthHttp) {

  }
  getCurrency(id: number) {

    return this.http.get(this.termUrl + id, { headers: this.headers })
      .toPromise()
      .then(data => data.json().currency_name)
  }
}
