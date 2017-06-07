import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertificatePage } from './certificate';

@NgModule({
  declarations: [
    CertificatePage,
  ],
  imports: [
    IonicPageModule.forChild(CertificatePage),
  ],
  exports: [
    CertificatePage
  ]
})
export class CertificatePageModule {}
