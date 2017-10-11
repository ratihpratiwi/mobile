import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import { Headers } from '@angular/http';
// import {UrlMasterProvider} from '../../providers/url-master/url-master';
import 'rxjs/add/operator/map';

@Injectable()
export class RolebaseProvider {
  private headers = new Headers({ 'precise-token': "appToken"});
  constructor(public http: Http, public storage: Storage) {
  }

  userRole() {
    return this.storage.get("roles");
  }

}

