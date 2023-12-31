import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { Tab1Page } from './tab1/tab1.page';

import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyAqm5vA_WODmz3TFJgaUFK1DVmuNTW0mPE",
  authDomain: "finalpractical-4bfe9.firebaseapp.com",
  projectId: "finalpractical-4bfe9",
  storageBucket: "finalpractical-4bfe9.appspot.com",
  messagingSenderId: "666348876073",
  appId: "1:666348876073:web:f21d6181801a73ccde8738"
};

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent, Tab1Page],
  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  ReactiveFormsModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


}
