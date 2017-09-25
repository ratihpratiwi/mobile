import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class RequestService {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token1 });
  private requestUrl = UrlMasterProvider.urlAPI+'/api/purchase/approval/approval_request_order';
  results: any;
  constructor(private http: Http) {

  }
  getAllApprovalRequest() {
    return this.http.get(this.requestUrl, { headers: this.headers }).map(data => data.json().result);
  }

}
