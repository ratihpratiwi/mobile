import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestDetailService } from "../../providers/request-detail-service";
import { RequestOrderDetailPagePage } from "../request-order-detail/request-order-detail";
@Component({
  selector: 'page-request-navigate',
  templateUrl: 'request-navigate.html',
})
export class RequestNavigatePage implements OnInit {
  requestItem: any;
  rqodetails: string = "detail";
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestdetailService: RequestDetailService) { }
  ngOnInit(): void {
    this.requestItem=this.navParams.data;
  }
}
