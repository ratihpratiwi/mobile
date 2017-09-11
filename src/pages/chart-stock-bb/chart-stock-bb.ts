import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
@Component({
  selector: 'page-chart-stock-bb',
  templateUrl: 'chart-stock-bb.html',
})
export class ChartStockBbPage {
  stock: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider) {
  }

  ngOnInit(): void {
    this.dashboardServiceProvider.getDataStock().subscribe(result => {
      this.stock = result;
    })
  }
}
