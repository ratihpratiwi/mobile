import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class RolebaseProvider {
  constructor(public http: Http, public storage: Storage) {
  }

  userRole() {
    return this.storage.get("roles");
  }
}

