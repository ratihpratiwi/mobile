import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {LoginService} from '../../providers/login-service';
import 'rxjs/add/operator/map';

@Injectable()
export class RolebaseProvider {
  constructor(public http: Http, public authHttp: AuthHttp, public storage: Storage, public loginService: LoginService) {
  }

  userRole() {
    return this.storage.get("roles");
  }
}

