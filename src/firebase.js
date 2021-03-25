import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBN0RFX4LMt7xxi9ugsokz2Qu27HO8b-vg",
  authDomain: "contexttestapp-67173.firebaseapp.com",
  projectId: "contexttestapp-67173",
  storageBucket: "contexttestapp-67173.appspot.com",
  messagingSenderId: "454133233445",
  appId: "1:454133233445:web:1a989ebe57ed54920f4ccc"
};


// 1. initialise firebase
firebase.initializeApp(firebaseConfig);

// 2. export

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// 3. don't forget to npm install firebase