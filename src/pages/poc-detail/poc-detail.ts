import {Component, OnInit} from '@angular/core';
import {PocDetailService} from '../../providers/pocdetail-service';
import {NavController, NavParams} from 'ionic-angular';
import {PocPage} from "../poc/poc";

@Component({
  selector: 'page-poc-detail',
  templateUrl: 'poc-detail.html'
})
export class PocDetailPage {
  pocdetail: string = "master";
  pocdetailApprovalData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pocdetailService: PocDetailService) {
  }

  ngOnInit(): void {
    this.pocdetailService.getAllApprovalPocDetail(this.navParams.data.id).subscribe(result => {
      this.pocdetailApprovalData = result;
    });

  }

  simpan(event, p) {
    for (let item of p.details) {
      item.trn_po_cust_dtl_unit_price = parseFloat(item.trn_po_cust_dtl_unit_price);
    }
    this.pocdetailService.savePoc(p);
    this.navCtrl.push(PocPage, {data: p});
  }

  statusApprovalChanged(e: any) {
    this.pocdetailApprovalData.approval_status = e.checked;
  }
}
