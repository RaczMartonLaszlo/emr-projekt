import { Component, OnInit } from '@angular/core';
import { HttpService } from '../httpservice/httpService';


@Component({
  selector: 'page-kiiras',
  templateUrl: 'kiiras.html',
  providers: [HttpService]
})
export class KiirasPage implements OnInit {
  pontossag=-1;
  atlag=-1;
  mintak=-1;

  constructor(private httpService: HttpService) {

        httpService.getData('http://192.168.0.10:8080/get_pontossag')
        .subscribe(
            asd => this.pontossag = asd,
        );

        httpService.getData('http://192.168.0.10:8080/get_atlag')
        .subscribe(
            asd => this.atlag = asd,
        );
        httpService.getData('http://192.168.0.10:8080/get_mintak')
        .subscribe(
            asd => this.mintak = asd,
        );
    }
  ngOnInit(){}
}
