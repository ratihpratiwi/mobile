import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform, AlertController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";
import {Push, PushObject, PushOptions} from '@ionic-native/push';
import {JwtHelper} from 'angular2-jwt';
import {LoginService} from '../providers/login-service'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public alertCtrl: AlertController, public push: Push, private storage: Storage, public loginService: LoginService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.pushsetup(this.storage);
      splashScreen.hide();  
      this.storage.get("appToken").then(token => {
        if (token != null && !this.jwtHelper.isTokenExpired(token)) {
          this.rootPage = TabsPage;
        }
        else if (this.jwtHelper.isTokenExpired(token)) {
          return new Promise((resolve,reject) => {
            loginService.refreshAuthToken(token);
            this.storage.set("appToken", token).then(token => {
              console.log("appToken" + token);
              resolve(token);
            })
          })
        }
      })
    });
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
      console.info(token.registrationId.toString());
      this.storage.set("registerId", token.registrationId.toString());
    });
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));

  }
}
