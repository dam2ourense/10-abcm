import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// *.7 despues de crear el proyecto en firebase.com importamos
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

// *.8 completo la constate con lo que copio de firebase.com => miProyecto
export const firebaseConfig = {
  apiKey: "AIzaSyDjHGWOMmFBU0S7SmHTry_CmM5x_PJhooU",
  authDomain: "abcm-ca5af.firebaseapp.com",
  databaseURL: "https://abcm-ca5af.firebaseio.com",
  projectId: "abcm-ca5af",
  storageBucket: "abcm-ca5af.appspot.com",
  messagingSenderId: "365575058051"
};

// *.4 elimino HomePage de declarations y de EntryComponents
// *.5 elimino import de HomePage
// *.6 descargo librerías de angular/firebase 
// npm install angularfire2 firebase promise-polyfill --save
// npm install rxjs@6 rxjs-compat@6 promise-polyfill --save
// npm install rxjs@6.0 rxjs-compat --save
//esta última linea para bajar rxjs a v6.0 porque la 6.3.3 funciona mal

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // *.9 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
