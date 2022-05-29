import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs4S_4TAxYX8Xzp73B08f5ZczmRUPLg_Y",
  authDomain: "twitter-clone-60901.firebaseapp.com",
  projectId: "twitter-clone-60901",
  storageBucket: "twitter-clone-60901.appspot.com",
  messagingSenderId: "676096180152",
  appId: "1:676096180152:web:5826762697c9c94357594d",
  measurementId: "G-QTHMYV3KPR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
