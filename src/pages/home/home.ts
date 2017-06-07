import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CertificateProvider } from '../../providers/certificate/certificate';
import { AlarmsPage } from '../alarms/alarms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
  	CertificateProvider,
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(){
  	this.navCtrl.push(AlarmsPage);
  }

}
