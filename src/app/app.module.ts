import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { DatePicker } from '@ionic-native/date-picker';

import { HttpService } from '../providers/http-service';
import { DepartureModule } from '../providers/departure/departure';

import { DeviceInfoProvider } from '../providers/device-info/device-info';
import { DepartureTabsPage } from '../pages/departure/tabs/departure-tabs';

@NgModule({
  declarations: [
    MyApp,
    DepartureTabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true",
      platform: {
        ios: {
          statusbarPadding: false
        }
      },
      scrollAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DepartureTabsPage
  ],
  providers: [
    Device,
    StatusBar,
    SplashScreen,
    DatePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
    DeviceInfoProvider,
    DepartureModule
  ]
})
export class AppModule { }
