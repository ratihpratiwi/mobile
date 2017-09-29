import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import {AuthHttp} from 'angular2-jwt';
import * as _ from 'underscore/underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardServiceProvider {
  private chartUrl = UrlMasterProvider.urlAPI + '/api/report/dashboard_tile/';
  private pengirimanUrl = UrlMasterProvider.urlAPI + '/api/report/dashboard_tile?query_type=pengiriman';
  private hargaRollUrl = UrlMasterProvider.urlAPI + '/api/report/dashboard_tile/monthly_roll?intervalMonth1=5&&intervalMonth2=5';
  private outstandingUrl = UrlMasterProvider.urlAPI + '/api/report/dashboard_tile?company=PM1+%26+PM2&query_type=outstanding_po';
  private stockUrl = UrlMasterProvider.urlAPI + '/api/inventory/inventory?query=tile&query_type=mtrl_stock';
  public data: any;
  public produksi: any;

  constructor(public http: AuthHttp) {
    this.data = null;
  }

  getDataDashboard() {
    return this.http.get(this.chartUrl).map(data => data.json().result);
  }

  getDataPengiriman() {
    return this.http.get(this.pengirimanUrl).map(data => data.json().result);
  }

  getDataRoll() {
    return this.http.get(this.hargaRollUrl).map(data => data.json().result);
  }

  getDataOutstanding() {
    return this.http.get(this.outstandingUrl).map(data => data.json().result);
  }

  getDataStock(){
    return this.http.get(this.stockUrl).map(data => data.json().result);
  }

  generateData(dtItm, day, column_series, column_data, column_label) {
    var dts = [];
    _.chain(dtItm).map(dt => {
      var data1 = [day.length];
      for (var j = 0; j < day.length; j++) {
        data1[j] = 0;
      }
      for (let item of dt) {
        var i = day.indexOf(item[column_series])
        data1[i] = item[column_data];
      }
      dts.push({"data": data1, label: dt[0][column_label]})
    }).value();
    return dts;
  }

  generateDataPengiriman(dtItm, day, column_series, column_data, column_label) {
    var dts = [];
    _.chain(dtItm).map(dt => {
      var data1 = [day.length];
      for (var j = 0; j < day.length; j++) {
        data1[j] = 0;
      }
      for (let item of dt) {
        var i = day.indexOf(item[column_series])
        data1[i] = item[column_data];
      }
      dts.push({"data": data1, label: dt[0][column_label]})
    }).value();

    return dts;
  }
  generateDataPengirimanAvg(dtItm, day, column_series, column_data, column_label){

    var dtsPrice = [];
    _.chain(dtItm).map(dt=> {
      var data1 = [day.length];
      for (var j = 0; j < day.length; j++) {
        data1[j] = 0;
      }
      for (let item of dt) {
        var i = day.indexOf(item[column_series])
        data1[i] = item[column_data];
      }
      dtsPrice.push({"data": data1, label: dt[0][column_label]})
    }).value();
    return dtsPrice;
  }
}
