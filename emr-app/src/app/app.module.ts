import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MeresPage } from '../pages/meres/meres';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { KiirasPage } from '../pages/kiiras/kiiras';

@NgModule({
  declarations: [
    MyApp,
    MeresPage,
    ItemDetailsPage,
    ListPage,
    KiirasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeresPage,
    ItemDetailsPage,
    ListPage,
    KiirasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
