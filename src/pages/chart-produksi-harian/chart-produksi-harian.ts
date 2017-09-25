import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {DateSeriesGenerator} from '../../providers/date-series-generator';
// import {Chart} from 'chart.js';
import * as _ from 'underscore/underscore';
import * as moment from 'moment';

@Component({
  selector: 'page-chart-produksi-harian',
  templateUrl: 'chart-produksi-harian.html',
})
export class ChartProduksiHarianPage {
  @ViewChild('barCanvas') barCanvas;
  public viewState: string = 'chartView';
  public produksi: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider,
              public dateSeriesGenerator: DateSeriesGenerator) {
    this.dateSeriesGenerator.generateDate(_.min("2017-01-01"), _.max("2017-01-03"), "days", "YYYY-MM-DD").then(val => {
      this.initialize();
    })
  }

  initialize(): void {
    this.dashboardServiceProvider.getDataDashboard().toPromise().then(res => {
      var that = this;
      this.produksi = _.chain(res.produksi)
        .groupBy(function (p) {
          return p.company;
        }).map(function (value, key) {
          return {
            company: key,
            data: value
          }
        }).map(function (p) {
          var dates = _.map(p.data, function (date) {
            return moment(moment(date.stock_in_date, "YYYY-MM-DD").format("YYYY-MM-DD"));
          });
          var index = [];
          var labels = that.dateSeriesGenerator.generateDate(_.min(dates), _.max(dates), "days", "YYYY-MM-DD");
          for (let x in labels) {
            index.push(x);
          }
          var day = labels[index[1]];

          var dtItm = _.chain(p.data).groupBy(dt => {
            return dt.status;
          }).value();
          var dts = that.dashboardServiceProvider.generateData(dtItm,day, "stock_in_date", "weight", "status");
          return {
            "company": p.company, "labels": day, "data": dts
          }
        }).value();
    });
  }

}
