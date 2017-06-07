import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmsListComponent } from './alarms-list';

@NgModule({
  declarations: [
    AlarmsListComponent,
  ],
  imports: [
    IonicPageModule.forChild(AlarmsListComponent),
  ],
  exports: [
    AlarmsListComponent
  ]
})
export class AlarmsListComponentModule {}
