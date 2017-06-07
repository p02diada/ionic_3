import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmsPage } from './alarms';

@NgModule({
  declarations: [
    AlarmsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmsPage),
  ],
  exports: [
    AlarmsPage
  ]
})
export class AlarmsPageModule {}
