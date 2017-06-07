import { Component } from '@angular/core';

/**
 * Generated class for the CertificateDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'certificate-detail',
  templateUrl: 'certificate-detail.html'
})
export class CertificateDetailComponent {

  text: string;

  constructor() {
    console.log('Hello CertificateDetailComponent Component');
    this.text = 'Hello World';
  }

}
