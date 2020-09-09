import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfUwyVw-MXQsMhj4q_EE4MdlApFbDta1E",
    authDomain: "facebook-clone-achu.firebaseapp.com",
    databaseURL: "https://facebook-clone-achu.firebaseio.com",
    projectId: "facebook-clone-achu",
    storageBucket: "facebook-clone-achu.appspot.com",
    messagingSenderId: "1077807503531",
    appId: "1:1077807503531:web:369086075c7daf31ef3fee",
    measurementId: "G-SLFZ7E0BZJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;