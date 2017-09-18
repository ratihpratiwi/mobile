import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as _ from 'underscore/underscore';
import {UrlMasterProvider} from '../providers/url-master/url-master';

@Injectable()
export class RequestDetailService {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token1 });
  private requestdetailUrl = UrlMasterProvider.urlAPI + '/api/purchase/approval/approval_request_order?query_type=approval_rqo&trn_reqo_mst_id=';
  private saveUrl = UrlMasterProvider.urlAPI + '/mobile/request_order/save_approval/'
  private put(e: any) { }
  results: any;
  constructor(private http: Http) {
  }
  getAllApprovalRequestDetail(id) {
    return this.http.get(this.requestdetailUrl + id, { headers: this.headers }).map(data => data.json().result);
  }
  saveRqo(e) {
    var msts = e;
    var details = e.details;
    var group = [];
    var result = [];
    delete msts.details;
    var hasil = _.chain(details)
      .flatten(true).groupBy("mst_supplier_id").each(function(d) { }).value();
    const promiseHasil = new Promise((resolve, reject) => {
      resolve(hasil);
    });
    promiseHasil.then(
      function(value) {
        _.each(value, function(d) {
          var result = { mst_supplier_id: null, details: [] };
          for (let objName in msts) {
            result[objName] = msts[objName];
          }
          result.mst_supplier_id = d[0].mst_supplier_id;
          result.details = d;
          group.push(result);
        });
      }
    )
    const promise = new Promise((resolve, reject) => {
      resolve(group);
    });
    var http1 = this.http;
    var saveUrl1 = this.saveUrl;
    var header1 = this.headers;
    promise.then(
      function(data) {
        http1.put(saveUrl1, JSON.stringify({ 'query': data }), { headers: header1 }).toPromise().then(res => res.json().data);
      }
    )

  }
}
