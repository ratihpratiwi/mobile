import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RefserviceProvider {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token2 });
  private termUrl = UrlMasterProvider.urlAPI+'/master/reference/get_reference/';
  result: any;
  constructor(private http: Http) {

  }
  getRef(id: number) {
    return this.http.get(this.termUrl + id, { headers: this.headers }).toPromise().then(data => data.json().mst_ref_name)
  }
}
