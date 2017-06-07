import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AlarmsProvider } from '../../providers/alarms/alarms';

/**
 * Generated class for the AlarmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alarms',
  templateUrl: 'alarms.html',
  providers: [
  	AlarmsProvider,
  ]
})
export class AlarmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public alarmsProvider: AlarmsProvider) {
    
  }

  ionViewDidLoad() {
  }

  createAlarmPrompt(){
    let prompt = this.alertController.create({
      title: 'Create alert',
      message: "Use commas between emails. Ej: user1@gmail.com,user2@hotmail.com,...",
      inputs: [
        {
          name: 'emails',
          placeholder: 'emails',
        },

        {
          name: 'domain',
          placeholder: 'domain',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },

        {
          text: 'Save',
          handler: data => {
            if(data.domain != "" && data.emails != ""){

              let arrayEmails = [];
              arrayEmails = data.emails.split(',');
              this.alarmsProvider.addAlarm(data.domain, arrayEmails).subscribe(data => 
                {this.alarmsProvider.getAlarms();
              });
            }

          }
        }
      ]


    });

    prompt.present();


  }

}
