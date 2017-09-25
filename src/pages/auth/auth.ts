import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { IonicStorageModule } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
this.storage.get('id_token').then(token=>{
      console.log (tokenNotExpired('id_token'));
});
  }
}
