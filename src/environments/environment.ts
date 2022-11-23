import { app, apps } from "firebase-admin";
import { initializeApp } from "firebase/app";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false,
};

initializeApp(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
