import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhMFVIvry-H8btG3UgnUaJaKmjD2wKbTs",
    authDomain: "todo-app-39dbf.firebaseapp.com",
    projectId: "todo-app-39dbf",
    storageBucket: "todo-app-39dbf.appspot.com",
    messagingSenderId: "224078620690",
    appId: "1:224078620690:web:2176b0b48f9e65d26a10cb",
    measurementId: "G-P86EJ856QJ"
  });
  const db= firebaseApp.firestore();
   
  export default db;