import firebase from "firebase/app";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSi-NlzA-P4geQxsafBN1pX4mbPpXycE",
  authDomain: "react-users-app-cee92.firebaseapp.com",
  projectId: "react-users-app-cee92",
  storageBucket: "react-users-app-cee92.appspot.com",
  messagingSenderId: "379466729457",
  appId: "1:379466729457:web:7bfb2589189ea40aa0a650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;