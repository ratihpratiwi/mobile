import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {LaporanPengirimanPage} from '../../pages/laporan-pengiriman/laporan-pengiriman';
import {PengirimanEksporPage} from '../../pages/pengiriman-ekspor/pengiriman-ekspor';

@Component({
  selector: 'page-pengiriman-navigate',
  templateUrl: 'pengiriman-navigate.html',
})
export class PengirimanNavigatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider:DashboardServiceProvider) {
  }
  public openDetailPage1(): void {
    this.navCtrl.push(LaporanPengirimanPage);
  }

  public openDetailPage2(): void {
    this.navCtrl.push(PengirimanEksporPage);
  }

}
