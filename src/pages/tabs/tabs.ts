import { Component, NgZone } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { DashboardMenuPage } from '../dashboard-menu/dashboard-menu';
import { ApprovalListPage } from "../approval-list/approval-list";
import { RequestService } from '../../providers/request-service';
import { PocService } from '../../providers/poc-service';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = DashboardMenuPage;
  tab2Root = ProfilePage;
  tab3Root = ApprovalListPage;
  requestApprovalData: any;
  pocApprovalData: any;
  constructor(public requestService: RequestService, public pocService: PocService, private zone: NgZone) { }
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
}
