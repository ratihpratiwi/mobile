import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DashboardServiceProvider} from '../../providers/dashboard-service/dashboard-service';
import {DateSeriesGenerator} from '../../providers/date-series-generator';
// import {Chart} from 'chart.js';
import * as _ from 'underscore/underscore';
import * as moment from 'moment';

@Component({
  selector: 'page-chart-pengiriman-ekspor',
  templateUrl: 'chart-pengiriman-ekspor.html',
})
export class ChartPengirimanEksporPage {
  @ViewChild('barCanvas') barCanvas;
  public viewState: string = "chart";
  public export1: any;
  public pengirimanAvgEks: any;
  dataPengiriman: any;
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
  ngOnInit(): void {
    this.dashboardServiceProvider.getDataPengiriman().subscribe(result => {
      this.dataPengiriman = result;
    })
  }
  initialize(): void {

    this.dashboardServiceProvider.getDataPengiriman().toPromise().then(res => {
      var that = this;
      this.export1 = _.chain(res.export)
        .groupBy(function (p) {
          return p;
        }).map(function (value, key) {
          return {
            company_name: key,
            data: value
          }

        }).map(function (p) {
          var dates = _.map(p.data, function (date) {
            return moment(date.delivery_date, "YYYY-MM-DD");
          });
          var index = [];
          var labels = that.dateSeriesGenerator.generateDate(_.min(dates), _.max(dates), "days", "YYYY-MM-DD");
          for (let x in labels) {
            index.push(x);
          }
          var day = labels[index[1]];

          var dtItm = _.chain(p.data).groupBy(dt => {
            return dt.company_name;
          }).value();

          var dts = that.dashboardServiceProvider.generateDataPengiriman(dtItm, day, "delivery_date", "delivery_quantity", "company_name");
          return {
            "company": p.company, "labels": day, "data": dts
          }
        }).value();
      this.pengirimanAvgEks = _.chain(res.export)
        .groupBy(function (p) {
          return p;
        }).map(function (value, key) {
          return {
            company_name: key,
            data: value
          }

        }).map(function (p) {
          var dates = _.map(p.data, function (date) {
            return moment(date.delivery_date, "YYYY-MM-DD");
          });
          var index = [];
          var labels = that.dateSeriesGenerator.generateDate(_.min(dates), _.max(dates), "days", "YYYY-MM-DD");
          for (let x in labels) {
            index.push(x);
          }
          var day = labels[index[1]];

          var dtItm = _.chain(p.data).groupBy(dt => {
            return dt.company_name;
          }).value();

          var dtsPrice = that.dashboardServiceProvider.generateDataPengirimanAvg(dtItm, day, "delivery_date", "avg", "company_name");
          return {
            "company": p.company_name, "labels": day, "data": dtsPrice
          }
        }).value();
    });
  }
}
