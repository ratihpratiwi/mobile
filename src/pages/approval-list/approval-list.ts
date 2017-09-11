import {Component, OnInit, NgZone} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RequestOrderPagePage} from "../request-order/request-order";
import {PocPage} from "../poc/poc";
import {RequestService} from '../../providers/request-service';
import {PocService} from '../../providers/poc-service';

@Component({
  selector: 'page-approval-list',
  templateUrl: 'approval-list.html'
})
export class ApprovalListPage {
  requestApprovalData: any;
  pocApprovalData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public requestService: RequestService,
              public pocService: PocService, private zone: NgZone) {
  }
  ionViewWillEnter(){
    this.zone.run(() => {
      this.requestService.getAllApprovalRequest().subscribe(res => {
        this.requestApprovalData = res;
      })

      this.pocService.getAllApprovalPoc().subscribe(result => {
        this.pocApprovalData = result;
      })
    })
  }
  public openDetailPage() {
    this.navCtrl.push(RequestOrderPagePage);
  }

  openDetailPage1() {
    this.navCtrl.push(PocPage);
  }

}
