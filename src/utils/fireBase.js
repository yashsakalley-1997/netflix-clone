// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8gYkRH8rhSkzJSf8IUQ9Q7LiXIab4PBY",
  authDomain: "netflixgpt-54223.firebaseapp.com",
  projectId: "netflixgpt-54223",
  storageBucket: "netflixgpt-54223.appspot.com",
  messagingSenderId: "264203137436",
  appId: "1:264203137436:web:3246157c7bb30616a29859",
  measurementId: "G-5FJ88B0RDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();