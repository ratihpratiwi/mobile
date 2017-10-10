import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RefserviceProvider {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token2 });
  private termUrl = UrlMasterProvider.urlAPI+'master/reference/get_reference/';
  result: any;
  constructor(private http: AuthHttp) {

  }
  getRef(id: number) {
    return this.http.get(this.termUrl + id, { headers: this.headers }).toPromise().then(data => data.json().mst_ref_name)
  }
}
