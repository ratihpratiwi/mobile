import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class PocDetailService {
  private headers = new Headers({'precise-token': UrlMasterProvider.token2});
  private pocdetailUrl = UrlMasterProvider.urlAPI+'/api/sales/po_customer/';
  private savePocUrl = UrlMasterProvider.urlAPI+'/mobile/po_customer/';
  results: any;
  constructor(private http: Http) {
  }
  getAllApprovalPocDetail(id) {
    return this.http.get(this.pocdetailUrl + id, { headers: this.headers }).map(data => data.json().result);

  }
  savePoc(p) {
    return this.http.put(this.savePocUrl + p.trn_po_cust_mst_id.toString(), p, { headers: this.headers }).toPromise().then(res => res.json().data);
  }
}
