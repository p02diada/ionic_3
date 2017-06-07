import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AlarmsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlarmsProvider {

	alarmsList: any;
  url: string = 'http://192.168.1.111:5001/ct/v1';


  constructor(public http: Http) {
  }

  getAlarms(){
  	return this.http.get(this.url + '/get-alerts')
  		.map(res => res.json());
  }


  addAlarm(domain, emails){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers })
    let data = { domain: domain, emails: emails }

    return this.http.post(this.url + '/add-alert', data, options);
  }

  removeAlarm(domain, emails){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers })
    let data = { domain: domain, emails: emails }
    console.log(data);
    return this.http.post(this.url + '/remove-alert', data, options);

  }

}
