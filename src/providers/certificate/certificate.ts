import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CertificateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CertificateProvider {

  certificateList: any;
  url: string = 'http://192.168.4.65:5000/ct/v1';

  constructor(public http: Http) {

  }

  getCertificates(){
  	return this.http.get(this.url + '/get-entries?start=0&end=10')
  		.map(res => res.json());
  }

  addCertificate(certificate){
    let encondedString = btoa(certificate);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers })
    let data = { chain: encondedString };
    console.log(data);
    console.log(this.http.post(this.url + '/add-chain', data, options));

    return this.http.post(this.url + '/add-chain', data, options);


  }


}
