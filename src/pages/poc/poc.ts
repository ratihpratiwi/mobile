import {Component, OnInit, NgZone} from '@angular/core';
import {PocService} from '../../providers/poc-service';
import {PocDetailPage} from '../poc-detail/poc-detail';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-poc',
  templateUrl: 'poc.html',
})
export class PocPage implements OnInit {
  pocApprovalData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pocService: PocService, private zone: NgZone) {
  }
  ionViewWillEnter(){
    this.zone.run(() => {
      this.pocService.getAllApprovalPoc().subscribe(result => {
        this.pocApprovalData = result;
      })
    })
  }
  ngOnInit(): void {

  }

  public openDetailPage(event, id): void {
    this.navCtrl.push(PocDetailPage, {id: id});
  }

}
