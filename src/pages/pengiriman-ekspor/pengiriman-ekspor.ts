import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {ChartPengirimanEksporPage} from "../../pages/chart-pengiriman-ekspor/chart-pengiriman-ekspor";
import * as _ from 'underscore/underscore';
@Component({
  selector: 'page-pengiriman-ekspor',
  templateUrl: 'pengiriman-ekspor.html',
})
export class PengirimanEksporPage {
  export1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider) {
  }

  ngOnInit(): void {
    this.dashboardServiceProvider.getDataPengiriman().subscribe(res => {
      var export1 = [];
      _.chain(res.export).groupBy(function (p) {
        return p.company_name;
      }).map(function (value, key) {
        export1.push({
          company_name: key,
          data: value
        })
      })
      this.export1 = export1;
    })
  }

  public openDetailPage1(): void {
    this.navCtrl.push(ChartPengirimanEksporPage);
  }
}
