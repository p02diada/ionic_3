import { Component } from '@angular/core';
import { CertificateProvider } from '../../providers/certificate/certificate';
import * as jsrsasign from 'jsrsasign';
import { NavController } from 'ionic-angular';
import { CertificatePage } from '../../pages/certificate/certificate';


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

  certificateListObject: {
    base64?: any,
    hSerial?: any,
    issuer?: any,
    subject?: any,
    notBefore?: any,
    botAfter?: any,
    pubKeyHex?: any,
    domains?: any,
    signatureHex?: any,
  }[] = [];

  constructor(certificateProvider: CertificateProvider, public navController:NavController) {

  	certificateProvider.getCertificates().subscribe(leafEntries => {

  			var c = new jsrsasign.X509();

  			for (let leafEntry of leafEntries){
          c.readCertPEM(leafEntry['timestamped_entry']['signed_entry']);

          let subjectString = c.getSubjectString();
          let cnSubjectIndex = subjectString.indexOf("CN=") + 3;
          let cnSubject = subjectString.slice(cnSubjectIndex);

          let cert = {
            base64: leafEntry['timestamped_entry']['signed_entry'],
            hSerial: c.getSerialNumberHex(),
            issuer: c.getIssuerString(),
            subject: cnSubject,
            notBefore: jsrsasign.zulutodate(c.getNotBefore()).toISOString().slice(0, 10),
            notAfter: jsrsasign.zulutodate(c.getNotAfter()).toISOString().slice(0, 10),
            pubKeyHex: c.getPublicKeyHex(),
            domains: c.getExtSubjectAltName(),
            signatureHex: c.getSignatureValueHex(),

          }
  				this.certificateListObject.push(cert);
  			}
		});

  }

  showCertificateDetail(certificate){
    this.navController.push(CertificatePage, {
      certificate:certificate,
    });
  }



}
