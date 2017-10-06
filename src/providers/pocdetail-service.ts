import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class PocDetailService {
  private pocdetailUrl = UrlMasterProvider.urlAPI+'/api/sales/po_customer/';
  private savePocUrl = UrlMasterProvider.urlAPI+'/mobile/po_customer/';
  results: any;
  constructor(private http: AuthHttp) {
  }
  getAllApprovalPocDetail(id) {
    return this.http.get(this.pocdetailUrl + id).map(data => data.json().result);

  }
  savePoc(p) {
    return this.http.put(this.savePocUrl + p.trn_po_cust_mst_id.toString(), p ).toPromise().then(res => res.json().data);
  }
}
