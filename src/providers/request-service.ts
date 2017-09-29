import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class RequestService {
  private requestUrl = UrlMasterProvider.urlAPI + '/api/purchase/approval/approval_request_order';
  results: any;

  constructor(private http: AuthHttp) {

  }

  getAllApprovalRequest() {
    return this.http.get(this.requestUrl).map(data => data.json().result);
  }

}
