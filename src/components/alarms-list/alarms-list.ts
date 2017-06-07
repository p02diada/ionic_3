import { Component } from '@angular/core';
import { AlarmsProvider } from '../../providers/alarms/alarms';

/**
 * Generated class for the AlarmsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alarms-list',
  templateUrl: 'alarms-list.html'
})
export class AlarmsListComponent {

  alarmsListObject: {
  	domain: any;
  	emails: any;
  }[] = [];

  constructor(public alarmsProvider: AlarmsProvider) {

  	alarmsProvider.getAlarms().subscribe(alarms => {

  		for (let alarm of alarms){

  			let alarmObject = {
  				domain: alarm['domain'],
  				emails: alarm['emails'],
  			}

  			this.alarmsListObject.push(alarmObject);
  		}
  	});
    
  }

  removeElement(domain, emails){
    this.alarmsProvider.removeAlarm(domain,emails).subscribe(response =>{
      console.log(response);
    });

  }

}
