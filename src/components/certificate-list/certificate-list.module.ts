import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertificateListComponent } from './certificate-list';

@NgModule({
  declarations: [
    CertificateListComponent,
  ],
  imports: [
    IonicPageModule.forChild(CertificateListComponent),
  ],
  exports: [
    CertificateListComponent
  ]
})
export class CertificateListComponentModule {}
