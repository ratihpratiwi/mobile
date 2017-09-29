import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import _ from 'underscore';
/*
  Generated class for the ChartDataGenerator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChartDataGenerator {

  constructor(public http: AuthHttp) {
  }
public  generateDataSeries(series:any, data:any, param:any, paramKey:any) {
    var dataArray = [];
    _.chain(series).each(function(dateItem) {
      var dt = _.chain(data).find(function(item) {
        return item[paramKey] == dateItem;
      }).value();
      if (_.has(dt, param)) {
        _.map(dt, function(vals, key) {
          if (key == param) {
            dataArray.push(vals);
          }
        })
      } else {
        dataArray.push(0);
      }

    });
    return dataArray;
  }
}
