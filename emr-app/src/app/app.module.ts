import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { MeresPage } from '../pages/meres/meres';
import { KiirasPage } from '../pages/kiiras/kiiras';
import { HttpService } from '../pages/httpservice/httpService';


@NgModule({
  declarations: [
    MyApp,
    MeresPage,
    KiirasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeresPage,
    KiirasPage
  ],
  providers: [HttpService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
