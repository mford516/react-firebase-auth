import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfki_Mrl3fBmqT9vmla7aNqCZLADX6C1E",
    authDomain: "react-firebase-auth-2dbdb.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-2dbdb.firebaseio.com",
    projectId: "react-firebase-auth-2dbdb",
    storageBucket: "react-firebase-auth-2dbdb.appspot.com",
    messagingSenderId: "564715301924",
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};