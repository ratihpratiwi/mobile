import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
@Injectable()
export class DateSeriesGenerator {

  constructor(public http: AuthHttp) {
  }
  public generateDate(_startDate: any, _stopDate: any, intervalParam, formatParam: any) {

    let dateArray: any = [];
    let currentDate: any = moment(_startDate, "YYYY-MM-DD");
    let stopDate: any = moment(_stopDate, "YYYY-MM-DD");

    while (currentDate <= stopDate) {

      dateArray.push(moment(currentDate, "YYYY-MM-DD").format(formatParam));

      currentDate = moment(currentDate).add(1, intervalParam);
    }
    return new Promise((resolve, reject) => {
      resolve(dateArray);
    });
  }
  public showDate() {
    return "halo";
  }
  public generateData(_startDate: any, _stopDate: any, intervalParam, formatParam: any) {
    let dateArray: any = [];
    let currentDate: any = moment(_startDate, "YYYY-MM-DD");
    let stopDate: any = moment(_stopDate, "YYYY-MM-DD");
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate, "YYYY-MM-DD").format(formatParam));
      currentDate = moment(currentDate).add(1, intervalParam);
    }
    return new Promise((resolve, reject) => {
      resolve(dateArray);
    });
  }
}
