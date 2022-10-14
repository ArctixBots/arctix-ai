/* 
Made with ❤ By Royce Bob
22 years old student at Rongo university in 
Kenya. Learning JavaScript

This project was generated from firebase 9.0 using
Stackblitz online live server and IDE
Please leave a star 😉 if you like it.
*/

// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app'; 
import { getRemoteConfig } from "firebase/remote-config";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Replace with your app's configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBwmJD9EJUd8JwYqN75Zg8JeIM-yDk7Uog",
  authDomain: "arctix-ai.firebaseapp.com",
  projectId: "arctix-ai",
  storageBucket: "arctix-ai.appspot.com",
  messagingSenderId: "910372299050",
  appId: "1:910372299050:web:94edbb96b8341865e37e53",
  measurementId: "G-0RQ20YTTEY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Remote Config and get a reference to the service
const remoteConfig = getRemoteConfig(app);
const analytics = getAnalytics(app);

// Add the Firebase products and methods that you want to use
import {} from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {};

  // initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  const ui = new firebaseui.auth.AuthUI(auth);
}
main();
const defaultProject = initializeApp(firebaseConfig);
console.log(defaultProject.name);  // "[DEFAULT]"
let defaultStorage = getStorage(defaultProject);
let defaultFirestore = getFirestore(defaultProject);
