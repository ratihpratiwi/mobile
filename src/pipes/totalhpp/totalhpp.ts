import { Pipe, PipeTransform } from '@angular/core';
import { DashboardServiceProvider } from "../../providers/dashboard-service/dashboard-service";
@Pipe({
  name: 'totalhpp',
})
export class TotalhppPipe implements PipeTransform {
  constructor(private dashboardServiceProvider: DashboardServiceProvider) { };
transform(data: any, column1: any, column2: any, args) {
  let totalprice = 0;
  let totalweight = 0;
  if (data != null) {
    for (let item of data) {
      totalprice += item[column1] * item[column2];
      totalweight += item[column2];
  }
  const promise = new Promise((resolve, reject) => {
    console.log(totalprice/totalweight)
    resolve(totalprice/totalweight);

  });
  return promise;
}
}
}
