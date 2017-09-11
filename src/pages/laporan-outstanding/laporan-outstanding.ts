import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardServiceProvider } from '../../providers/dashboard-service/dashboard-service';

@Component({
  selector: 'page-laporan-outstanding',
  templateUrl: 'laporan-outstanding.html',
})
export class LaporanOutstandingPage {
outstanding: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider) {
  }

  ngOnInit(): void {
    this.dashboardServiceProvider.getDataOutstanding().subscribe(result => {
      this.outstanding = result;
    })
  }
}
