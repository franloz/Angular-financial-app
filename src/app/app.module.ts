import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgApexchartsModule } from 'ng-apexcharts';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => {

      const auth = getAuth();
      if (environment.useEmulators) {// si la variable de entorno useEmulators es true significa que estamos en dev y ejecutamos en local
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true,
        });
      }
      return auth;

    }),
    provideFirestore(() => {

      const firestore = getFirestore();
      if (environment.useEmulators) {// si la variable de entorno useEmulators es true significa que estamos en dev y ejecutamos en local
        connectFirestoreEmulator(firestore, 'localhost', 8081);
      }
      return firestore;

    })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



