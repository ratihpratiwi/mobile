import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {LaporanOutstandingPage} from "../../pages/laporan-outstanding/laporan-outstanding";
import { ChartHargaRollPage } from "../../pages/chart-harga-roll/chart-harga-roll";
import * as _ from 'underscore/underscore';
@Component({
  selector: 'page-sales-navigate',
  templateUrl: 'sales-navigate.html',
})
export class SalesNavigatePage {
  avg_price_bulanan: any;
  outstanding: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider,
              public loadingCtrl: LoadingController) {}
  ngOnInit(): void{
    this.dashboardServiceProvider.getDataOutstanding().subscribe(res => {
      this.outstanding =res;
      this.dashboardServiceProvider.getDataRoll().subscribe(res => {
        var avg_price_bulanan = [];
        _.chain(res.avg_price_bulanan).groupBy(function (d) {
          return d.company;
        }).map(function (value, key) {
          avg_price_bulanan.push({
            company: key,
            data: value
          })
        })
        this.avg_price_bulanan = avg_price_bulanan;
      })
    })
  }
  presentloading(){
    const loading = this.loadingCtrl.create({
      content: 'Please wait...',
    }); loading.present();
    setTimeout(()=>{
      loading.dismiss();
    }, 5000);
  }
  presentloading2(){
    const loading = this.loadingCtrl.create({
      content: 'Please wait...',
    }); loading.present();
    setTimeout(()=>{
      loading.dismiss();
    }, 5000);
  }
  public openDetailPage1(): void {
    this.navCtrl.push(ChartHargaRollPage);
  }

  public openDetailPage2(): void {
    this.navCtrl.push(LaporanOutstandingPage);
  }
}
