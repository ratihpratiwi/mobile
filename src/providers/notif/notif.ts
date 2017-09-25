import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import 'rxjs/add/operator/map';
@Injectable()
export class NotifProvider {
  private headers = new Headers({ 'precise-token': UrlMasterProvider.token1 });
  constructor(public http: Http) {
  }
  showNotif(){
    return this.http.post("https://fcm.googleapis.com/fcm/send", { headers: this.headers }).map(data => data.json().result);
  }
}
