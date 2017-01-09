import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { MeresPage } from '../meres/meres'
import 'rxjs/add/operator/map';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    constructor(private http: Http){    }
    post(adat: MeresPage){
        return this.http
            .post("http://192.168.0.10:8080/post_data", adat)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
      getData(url: string) {
        return this.http.get(url).map(response => response.json());
    }
}