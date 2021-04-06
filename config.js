import * as firebase from 'firestore';
require (
    '@firebase/firestore'
)
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPEDjlwAFvq2s0u3X4iFyLHEwrF2bTSqA",
    authDomain: "firestore-test-758fa.firebaseapp.com",
    projectId: "firestore-test-758fa",
    storageBucket: "firestore-test-758fa.appspot.com",
    messagingSenderId: "158236495680",
    appId: "1:158236495680:web:9304e987a7eed06fd974a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();