import {Component, NgZone} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RequestOrderPagePage} from "../request-order/request-order";
import {PocPage} from "../poc/poc";
import {RequestService} from '../../providers/request-service';
import {PocService} from '../../providers/poc-service';
import {RolebaseProvider} from '../../providers/rolebase/rolebase';
import * as _ from 'underscore/underscore';
@Component({
  selector: 'page-approval-list',
  templateUrl: 'approval-list.html'
})
export class ApprovalListPage {
  requestApprovalData: any;
  pocApprovalData: any;
  role: any;
  rolePOC: boolean = false;
  roleRQO: boolean = false;
  token1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public requestService: RequestService,
              public pocService: PocService, private zone: NgZone, public rolebaseProvider: RolebaseProvider) {
  }

  ionViewWillEnter() {
    this.zone.run(() => {
      if (this.roleRQO == true) {
        this.requestService.getAllApprovalRequest().subscribe(res => {
          this.requestApprovalData = res;
        });
      }
      if (this.rolePOC == true) {
        this.pocService.getAllApprovalPoc().subscribe(result => {
          this.pocApprovalData = result;
        })
      }
    })
  }

  ionViewDidLoad() {
    this.rolebaseProvider.userRole().then(arrRoles => {
      this.rolePOC = _.some(arrRoles, function (item) {
        return "APPROVAL_POC" === item;
      });
      this.roleRQO = _.some(arrRoles, function (item) {
        return "APPROVAL_REQUEST_ORDER" === item;
      });
    })
  }

  public openDetailPage() {
    this.navCtrl.push(RequestOrderPagePage);
  }

  openDetailPage1() {
    this.navCtrl.push(PocPage);
  }
}
