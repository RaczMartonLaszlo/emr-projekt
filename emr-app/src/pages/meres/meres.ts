import { Component, OnInit } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { KuldottAdat } from '../kuldes/kuldes';
import { HttpService } from '../httpservice/httpService';
import { Injectable } from '@angular/core'

@Injectable()
@Component({
  selector: 'page-meres',
  templateUrl: 'meres.html',
  providers: [Geolocation, HttpService]
})
export class MeresPage  implements OnInit{

  pontossag=-1;
  // osszeg=0;
  // mintak=0;
  // atlag=0;
  error;
  // http: Http;
  // httpService: HttpService
  public kuldes;
  // teszt;
  constructor(private httpService: HttpService){
  
  }
  ngOnInit(){

      // this.helyzet();
  }
  helyzet(){
    let options = {enableHighAccuracy: true}
    Geolocation.getCurrentPosition(options).then((poz) =>{
      this.pontossag = poz.coords.accuracy;

      this.pontossag=this.pontossag*1000;
      this.pontossag=this.pontossag-(this.pontossag%1);
      this.pontossag=this.pontossag/1000;

      // this.mintak+=1;
      // this.osszeg+= poz.coords.accuracy;

      // this.osszeg=this.osszeg*1000;
      // this.osszeg=this.osszeg-(this.osszeg%1);
      // this.osszeg=this.osszeg/1000;

      // this.atlag=this.osszeg/this.mintak;

      // this.atlag=this.atlag*1000;
      // this.atlag=this.atlag-(this.atlag%1);
      // this.atlag=this.atlag/1000;

      this.kuldes = new KuldottAdat(this.pontossag);
      // this.kuldes = JSON.parse(this.kuldes);
      // var abc=JSON.parse(kuldes);
      // this.teszt=abc.mintak;
      // console.log("asd1");
      // this.abc.post(url, this.kuldes)
      // .map(response => response.json)
      // .map(
      //       response => console.log("Post válasz: " +response),
      //       error => console.log("Post hiba: " + error)
      // )
      // console.log("asd2");
      this.adatKuld();
    


    }).catch((error) => {
  console.log('Error getting location', error);
});
  }

  adatKuld(){
    this.httpService
      .post(this.kuldes)
      .catch(error => this.error = error)
      // console.log(this.error);
    ;
    // .post("Http:/localhost:8080/post_data", this.kuldes)
  }

}
