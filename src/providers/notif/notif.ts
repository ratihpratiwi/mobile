import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FCM } from '@ionic-native/fcm';
import {Platform} from 'ionic-angular'
import 'rxjs/add/operator/map';
declare var FCMPlugin;
@Injectable()
export class NotifProvider {
  constructor(public http: Http, private platform:Platform) {
    this.platform.ready().then(() => {
      if(typeof(FCMPlugin) !== "undefined"){
        FCMPlugin.getToken(function(t){
          console.log("Use this token for sending device specific messages\nToken: " + t);
        }, function(e){
          console.log("Uh-Oh!\n"+e);
        });

        FCMPlugin.onNotification(function(d){
          if(d.wasTapped){
          } else {
          }
        }, function(msg){
        }, function(err){
          console.log("Arf, no good mate... " + err);
        });
      } else console.log("Notifications disabled, only provided in Android/iOS environment");
    });
  }

}
