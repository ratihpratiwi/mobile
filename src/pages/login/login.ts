import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from '../../providers/login-service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {};
  msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService,
              private storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  loginHandler(loginData) {

    if (loginData != null) {

      console.log(loginData)
      this.loginService.login(loginData).subscribe(res => {
        var result = res.json();
        this.storage.set("appToken", result.token);
        this.storage.set("user", result.user);
        this.navCtrl.push(TabsPage)
        console.log(res)
      });
    }
    // this.loginService.login(loginData).subscribe(res => {
    //   let alert = this.alertCtrl.create({
    //     title: "pesan: "+ res,
    //     buttons: ['Cancel']
    //   });
    //   alert.present();
    // })
    }
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
