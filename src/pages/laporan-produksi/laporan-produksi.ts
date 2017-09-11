import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {ChartProduksiHarianPage} from "../../pages/chart-produksi-harian/chart-produksi-harian";
import {ChartProduksiBulananPage} from "../../pages/chart-produksi-bulanan/chart-produksi-bulanan";
import * as _ from 'underscore/underscore';
@Component({
  selector: 'page-laporan-produksi',
  templateUrl: 'laporan-produksi.html',
})
export class LaporanProduksiPage {
  produksi: any;
  produksi_blnan: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider) {
  }

  ngOnInit(): void {
    this.dashboardServiceProvider.getDataDashboard().subscribe(res => {
      var produksi = [];
      _.chain(res.produksi).groupBy(function (p) {
        return p.company;
      }).map(function (value, key) {
        produksi.push({
          company: key,
          data: value
        })
      })
      this.produksi = produksi;
      this.dashboardServiceProvider.getDataDashboard().subscribe(res => {
        var produksi_blnan = [];
        _.chain(res.produksi_blnan).groupBy(function (d) {
          return d.company;
        }).map(function (value, key) {
          produksi_blnan.push({
            company: key,
            data1: value
          })
        })
        this.produksi_blnan = produksi_blnan;
      })
    })

  }

  public openDetailPage1(): void {
    this.navCtrl.push(ChartProduksiHarianPage);
  }

  public openDetailPage2(): void {
    this.navCtrl.push(ChartProduksiBulananPage);
  }
}
