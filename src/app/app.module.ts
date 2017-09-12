import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig} from 'angular2-jwt';
import { MyApp } from './app.component';
import { FCM } from '@ionic-native/fcm';
//pages
import { AboutPage } from '../pages/about/about';
import { ApprovalListPage } from '../pages/approval-list/approval-list';
import { PocPage } from "../pages/poc/poc";
import { PocDetailPage } from "../pages/poc-detail/poc-detail";
import { TabsPage } from '../pages/tabs/tabs';
import { RequestOrderPagePage } from '../pages/request-order/request-order';
import { RequestOrderDetailPagePage } from '../pages/request-order-detail/request-order-detail';
import { RequestNavigatePage } from "../pages/request-navigate/request-navigate";
import { DashboardMenuPage } from "../pages/dashboard-menu/dashboard-menu";
import { LaporanProduksiPage } from "../pages/laporan-produksi/laporan-produksi";
import { HppPage } from "../pages/hpp/hpp";
import { ChartProduksiHarianPage } from "../pages/chart-produksi-harian/chart-produksi-harian";
import { ChartProduksiBulananPage } from "../pages/chart-produksi-bulanan/chart-produksi-bulanan";
import { ChartPengirimanLokalPage } from "../pages/chart-pengiriman-lokal/chart-pengiriman-lokal";
import { ChartHppHarianPage } from "../pages/chart-hpp-harian/chart-hpp-harian";
import { ChartHppBulananPage } from "../pages/chart-hpp-bulanan/chart-hpp-bulanan"
import { ChartStockBbPage } from "../pages/chart-stock-bb/chart-stock-bb";
import { LaporanPengirimanPage } from "../pages/laporan-pengiriman/laporan-pengiriman";
import { ChartPengirimanEksporPage } from "../pages/chart-pengiriman-ekspor/chart-pengiriman-ekspor";
import { ChartHargaRollPage } from "../pages/chart-harga-roll/chart-harga-roll";
import { SalesNavigatePage } from "../pages/sales-navigate/sales-navigate";
import { LaporanOutstandingPage } from "../pages/laporan-outstanding/laporan-outstanding";
import { PengirimanNavigatePage } from "../pages/pengiriman-navigate/pengiriman-navigate";
import { PengirimanEksporPage } from '../pages/pengiriman-ekspor/pengiriman-ekspor';
import { LoginPage } from '../pages/login/login';
import { NotifPage } from '../pages/notif/notif';
import { ProfilePage } from '../pages/profile/profile';
//service
import { LoginService } from '../providers/login-service';
import { PocService } from '../providers/poc-service';
import { PocDetailService } from '../providers/pocdetail-service';
import { RequestService } from '../providers/request-service';
import { RequestDetailService } from '../providers/request-detail-service';
import { RefserviceProvider } from '../providers/refservice/refservice';
import { DashboardServiceProvider } from '../providers/dashboard-service/dashboard-service';
import { ChartDataGenerator } from '../providers/chart-data-generator';
import { DateSeriesGenerator } from '../providers/date-series-generator';
import { UrlMasterProvider } from '../providers/url-master/url-master';
import { ProfileProvider } from '../providers/profile/profile';
import { NotifProvider } from '../providers/notif/notif';
//pipe
import { RefPipe } from '../pipes/ref/ref';
import { CurrencyLabelPipe } from '../pipes/currency-label/currency-label';
import { CurrencyLabelProvider } from '../providers/currency-label/currency-label';
import { SumPipe } from '../pipes/sum/sum';
import { TotalPipe } from '../pipes/total/total';
import { TotalhppPipe } from '../pipes/totalhpp/totalhpp';
//chart
import { ChartsModule } from 'ng2-charts/ng2-charts';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "JWT",
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => JSON.parse(window.localStorage.getItem("id_token"))),
  }), http);

}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage, RequestOrderPagePage, RequestOrderDetailPagePage,
    PocPage, PocDetailPage, ApprovalListPage, RequestNavigatePage,
    DashboardMenuPage, LaporanProduksiPage, HppPage,
    ChartProduksiBulananPage, ChartHppHarianPage, ChartHppBulananPage,
    ChartStockBbPage, ChartProduksiHarianPage, ChartPengirimanLokalPage,
    ChartPengirimanEksporPage, LaporanPengirimanPage, ChartHargaRollPage,SalesNavigatePage,
    LaporanOutstandingPage, PengirimanNavigatePage, PengirimanEksporPage, LoginPage, ProfilePage,
    NotifPage,
    RefPipe,
    CurrencyLabelPipe,
    SumPipe,
    TotalPipe,
    TotalhppPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    IonicStorageModule.forRoot({
      name: '_precis eMobile',
      driverOrder: ['localstorage','indexeddb', 'sqlite', 'websql']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage, RequestOrderPagePage, RequestOrderDetailPagePage, PocPage,
    PocDetailPage, ApprovalListPage, RequestNavigatePage, DashboardMenuPage,
    LaporanProduksiPage, HppPage, ChartProduksiBulananPage, ChartProduksiHarianPage,
    ChartHppHarianPage, ChartHppBulananPage,ChartPengirimanLokalPage, ChartPengirimanEksporPage,
    ChartStockBbPage, LaporanPengirimanPage, ChartHargaRollPage, SalesNavigatePage, LaporanOutstandingPage,
    PengirimanNavigatePage, PengirimanEksporPage, LoginPage, ProfilePage, NotifPage
  ],
  providers: [IonicStorageModule,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }, {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }, LoginService, RequestService, PocService, RequestDetailService, PocDetailService,
    RefserviceProvider,
    CurrencyLabelProvider,
    DashboardServiceProvider,
    UrlMasterProvider,
    ChartDataGenerator,
    DateSeriesGenerator,
    ProfileProvider,
    NotifProvider,FCM
  ]
})
export class AppModule { }
