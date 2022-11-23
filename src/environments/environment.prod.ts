import { firebaseAppFactory } from "@angular/fire/app/app.module";
import { app, apps } from "firebase-admin";
import { initializeApp } from "firebase/app";


export const environment = {
  firebase: {
    projectId: 'roots-of-unity',
    appId: '1:971377393476:web:163203bfe76d0204aae111',
    storageBucket: 'roots-of-unity.appspot.com',
    locationId: 'asia-southeast1',
    apiKey: 'AIzaSyDDzAwbeTFmhj-GfGyLbdB9RlcBCnEe8sY',
    authDomain: 'roots-of-unity.firebaseapp.com',
    messagingSenderId: '971377393476',
    measurementId: 'G-DFT5GX2FYN',
  },
  production: true
};


initializeApp(environment.firebase);




