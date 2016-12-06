import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

 
@Component({
  selector: 'page-meres',
  templateUrl: 'meres.html',
  providers: [Geolocation]
})
export class MeresPage {

  pontossag=10000;
  osszeg=0;
  mintak=0;
  atlag=0;
  constructor(){
    this.pontossag=0;
    this.helyzet();

  }
  helyzet(){
    let options = {enableHighAccuracy: true}
    Geolocation.getCurrentPosition(options).then((poz) =>{
      this.pontossag = poz.coords.latitude;
      this.mintak+=1;
      this.osszeg+= poz.coords.latitude;
      this.atlag=this.osszeg/this.mintak;



    }).catch((error) => {
  console.log('Error getting location', error);
});
  }

}
