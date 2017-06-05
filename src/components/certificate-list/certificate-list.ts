import { Component } from '@angular/core';
import { CertificateProvider } from '../../providers/certificate/certificate';
import { X509 } from 'jsrsasign';


/**
 * Generated class for the CertificateListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'certificate-list',
  templateUrl: 'certificate-list.html'
})
export class CertificateListComponent {

  certificateList: any;

  constructor(certificateProvider: CertificateProvider) {

  	certificateProvider.getCertificates().subscribe(leafEntries => {

  			this.certificateList = [];
  			var c = new X509();
  			console.log(this.certificateList);

  			for (let leafEntry of leafEntries){
  				this.certificateList.push(leafEntry['timestamped_entry']['signed_entry']);
  				c.readCertPEM(leafEntry['timestamped_entry']['signed_entry']);
  				console.log(c.getIssuerString());
  			}
		});
  }



}
