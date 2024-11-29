import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  authDomain: "angular-ionic-car.firebaseapp.com",
  projectId: "angular-ionic-car",
  databaseURL:"https://angular-ionic-car-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "angular-ionic-car.firebasestorage.app",
  messagingSenderId: "577562095582",
  appId: "1:577562095582:web:324c0c042b5bb65300374f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
