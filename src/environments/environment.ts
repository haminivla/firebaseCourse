// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyBYAoG5NaTpvjZS1mcYMnm4GzEaXdwyolc",
    authDomain: "fortun-8.firebaseapp.com",
    projectId: "fortun-8",
    storageBucket: "fortun-8.appspot.com",
    messagingSenderId: "789104168940",
    appId: "1:789104168940:web:45c7b91a9d39cdd439fac9",
    measurementId: "G-VH3EC06HGM"  
  },
  api: {
    createUser: "http://localhost:5001/fortun-8/us-central1/createUser"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
