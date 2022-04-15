import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDBr3XIxFB2L_tZbvhCJEFIY5mAABhZ_4",
  authDomain: "wpp-mern-e34f9.firebaseapp.com",
  databaseURL: "https://wpp-mern-e34f9-default-rtdb.firebaseio.com",
  projectId: "wpp-mern-e34f9",
  storageBucket: "wpp-mern-e34f9.appspot.com",
  messagingSenderId: "435019804851",
  appId: "1:435019804851:web:ffe8e55bac062361e900c6",
  measurementId: "G-128SJPV1KE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
