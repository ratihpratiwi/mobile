import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class PocService {
  private pocUrl = UrlMasterProvider.urlAPI+'/api/sales/approval/approval_pocustomer/';
  results: any;
  constructor(private http: AuthHttp) {  }
  getAllApprovalPoc() {
    return this.http.get(this.pocUrl).map(data => data.json().result);
  }
}
