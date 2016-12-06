import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

 
@Component({
  selector: 'page-meres',
  templateUrl: 'meres.html',
  providers: [Geolocation]
})
export class MeresPage {
  pontossag=10000;
  constructor(){
    this.pontossag=0;
    this.helyzet();

  }
  helyzet(){
    let options = {enableHighAccuracy: true}
    Geolocation.getCurrentPosition(options).then((poz) =>{
      this.pontossag = poz.coords.accuracy;
    }).catch((error) => {
  console.log('Error getting location', error);
});
  }

}
