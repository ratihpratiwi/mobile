import { Pipe, PipeTransform } from '@angular/core';
import { DashboardServiceProvider } from "../../providers/dashboard-service/dashboard-service"
@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  constructor(private dashboardServiceProvider: DashboardServiceProvider) { };
  transform(data: any, column_name: any, args) {
    let sum = 0;
    if (data != null) {
      for (let item of data) {
        sum += item[column_name];
      }
      const promise = new Promise((resolve, reject) => {
        resolve(sum.toFixed(2));
      });
      return promise;
    }
  }
}
