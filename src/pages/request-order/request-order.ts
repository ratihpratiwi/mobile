import { Component, OnInit, NgZone} from '@angular/core';
import {RequestService} from '../../providers/request-service';
import {RequestOrderDetailPagePage} from '../request-order-detail/request-order-detail';
import { NavController, NavParams } from 'ionic-angular';

// import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'page-request-order',
  templateUrl: 'request-order.html'
})
export class RequestOrderPagePage  {
  requestApprovalData: any;
  // Storage: Storage = new Storage();
  constructor(public navCtrl: NavController, public navParams: NavParams, private requestService: RequestService, private zone: NgZone) { }
  ionViewWillEnter(){
    this.zone.run(() => {
      this.requestService.getAllApprovalRequest().subscribe(res => {
        this.requestApprovalData = res;
      })
    })
  }

  public openDetailPage(event, id): void {
    this.navCtrl.push(RequestOrderDetailPagePage, { id: id });
  }
}
