import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardServiceProvider } from '../../providers/dashboard-service/dashboard-service';
import { LaporanProduksiPage } from "../../pages/laporan-produksi/laporan-produksi";
import { PengirimanNavigatePage } from "../../pages/pengiriman-navigate/pengiriman-navigate";
import {LoadingController} from 'ionic-angular';
import { HppPage } from "../../pages/hpp/hpp";
import { SalesNavigatePage } from "../../pages/sales-navigate/sales-navigate";
import { ChartStockBbPage } from "../../pages/chart-stock-bb/chart-stock-bb";
import {LoginPage} from "../login/login";
import {LoginService} from '../../providers/login-service';
@Component({
  selector: 'page-dashboard-menu',
  templateUrl: 'dashboard-menu.html',
})
export class DashboardMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardServiceProvider: DashboardServiceProvider,
              private storage: Storage, public loginService: LoginService, public loadingCtrl: LoadingController) { }

  public openDetailPageProduksi(): void {
    this.navCtrl.push(LaporanProduksiPage);
  }
  public openDetailPage2(): void {
    this.navCtrl.push(HppPage);
  }
  public openDetailPage3(): void {
    this.navCtrl.push(ChartStockBbPage);
  }
  public openDetailPage4(): void {
    this.navCtrl.push(SalesNavigatePage);
  }
  public openDetailPage5(): void {
    this.navCtrl.push(PengirimanNavigatePage);
  }
  loginHandler(loginData) {
    if (loginData != null) {
      this.loginService.login(loginData).subscribe(res => {
        var result = res.json();
        this.storage.set("appToken", result.token);
        this.storage.set("user", result.user);
        this.storage.get("appToken").then((val) => {
          console.log(val)
        })
        return this.storage.get("user").then((val) => {
          console.log(val)
        })

      });
    }
  }
  presentloading(){
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
  }
  logout(){
    this.storage.remove("appToken");
    this.storage.remove("user");
    this.navCtrl.setRoot(LoginPage);
  }
}
