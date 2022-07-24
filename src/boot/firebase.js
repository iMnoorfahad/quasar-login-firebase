import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtxGm6X1uBNjK9i6bIt051dDwjuPFDrIA",
  authDomain: "learn-3603c.firebaseapp.com",
  databaseURL: "https://learn-3603c.firebaseio.com",
  projectId: "learn-3603c",
  storageBucket: "learn-3603c.appspot.com",
  messagingSenderId: "712554140476",
  appId: "1:712554140476:web:0c71919586f375887b4439"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

export default firebase