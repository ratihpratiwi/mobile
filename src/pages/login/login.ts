import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from '../../providers/login-service';
import {AlertController} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Push, PushObject, PushOptions} from '@ionic-native/push';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {};
  msg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService,
              private storage: Storage, public loadingCtrl: LoadingController, private push: Push, private alertCtrl: AlertController) {
    this.storage.get("registerId").then(data => {
      console.info("registration id " + data);
    })
  }

  loginHandler(loginData, e) {

    e.preventDefault();
    if (loginData != null) {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
      this.loginService.login(loginData).subscribe(res => {
        var result = res.json();
        this.storage.clear();
        this.storage.set("appToken", result.token);
        this.storage.set("user", result.user);
        this.storage.set("roles", result.user.roles);
        this.navCtrl.push(TabsPage)
        this.pushsetup(this.storage);
        console.log(res.json())
      });

    }
  }

  pushsetup(storage: Storage) {
    const options: PushOptions = {
      android: {
        senderID: '585010460811'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let alert = this.alertCtrl.create({
          title: 'Push Alert',
          message: notification.message
        });
        alert.present();
      }
    });


    pushObject.on('registration').subscribe((token: any) => {
      this.storage.set("registerId", token.registrationId.toString());
      this.loginService.registerPushId(token.registrationId.toString()).subscribe(res => {
      });
    });
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));

  }
}
