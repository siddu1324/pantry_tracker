// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhmAyqZ2IpiI3_tx0XbqkdOXHZOyk05bg",
  authDomain: "pantry-tracker-2d4b8.firebaseapp.com",
  projectId: "pantry-tracker-2d4b8",
  storageBucket: "pantry-tracker-2d4b8.appspot.com",
  messagingSenderId: "385089393341",
  appId: "1:385089393341:web:1b7091f6271221102dddd4",
  measurementId: "G-GF98VDD5DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}