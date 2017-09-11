import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
/*
  Generated class for the DateSeriesGenerator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DateSeriesGenerator {

  constructor(public http: Http) {
    console.log('Hello DateSeriesGenerator Provider');
  }
  public generateDate(_startDate: any, _stopDate: any, intervalParam, formatParam: any) {
    // console.info(_startDate);
    // console.info(_stopDate);
    // console.info(intervalParam);
    // console.info(formatParam);
    let dateArray: any = [];
    let currentDate: any = moment(_startDate, "YYYY-MM-DD");
    let stopDate: any = moment(_stopDate, "YYYY-MM-DD");
    let units: moment.unitOfTime.DurationConstructor = formatParam;

    while (currentDate <= stopDate) {
      // dateArray.push(moment(currentDate, "YYYY-MM-DD").format(formatParam));
      // currentDate = moment(currentDate).add(1, units);
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
    let units: moment.unitOfTime.DurationConstructor = formatParam;
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate, "YYYY-MM-DD").format(formatParam));
      currentDate = moment(currentDate).add(1, intervalParam);
    }
    return new Promise((resolve, reject) => {
      resolve(dateArray);
    });
  }
}
