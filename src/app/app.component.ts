import {Component} from '@angular/core';
// import {FCM} from '@ionic-native/fcm';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // this.initializeApp();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // private initializeApp(): void {
  //   if (this.platform.is('android') || this.platform.is('ios')) {
  //     FCMPlugin.getToken(
  //       (pushRegistrationId: any) => {
  //         console.log('Push registration ID: ');
  //         console.log(pushRegistrationId);
  //       },
  //       (err: any) => {
  //         console.log('error retrieving push registration id: ' + err);
  //       }
  //     );
  //   }
  // }
}
