import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Push, PushObject, PushOptions} from '@ionic-native/push';
@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html',
})
export class NotifPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private push: Push) {

  }

}
