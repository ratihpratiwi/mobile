import {Component, NgZone} from '@angular/core';
import {ProfilePage} from '../profile/profile';
import {DashboardMenuPage} from '../dashboard-menu/dashboard-menu';
import {ApprovalListPage} from "../approval-list/approval-list";
import {RequestService} from '../../providers/request-service';
import {PocService} from '../../providers/poc-service';
import {RolebaseProvider} from '../../providers/rolebase/rolebase';
import * as _ from 'underscore/underscore';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = DashboardMenuPage;
  tab2Root = ProfilePage;
  tab3Root = ApprovalListPage;
  requestApprovalData: any;
  pocApprovalData: any;
  rolePOC: boolean = false;
  roleRQO: boolean = false;
  constructor(public requestService: RequestService, public pocService: PocService, private zone: NgZone, public rolebaseProvider: RolebaseProvider) {
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
}
