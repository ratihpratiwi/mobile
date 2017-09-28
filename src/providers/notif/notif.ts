import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {UrlMasterProvider} from '../../providers/url-master/url-master';
import 'rxjs/add/operator/map';
@Injectable()
export class NotifProvider {
  private headers = new Headers({ 'precise-token': 'cp1YSQk7vfg:APA91bG99P8YVhr6LpdRf78VU3Fk0IF1VACH_0TuB3qwsNJBQDcRHYrMn2qGsBodw58D8s_DW_TbFzN9q1rj_wzkPFRz5aF8WzqVaNY1UDo89pqfIFTwB4eYNOwIlD8W_kqMggZsCb2F' });
  private notifUrl = UrlMasterProvider.urlAPI+'/notification/test_push';
  constructor(public http: Http) {
  }
  showNotif(){
    return this.http.post(this.notifUrl, { headers: this.headers }).map(data => data.json().result);
  }
}
