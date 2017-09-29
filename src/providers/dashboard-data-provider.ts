import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';

/*
  Generated class for the DashboardDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DashboardDataProvider {
  public data: any = {};
  constructor(public http: AuthHttp) {
    console.log('Hello DashboardDataProvider Provider');
    this.data = null;
  }
  retrieveData() {
    return {
      "message": "",
      "result": {
        "hpp": [
          {
            "bahan_baku": 2345,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4881.1,
            "id": 532,
            "period": "2017-01-14",
            "tonase": 93090
          },
          {
            "bahan_baku": -1663,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4714.42,
            "id": 533,
            "period": "2017-01-15",
            "tonase": 199325
          },
          {
            "bahan_baku": -1955,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4981.11,
            "id": 535,
            "period": "2017-01-16",
            "tonase": 169035
          },
          {
            "bahan_baku": 6707,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4876.65,
            "id": 536,
            "period": "2017-01-17",
            "tonase": 169560
          },
          {
            "bahan_baku": -6818,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4814.54,
            "id": 537,
            "period": "2017-01-18",
            "tonase": 163310
          },
          {
            "bahan_baku": 722,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4939.69,
            "id": 540,
            "period": "2017-01-19",
            "tonase": 165650
          },
          {
            "bahan_baku": 168,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5100.48,
            "id": 541,
            "period": "2017-01-20",
            "tonase": 153090
          },
          {
            "bahan_baku": 527,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5677.89,
            "id": 543,
            "period": "2017-01-21",
            "tonase": 98635
          },
          {
            "bahan_baku": 709,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4958.3,
            "id": 544,
            "period": "2017-01-22",
            "tonase": 155940
          },
          {
            "bahan_baku": -2025,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4963.83,
            "id": 545,
            "period": "2017-01-23",
            "tonase": 188538
          },
          {
            "bahan_baku": -793,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5167.05,
            "id": 547,
            "period": "2017-01-24",
            "tonase": 162100
          },
          {
            "bahan_baku": 1658,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5152.25,
            "id": 549,
            "period": "2017-01-25",
            "tonase": 162705
          },
          {
            "bahan_baku": 2825,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5033.35,
            "id": 550,
            "period": "2017-01-26",
            "tonase": 170290
          },
          {
            "bahan_baku": 682,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5132.31,
            "id": 552,
            "period": "2017-01-27",
            "tonase": 163935
          },
          {
            "bahan_baku": -970,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4942.31,
            "id": 553,
            "period": "2017-01-28",
            "tonase": 170630
          },
          {
            "bahan_baku": 3013,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5125.52,
            "id": 554,
            "period": "2017-01-29",
            "tonase": 157530
          },
          {
            "bahan_baku": -6232,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5249.94,
            "id": 558,
            "period": "2017-01-30",
            "tonase": 120600
          },
          {
            "bahan_baku": 2344,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5044.3,
            "id": 559,
            "period": "2017-01-31",
            "tonase": 132795
          },
          {
            "bahan_baku": -1072,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5054.13,
            "id": 561,
            "period": "2017-02-01",
            "tonase": 157000
          },
          {
            "bahan_baku": 1238,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5246.72,
            "id": 562,
            "period": "2017-02-02",
            "tonase": 124940
          },
          {
            "bahan_baku": -338,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5385.43,
            "id": 563,
            "period": "2017-02-03",
            "tonase": 109800
          },
          {
            "bahan_baku": 4506,
            "company": "PM01",
            "company_id": 22,
            "hpp": 8189.9,
            "id": 564,
            "period": "2017-02-05",
            "tonase": 14520
          },
          {
            "bahan_baku": -5453,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5452.63,
            "id": 567,
            "period": "2017-02-06",
            "tonase": 118250
          },
          {
            "bahan_baku": 9152,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4802.52,
            "id": 572,
            "period": "2017-02-07",
            "tonase": 67865
          },
          {
            "bahan_baku": 684,
            "company": "PM01",
            "company_id": 22,
            "hpp": 5224.22,
            "id": 579,
            "period": "2017-02-09",
            "tonase": 143924
          },
          {
            "bahan_baku": 1113,
            "company": "PM01",
            "company_id": 22,
            "hpp": 4670.2,
            "id": 582,
            "period": "2017-02-10",
            "tonase": 148185
          },
          {
            "bahan_baku": 7982,
            "company": "PM02",
            "company_id": 23,
            "hpp": 6676.87,
            "id": 534,
            "period": "2017-01-14",
            "tonase": 110271
          },
          {
            "bahan_baku": -7667,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5533.74,
            "id": 538,
            "period": "2017-01-18",
            "tonase": 155666
          },
          {
            "bahan_baku": 318,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5191.62,
            "id": 539,
            "period": "2017-01-19",
            "tonase": 216726
          },
          {
            "bahan_baku": 28190,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5022.07,
            "id": 542,
            "period": "2017-01-20",
            "tonase": 28046
          },
          {
            "bahan_baku": -6085,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5685.83,
            "id": 546,
            "period": "2017-01-23",
            "tonase": 168544
          },
          {
            "bahan_baku": -24390,
            "company": "PM02",
            "company_id": 23,
            "hpp": 7635.41,
            "id": 548,
            "period": "2017-01-25",
            "tonase": 154754
          },
          {
            "bahan_baku": 4213,
            "company": "PM02",
            "company_id": 23,
            "hpp": 8011.36,
            "id": 551,
            "period": "2017-01-26",
            "tonase": 138924
          },
          {
            "bahan_baku": 9419,
            "company": "PM02",
            "company_id": 23,
            "hpp": 7677.92,
            "id": 555,
            "period": "2017-01-27",
            "tonase": 197565
          },
          {
            "bahan_baku": 12470,
            "company": "PM02",
            "company_id": 23,
            "hpp": 7465.41,
            "id": 556,
            "period": "2017-01-28",
            "tonase": 164712
          },
          {
            "bahan_baku": 11617,
            "company": "PM02",
            "company_id": 23,
            "hpp": 7963.99,
            "id": 557,
            "period": "2017-01-29",
            "tonase": 171955
          },
          {
            "bahan_baku": 42763,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5198.47,
            "id": 560,
            "period": "2017-01-30",
            "tonase": 41804
          },
          {
            "bahan_baku": -555,
            "company": "PM02",
            "company_id": 23,
            "hpp": 7493.35,
            "id": 569,
            "period": "2017-02-04",
            "tonase": 212564
          },
          {
            "bahan_baku": -6151,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5197.32,
            "id": 570,
            "period": "2017-02-05",
            "tonase": 194945
          },
          {
            "bahan_baku": -4366,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5430.47,
            "id": 571,
            "period": "2017-02-06",
            "tonase": 171264
          },
          {
            "bahan_baku": 25540,
            "company": "PM02",
            "company_id": 23,
            "hpp": 6805.95,
            "id": 573,
            "period": "2017-02-07",
            "tonase": 34889
          },
          {
            "bahan_baku": -2403,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5853.29,
            "id": 578,
            "period": "2017-02-08",
            "tonase": 106904
          },
          {
            "bahan_baku": -5994,
            "company": "PM02",
            "company_id": 23,
            "hpp": 5176.85,
            "id": 580,
            "period": "2017-02-09",
            "tonase": 210419
          },
          {
            "bahan_baku": 53469,
            "company": "PM02",
            "company_id": 23,
            "hpp": 4447.8,
            "id": 581,
            "period": "2017-02-10",
            "tonase": 135637
          },
          {
            "bahan_baku": -6290,
            "company": "PM05",
            "company_id": 26,
            "hpp": 6392.08,
            "id": 565,
            "period": "2017-01-25",
            "tonase": 81690
          },
          {
            "bahan_baku": -2051,
            "company": "PM05",
            "company_id": 26,
            "hpp": 4575.36,
            "id": 566,
            "period": "2017-01-26",
            "tonase": 171624
          },
          {
            "bahan_baku": 12175,
            "company": "PM05",
            "company_id": 26,
            "hpp": 4866.51,
            "id": 568,
            "period": "2017-01-27",
            "tonase": 144963
          },
          {
            "bahan_baku": -5960,
            "company": "PM05",
            "company_id": 26,
            "hpp": 4638.34,
            "id": 574,
            "period": "2017-01-28",
            "tonase": 160866
          },
          {
            "bahan_baku": -19677,
            "company": "PM05",
            "company_id": 26,
            "hpp": 4619.36,
            "id": 575,
            "period": "2017-01-29",
            "tonase": 128546
          },
          {
            "bahan_baku": 40711,
            "company": "PM05",
            "company_id": 26,
            "hpp": 4613.91,
            "id": 576,
            "period": "2017-01-30",
            "tonase": 140746
          }
        ],
        "hppBulanan": [
          {
            "company": "PM1",
            "hpp": 4899.89,
            "period": "2016-12"
          },
          {
            "company": "PM1",
            "hpp": 4575.73,
            "period": "2016-07"
          },
          {
            "company": "PM1",
            "hpp": 5649.85,
            "period": "2017-02"
          },
          {
            "company": "PM1",
            "hpp": 4279.66,
            "period": "2016-08"
          },
          {
            "company": "PM1",
            "hpp": 5059.05,
            "period": "2017-01"
          },
          {
            "company": "PM1",
            "hpp": 4341.88,
            "period": "2016-05"
          },
          {
            "company": "PM1",
            "hpp": 4537.81,
            "period": "2016-11"
          },
          {
            "company": "PM1",
            "hpp": 4338.7,
            "period": "2016-06"
          },
          {
            "company": "PM1",
            "hpp": 4170.2,
            "period": "2016-09"
          },
          {
            "company": "PM1",
            "hpp": 4261.05,
            "period": "2016-04"
          },
          {
            "company": "PM1",
            "hpp": 4202.3,
            "period": "2016-10"
          },
          {
            "company": "PM1",
            "hpp": 1011.42,
            "period": "2016-03"
          },
          {
            "company": "PM2",
            "hpp": 5191.65,
            "period": "2016-08"
          },
          {
            "company": "PM2",
            "hpp": 5864.16,
            "period": "2016-09"
          },
          {
            "company": "PM2",
            "hpp": 5782.47,
            "period": "2016-10"
          },
          {
            "company": "PM2",
            "hpp": 6088.83,
            "period": "2017-01"
          },
          {
            "company": "PM2",
            "hpp": 0,
            "period": "2016-03"
          },
          {
            "company": "PM2",
            "hpp": 5304.89,
            "period": "2016-12"
          },
          {
            "company": "PM2",
            "hpp": 5510.18,
            "period": "2016-11"
          },
          {
            "company": "PM2",
            "hpp": 4826.6,
            "period": "2016-07"
          },
          {
            "company": "PM2",
            "hpp": 5772.15,
            "period": "2017-02"
          },
          {
            "company": "PM5",
            "hpp": 4770.77,
            "period": "2016-07"
          },
          {
            "company": "PM5",
            "hpp": 5141.08,
            "period": "2016-06"
          },
          {
            "company": "PM5",
            "hpp": 5474.23,
            "period": "2016-12"
          },
          {
            "company": "PM5",
            "hpp": 5725.31,
            "period": "2016-11"
          },
          {
            "company": "PM5",
            "hpp": 4950.93,
            "period": "2017-01"
          },
          {
            "company": "PM5",
            "hpp": 12864.61,
            "period": "2016-05"
          },
          {
            "company": "PM5",
            "hpp": 0,
            "period": "2016-03"
          },
          {
            "company": "PM5",
            "hpp": 5193,
            "period": "2016-08"
          },
          {
            "company": "PM5",
            "hpp": 5653.98,
            "period": "2016-09"
          },
          {
            "company": "PM5",
            "hpp": 5076.39,
            "period": "2016-10"
          }
        ],
        "produksi": [
          {
            "company": "PM1",
            "roll": 22,
            "stock_in_date": "2017-02-13",
            "weight": 31.62
          },
          {
            "company": "PM1",
            "roll": 128,
            "stock_in_date": "2017-02-12",
            "weight": 171.28
          },
          {
            "company": "PM1",
            "roll": 116,
            "stock_in_date": "2017-02-11",
            "weight": 171.72
          },
          {
            "company": "PM1",
            "roll": 110,
            "stock_in_date": "2017-02-10",
            "weight": 148.19
          },
          {
            "company": "PM1",
            "roll": 96,
            "stock_in_date": "2017-02-09",
            "weight": 143.92
          },
          {
            "company": "PM1",
            "roll": 72,
            "stock_in_date": "2017-02-08",
            "weight": 106.79
          },
          {
            "company": "PM1",
            "roll": 46,
            "stock_in_date": "2017-02-07",
            "weight": 67.87
          },
          {
            "company": "PM1",
            "roll": 80,
            "stock_in_date": "2017-02-06",
            "weight": 118.25
          },
          {
            "company": "PM1",
            "roll": 10,
            "stock_in_date": "2017-02-05",
            "weight": 14.52
          },
          {
            "company": "PM1",
            "roll": 74,
            "stock_in_date": "2017-02-03",
            "weight": 109.8
          },
          {
            "company": "PM1",
            "roll": 96,
            "stock_in_date": "2017-02-02",
            "weight": 124.94
          },
          {
            "company": "PM1",
            "roll": 125,
            "stock_in_date": "2017-02-01",
            "weight": 157
          },
          {
            "company": "PM1",
            "roll": 102,
            "stock_in_date": "2017-01-31",
            "weight": 132.8
          },
          {
            "company": "PM2",
            "roll": 93,
            "stock_in_date": "2017-02-10",
            "weight": 135.64
          },
          {
            "company": "PM2",
            "roll": 140,
            "stock_in_date": "2017-02-09",
            "weight": 210.42
          },
          {
            "company": "PM2",
            "roll": 90,
            "stock_in_date": "2017-02-08",
            "weight": 106.9
          },
          {
            "company": "PM2",
            "roll": 30,
            "stock_in_date": "2017-02-07",
            "weight": 34.89
          },
          {
            "company": "PM2",
            "roll": 144,
            "stock_in_date": "2017-02-06",
            "weight": 171.26
          },
          {
            "company": "PM2",
            "roll": 114,
            "stock_in_date": "2017-02-05",
            "weight": 194.95
          },
          {
            "company": "PM2",
            "roll": 134,
            "stock_in_date": "2017-02-04",
            "weight": 212.56
          },
          {
            "company": "PM2",
            "roll": 36,
            "stock_in_date": "2017-01-30",
            "weight": 41.8
          },
          {
            "company": "PM2",
            "roll": 117,
            "stock_in_date": "2017-01-29",
            "weight": 171.96
          },
          {
            "company": "PM2",
            "roll": 117,
            "stock_in_date": "2017-01-28",
            "weight": 164.71
          },
          {
            "company": "PM5",
            "roll": 108,
            "stock_in_date": "2017-01-30",
            "weight": 140.75
          },
          {
            "company": "PM5",
            "roll": 98,
            "stock_in_date": "2017-01-29",
            "weight": 128.55
          },
          {
            "company": "PM5",
            "roll": 122,
            "stock_in_date": "2017-01-28",
            "weight": 160.87
          },
          {
            "company": "PM5",
            "roll": 110,
            "stock_in_date": "2017-01-27",
            "weight": 144.96
          },
          {
            "company": "PM5",
            "roll": 147,
            "stock_in_date": "2017-01-26",
            "weight": 171.62
          },
          {
            "company": "PM5",
            "roll": 62,
            "stock_in_date": "2017-01-25",
            "weight": 81.69
          }
        ],
        "sales": {
          "jumlah": 20,
          "sales_date": "feb 2017"
        },
        "produksi_blnan": [
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2017-02",
            "total_weight": 1365.88
          },
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2017-01",
            "total_weight": 4089.29
          },
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2016-12",
            "total_weight": 2349.93
          },
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2016-11",
            "total_weight": 3883.35
          },
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2016-10",
            "total_weight": 4166.73
          },
          {
            "company": "PM1",
            "company_id": 22,
            "stock_month": "2016-09",
            "total_weight": 4748.37
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2017-02",
            "total_weight": 1066.62
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2017-01",
            "total_weight": 3005.35
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2016-12",
            "total_weight": 3032.03
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2016-11",
            "total_weight": 851.35
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2016-10",
            "total_weight": 2206.23
          },
          {
            "company": "PM2",
            "company_id": 23,
            "stock_month": "2016-09",
            "total_weight": 1573.23
          },
          {
            "company": "PM5",
            "company_id": 26,
            "stock_month": "2017-01",
            "total_weight": 828.44
          },
          {
            "company": "PM5",
            "company_id": 26,
            "stock_month": "2016-12",
            "total_weight": 921.57
          },
          {
            "company": "PM5",
            "company_id": 26,
            "stock_month": "2016-11",
            "total_weight": 1547.76
          },
          {
            "company": "PM5",
            "company_id": 26,
            "stock_month": "2016-10",
            "total_weight": 1640.2
          },
          {
            "company": "PM5",
            "company_id": 26,
            "stock_month": "2016-09",
            "total_weight": 2444.93
          }
        ],
        "expediture": [
          {
            "company": "PM1",
            "company_id": 22,
            "delivery_month": "2017-02",
            "total_weight": 1515.37
          },
          {
            "company": "PM1",
            "company_id": 22,
            "delivery_month": "2017-01",
            "total_weight": 4176.38
          },
          {
            "company": "PM2",
            "company_id": 23,
            "delivery_month": "2017-02",
            "total_weight": 1245.88
          },
          {
            "company": "PM2",
            "company_id": 23,
            "delivery_month": "2017-01",
            "total_weight": 3164.18
          },
          {
            "company": "PM5",
            "company_id": 26,
            "delivery_month": "2017-02",
            "total_weight": 702.62
          },
          {
            "company": "PM5",
            "company_id": 26,
            "delivery_month": "2017-01",
            "total_weight": 988.85
          }
        ],
        "prod_bln_produk": [
          {
            "company": "PM2",
            "shortname": "CM",
            "total_weight": 1066.62
          },
          {
            "company": "PM1",
            "shortname": "CM",
            "total_weight": 1342.58
          },
          {
            "company": "PM1",
            "shortname": "ML",
            "total_weight": 23.35
          }
        ],
        "avg_prod_bulanan": [
          {
            "average": 5443,
            "roll_date": "2016-09",
            "shortname": "BK"
          },
          {
            "average": 5593,
            "roll_date": "2016-10",
            "shortname": "BK"
          },
          {
            "average": 5585,
            "roll_date": "2016-11",
            "shortname": "BK"
          },
          {
            "average": 5554,
            "roll_date": "2016-12",
            "shortname": "BK"
          },
          {
            "average": 5568,
            "roll_date": "2017-01",
            "shortname": "BK"
          },
          {
            "average": 5790,
            "roll_date": "2017-02",
            "shortname": "BK"
          },
          {
            "average": 6250,
            "roll_date": "2016-09",
            "shortname": "BKS"
          },
          {
            "average": 6250,
            "roll_date": "2016-10",
            "shortname": "BKS"
          },
          {
            "average": 5614,
            "roll_date": "2016-09",
            "shortname": "CM"
          },
          {
            "average": 5688,
            "roll_date": "2016-10",
            "shortname": "CM"
          },
          {
            "average": 5101,
            "roll_date": "2016-11",
            "shortname": "CM"
          },
          {
            "average": 4596,
            "roll_date": "2016-12",
            "shortname": "CM"
          },
          {
            "average": 5470,
            "roll_date": "2017-01",
            "shortname": "CM"
          },
          {
            "average": 5642,
            "roll_date": "2017-02",
            "shortname": "CM"
          },
          {
            "average": 10200,
            "roll_date": "2016-09",
            "shortname": "HVS"
          },
          {
            "average": 10200,
            "roll_date": "2016-11",
            "shortname": "HVS"
          },
          {
            "average": 8784,
            "roll_date": "2017-01",
            "shortname": "HVS"
          },
          {
            "average": 7000,
            "roll_date": "2017-02",
            "shortname": "HVS"
          },
          {
            "average": 5310,
            "roll_date": "2016-09",
            "shortname": "ML"
          },
          {
            "average": 5347,
            "roll_date": "2016-10",
            "shortname": "ML"
          },
          {
            "average": 5305,
            "roll_date": "2016-11",
            "shortname": "ML"
          },
          {
            "average": 5362,
            "roll_date": "2016-12",
            "shortname": "ML"
          },
          {
            "average": 5301,
            "roll_date": "2017-01",
            "shortname": "ML"
          },
          {
            "average": 5300,
            "roll_date": "2017-02",
            "shortname": "ML"
          }
        ],
        "avg_price_bulanan": [
          {
            "average_price": 5642,
            "company": "PM1",
            "roll_date": "2016-09",
            "shortname": "CM"
          },
          {
            "average_price": 5688,
            "company": "PM1",
            "roll_date": "2016-10",
            "shortname": "CM"
          },
          {
            "average_price": 5658,
            "company": "PM1",
            "roll_date": "2016-11",
            "shortname": "CM"
          },
          {
            "average_price": 5659,
            "company": "PM1",
            "roll_date": "2016-12",
            "shortname": "CM"
          },
          {
            "average_price": 5619,
            "company": "PM1",
            "roll_date": "2017-01",
            "shortname": "CM"
          },
          {
            "average_price": 5620,
            "company": "PM1",
            "roll_date": "2017-02",
            "shortname": "CM"
          },
          {
            "average_price": 5356,
            "company": "PM1",
            "roll_date": "2016-09",
            "shortname": "ML"
          },
          {
            "average_price": 5400,
            "company": "PM1",
            "roll_date": "2016-10",
            "shortname": "ML"
          },
          {
            "average_price": 5356,
            "company": "PM1",
            "roll_date": "2016-11",
            "shortname": "ML"
          },
          {
            "average_price": 5364,
            "company": "PM1",
            "roll_date": "2016-12",
            "shortname": "ML"
          },
          {
            "average_price": 5322,
            "company": "PM1",
            "roll_date": "2017-01",
            "shortname": "ML"
          },
          {
            "average_price": 5300,
            "company": "PM1",
            "roll_date": "2017-02",
            "shortname": "ML"
          },
          {
            "average_price": 5682,
            "company": "PM2",
            "roll_date": "2016-09",
            "shortname": "BK"
          },
          {
            "average_price": 5667,
            "company": "PM2",
            "roll_date": "2016-10",
            "shortname": "BK"
          },
          {
            "average_price": 5664,
            "company": "PM2",
            "roll_date": "2016-11",
            "shortname": "BK"
          },
          {
            "average_price": 5334,
            "company": "PM2",
            "roll_date": "2017-01",
            "shortname": "BK"
          },
          {
            "average_price": 5531,
            "company": "PM2",
            "roll_date": "2016-09",
            "shortname": "CM"
          },
          {
            "average_price": 5690,
            "company": "PM2",
            "roll_date": "2016-10",
            "shortname": "CM"
          },
          {
            "average_price": 2585,
            "company": "PM2",
            "roll_date": "2016-11",
            "shortname": "CM"
          },
          {
            "average_price": 2113,
            "company": "PM2",
            "roll_date": "2016-12",
            "shortname": "CM"
          },
          {
            "average_price": 5025,
            "company": "PM2",
            "roll_date": "2017-01",
            "shortname": "CM"
          },
          {
            "average_price": 5708,
            "company": "PM2",
            "roll_date": "2017-02",
            "shortname": "CM"
          },
          {
            "average_price": 10200,
            "company": "PM2",
            "roll_date": "2016-09",
            "shortname": "HVS"
          },
          {
            "average_price": 10200,
            "company": "PM2",
            "roll_date": "2016-11",
            "shortname": "HVS"
          },
          {
            "average_price": 8784,
            "company": "PM2",
            "roll_date": "2017-01",
            "shortname": "HVS"
          },
          {
            "average_price": 7000,
            "company": "PM2",
            "roll_date": "2017-02",
            "shortname": "HVS"
          },
          {
            "average_price": 5304,
            "company": "PM2",
            "roll_date": "2016-09",
            "shortname": "ML"
          },
          {
            "average_price": 5332,
            "company": "PM2",
            "roll_date": "2016-10",
            "shortname": "ML"
          },
          {
            "average_price": 5284,
            "company": "PM2",
            "roll_date": "2016-11",
            "shortname": "ML"
          },
          {
            "average_price": 5345,
            "company": "PM2",
            "roll_date": "2016-12",
            "shortname": "ML"
          },
          {
            "average_price": 5260,
            "company": "PM2",
            "roll_date": "2017-01",
            "shortname": "ML"
          },
          {
            "average_price": 5319,
            "company": "PM5",
            "roll_date": "2016-09",
            "shortname": "BK"
          },
          {
            "average_price": 5533,
            "company": "PM5",
            "roll_date": "2016-10",
            "shortname": "BK"
          },
          {
            "average_price": 5581,
            "company": "PM5",
            "roll_date": "2016-11",
            "shortname": "BK"
          },
          {
            "average_price": 5554,
            "company": "PM5",
            "roll_date": "2016-12",
            "shortname": "BK"
          },
          {
            "average_price": 5594,
            "company": "PM5",
            "roll_date": "2017-01",
            "shortname": "BK"
          },
          {
            "average_price": 5790,
            "company": "PM5",
            "roll_date": "2017-02",
            "shortname": "BK"
          },
          {
            "average_price": 6250,
            "company": "PM5",
            "roll_date": "2016-09",
            "shortname": "BKS"
          },
          {
            "average_price": 6250,
            "company": "PM5",
            "roll_date": "2016-10",
            "shortname": "BKS"
          },
          {
            "average_price": 4300,
            "company": "PM5",
            "roll_date": "2016-10",
            "shortname": "ML"
          },
          {
            "average_price": 4300,
            "company": "PM5",
            "roll_date": "2016-11",
            "shortname": "ML"
          },
          {
            "average_price": 4300,
            "company": "PM5",
            "roll_date": "2017-01",
            "shortname": "ML"
          }
        ],
        "outstanding_po": [
          {
            "avg_unit_price": 4300,
            "blm_turun_ukuran": 214,
            "delivery_province": "",
            "total_outstanding": null
          },
          {
            "avg_unit_price": 5479.8,
            "blm_turun_ukuran": 4603,
            "delivery_province": "JAWA BARAT",
            "total_outstanding": 5007.622
          },
          {
            "avg_unit_price": 5784,
            "blm_turun_ukuran": 0,
            "delivery_province": "JAWA TENGAH",
            "total_outstanding": 0
          },
          {
            "avg_unit_price": 5397.25,
            "blm_turun_ukuran": 2483.531,
            "delivery_province": "JAWA TIMUR",
            "total_outstanding": 140.15399000000022
          },
          {
            "avg_unit_price": 5600,
            "blm_turun_ukuran": 480,
            "delivery_province": "SUMATERA UTARA",
            "total_outstanding": null
          }
        ],
        "avg_price_daily": [
          {
            "avg": 5597,
            "company_name": "PM 1",
            "delivery_date": "2017-01-21",
            "delivery_quantity": 151.46
          }, {
            "avg": 5640,
            "company_name": "PM 1",
            "delivery_date": "2017-01-20",
            "delivery_quantity": 252.63
          }, {
            "avg": 5594,
            "company_name": "PM 1",
            "delivery_date": "2017-01-19",
            "delivery_quantity": 170.3
          }, {
            "avg": 5656,
            "company_name": "PM 1",
            "delivery_date": "2017-01-18",
            "delivery_quantity": 309.88
          }, {
            "avg": 5716,
            "company_name": "PM 2",
            "delivery_date": "2017-01-21",
            "delivery_quantity": 135.19
          }, {
            "avg": 5669,
            "company_name": "PM 2",
            "delivery_date": "2017-01-20",
            "delivery_quantity": 188.36
          }, {
            "avg": 5533,
            "company_name": "PM 2",
            "delivery_date": "2017-01-19",
            "delivery_quantity": 229.73
          }, {
            "avg": 5814,
            "company_name": "PM 2",
            "delivery_date": "2017-01-18",
            "delivery_quantity": 61.94
          }, {
            "avg": 4500,
            "company_name": "PM 5",
            "delivery_date": "2017-01-21",
            "delivery_quantity": 1.38
          }, {
            "avg": 4500,
            "company_name": "PM 5",
            "delivery_date": "2017-01-19",
            "delivery_quantity": 3.77
          }
        ]
      }
    };
  }

  getData() {
    return this.data;
  }

}
