import {Component} from '@angular/core';
import {Platform, AlertController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
// import { Push, PushObject, PushOptions} from '@ionic-native/push';
declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.pushsetup();
      splashScreen.hide();
    });
  }

  pushsetup() {
    //   const options: PushOptions = {
    //     android: {
    //       senderID: 'test'
    //     }};
    //   const pushObject: PushObject = this.push.init(options);
    //   pushObject.on('notification').subscribe((notification: any) => {
    //     if (notification.additionalData.foreground) {
    //       let youralert = this.alertCtrl.create({
    //         title: 'New Push notification',
    //         message: notification.message
    //       });
    //       youralert.present();
    //     }
    //   });
    //   pushObject.on('registration').subscribe((registration: any) => {
    //     //do whatever you want with the registration ID
    //   });
    //
    //   pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    // }
      FCMPlugin.onTokenRefresh(function(token){
        alert( token );
      });
      FCMPlugin.getToken(
        function (token) {
          console.log(token);
          alert(token);
        },
        function (err) {
          console.log('error retrieving token: ' + err);
        }
      );
      FCMPlugin.onNotification(
        function (data) {
          console.log(data)
          if (data.wasTapped) {

            //Notification was received on device tray and tapped by the user.
            alert(JSON.stringify(data));
          } else {
            //Notification was received in foreground. Maybe the user needs to be notified.
            alert(JSON.stringify(data));
          }
        },
        function (msg) {
          console.log('onNotification callback successfully registered: ' + msg);
        },
        function (err) {
          console.log('Error registering onNotification callback: ' + err);
        }
      )

    }
  }
