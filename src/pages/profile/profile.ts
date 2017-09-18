import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { ProfileProvider} from "../../providers/profile/profile";
import {Storage} from '@ionic/storage';
import {LoginPage} from '../../pages/login/login';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider,
              public storage: Storage, public nav: Nav) {
  }

  ngOnInit(): void {
    this.storage.get("user").then((val) => {
      this.profileProvider.getProfile(val.employeeId).subscribe(res=>{
       this.user = Object.assign(res,val)
      })
    })
  }
  logout(){
    this.storage.remove("appToken");
    this.storage.remove("user");
    this.nav.setRoot(LoginPage).then(()=> {
      this.nav.popToRoot()
    });
  }
}
