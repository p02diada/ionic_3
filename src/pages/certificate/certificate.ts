import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';

/**
 * Generated class for the CertificatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-certificate',
  templateUrl: 'certificate.html',
})
export class CertificatePage {
	certificate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public file:File, public alertController: AlertController) {
  	this.certificate = navParams.get("certificate");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CertificatePage');
  }

  downloadPem(){
  	console.log(this.file);
  	console.log(this.file.externalApplicationStorageDirectory);
  	console.log(this.certificate.base64);
  	let name = this.certificate.hSerial+'.pem';
  	console.log(name);
  	this.file.writeFile(this.file.externalApplicationStorageDirectory, name, this.certificate.base64)
  	.then(response => { let alert = this.alertController.create({
  			title: 'Save',
  			message: 'The certificate has been saved',
  			buttons: [
  				{
  					text: 'Ok',
  					role: 'Cancel',
  				}
  			]
  		});
  		alert.present();
  	})
  	.catch(err => {
  		if (err.code == 12 ){
			let alert = this.alertController.create({
  			title: 'Error',
  			message: 'There is a certificate with the same name',
  			buttons: [
  				{
  					text: 'Ok',
  					role: 'Cancel',
  				}
  			]
  		});
  		alert.present();

  		}
  	});
  }

}
