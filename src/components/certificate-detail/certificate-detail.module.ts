import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertificateDetailComponent } from './certificate-detail';

@NgModule({
  declarations: [
    CertificateDetailComponent,
  ],
  imports: [
    IonicPageModule.forChild(CertificateDetailComponent),
  ],
  exports: [
    CertificateDetailComponent
  ]
})
export class CertificateDetailComponentModule {}
