import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {ChartPengirimanLokalPage} from "../../pages/chart-pengiriman-lokal/chart-pengiriman-lokal";

import * as _ from 'underscore/underscore';

@Component({
  selector: 'page-laporan-pengiriman',
  templateUrl: 'laporan-pengiriman.html',
})
export class LaporanPengirimanPage {
pengiriman: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider) {
  }
  ngOnInit(): void {
    this.dashboardServiceProvider.getDataPengiriman().subscribe(res => {
      var pengiriman = [];
      _.chain(res.pengiriman).groupBy(function (p) {
        return p.company_name;
      }).map(function (value, key) {
        pengiriman.push({
          company_name: key,
          data: value
        })
      })
      this.pengiriman = pengiriman;
    })
  }
  public openDetailPage(): void {
    this.navCtrl.push(ChartPengirimanLokalPage);
  }


}
