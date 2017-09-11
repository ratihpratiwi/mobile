import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardServiceProvider } from '../../providers/dashboard-service/dashboard-service';
import { ChartHppBulananPage } from "../chart-hpp-bulanan/chart-hpp-bulanan";
import { ChartHppHarianPage } from "../../pages/chart-hpp-harian/chart-hpp-harian";
import * as _ from 'underscore/underscore';

@Component({
  selector: 'page-hpp',
  templateUrl: 'hpp.html',
})
export class HppPage {
  hppBulanan: any;
  hpp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider){}
  ngOnInit(): void {
    this.dashboardServiceProvider.getDataDashboard().subscribe(res => {
      var hppBulanan = [];
      _.chain(res.hppBulanan).groupBy(function(p) {
        return p.company;
      }).map(function(value, key) {
        hppBulanan.push({
          company: key,
          data1: value
        })
      })
      this.hppBulanan = hppBulanan;

      var hpp = [];
      _.chain(res.hpp).groupBy(function(p) {
        return p.company;
      }).map(function(value, key) {
        hpp.push({
          company: key,
          data: value
        })
      })
      this.hpp = hpp;
    })
  }
  public openDetailPage1(): void {
    this.navCtrl.push(ChartHppHarianPage);
  }
  public openDetailPage2(): void {
    this.navCtrl.push(ChartHppBulananPage);
  }
}
