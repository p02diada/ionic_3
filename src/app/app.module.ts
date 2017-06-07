import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlarmsPage } from '../pages/alarms/alarms';
import { CertificateProvider } from '../providers/certificate/certificate';

import { HttpModule } from '@angular/http';
import { CertificateListComponent } from '../components/certificate-list/certificate-list';
import { AlarmsProvider } from '../providers/alarms/alarms';
import { AlarmsListComponent } from '../components/alarms-list/alarms-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlarmsPage,
    CertificateListComponent,
    AlarmsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlarmsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CertificateProvider,
    AlarmsProvider
  ]
})
export class AppModule {}
