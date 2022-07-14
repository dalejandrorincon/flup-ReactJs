// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwiWHDUDafliYOycthGF9f-BFdc72aK3E",
  authDomain: "pruebatecnica-flup.firebaseapp.com",
  projectId: "pruebatecnica-flup",
  storageBucket: "pruebatecnica-flup.appspot.com",
  messagingSenderId: "939940388771",
  appId: "1:939940388771:web:e38a7e69a94be5d44e0416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export {auth};