import {Component, OnInit} from '@angular/core';
import {RequestDetailService} from '../../providers/request-detail-service';
import {RequestNavigatePage}from "../request-navigate/request-navigate";
import {NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'page-request-order-detail',
  templateUrl: 'request-order-detail.html'
})
export class RequestOrderDetailPagePage implements OnInit {
  requestdetailApprovalData: any;
  requestApprovalData: any;
  rqodetails: string = "detail";
  colorPending: string = "danger";
  colorReject: string = "danger";
  colorApprove: string = "danger";
  constructor(public navCtrl: NavController, public navParams: NavParams, private requestdetailService: RequestDetailService) {
  }

  ngOnInit(): void {
      this.requestdetailService.getAllApprovalRequestDetail(this.navParams.data.id).subscribe(res => {
        this.requestdetailApprovalData = res;
        for (let item of this.requestdetailApprovalData.details) {
          item.colorPending = "danger";
          item.colorApprove = "danger";
          item.colorReject = "danger";
        }
      })
  }

  statusApprovalPending(e: any, i: any) {
    i.status_approval = "Pending";
    i.colorPending = "Primary";
    i.colorReject = "danger";
    i.colorApprove = "danger";
  }

  statusApprovalReject(a: any, b: any) {
    b.status_approval = "Reject";
    b.colorReject = "Primary";
    b.colorPending = "danger";
    b.colorApprove = "danger";
  }

  statusApprovalApprove(l: any, m: any) {
    m.status_approval = "Approve";
    m.colorApprove = "Primary";
    m.colorPending = "danger";
    m.colorReject = "danger";
  }

  simpan(event, e) {
    for (let item of e.details) {
      item.est_unit_price = parseFloat(item.est_unit_price);
    }
    this.requestdetailService.saveRqo(e);
  }

  public openDetailPage(event, item): void {
    this.navCtrl.push(RequestNavigatePage, item);
  }
}
