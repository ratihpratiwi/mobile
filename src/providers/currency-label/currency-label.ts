import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
@Injectable()
export class CurrencyLabelProvider {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token2});
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
