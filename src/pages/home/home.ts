import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CertificateProvider } from '../../providers/certificate/certificate';
import { AlarmsPage } from '../alarms/alarms'
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
  	CertificateProvider,
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public fileChooser: FileChooser, public certificateProvider: CertificateProvider, public file:File) {

  }

  goToPage(){
  	this.navCtrl.push(AlarmsPage);
  }

  addCertificateToLog(){
   
         
    this.fileChooser.open()
      .then(uri => {

          uri = uri.replace("content://com.estrongs.files/", "file:///")
          let lastindex = uri.lastIndexOf('/');
          let array_path = uri.slice(0,lastindex+1);
          let filename = uri.slice(lastindex+1);          
          this.file.readAsText(array_path, filename)
            .then(text => {
                this.certificateProvider.addCertificate(text).subscribe(data => console.log(data));
                }
            )
            .catch(err => console.log(err));
          

       })
      .catch(err => console.log(err));
  }


}
