import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzv5R6SyBw31VrcB8hdr0pKlmvbwZvvAU",
    authDomain: "react-crud-app1.firebaseapp.com",
    projectId: "react-crud-app1",
    storageBucket: "react-crud-app1.appspot.com",
    messagingSenderId: "315062416079",
    appId: "1:315062416079:web:79a90cd51e9794425ffdba"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app)