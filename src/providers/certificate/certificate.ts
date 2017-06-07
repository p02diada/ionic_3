import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CertificateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CertificateProvider {

  certificateList: any;
  url: string = 'http://0.0.0.0:5000/ct/v1';

  constructor(public http: Http) {

  }

  getCertificates(){
  	return this.http.get(this.url + '/get-entries?start=0&end=10')
  		.map(res => res.json());
  }


}
