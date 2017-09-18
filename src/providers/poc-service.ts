import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class PocService {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token2 });
  private pocUrl = UrlMasterProvider.urlAPI+'/api/sales/approval/approval_pocustomer/';
  results: any;
  constructor(private http: Http) {  }
  getAllApprovalPoc() {
    return this.http.get(this.pocUrl, { headers: this.headers }).map(data => data.json().result);
  }
}
