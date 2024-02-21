import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyArw93JoX81W-RfsOp5wQ0LRfv1QFsCFwY",
  authDomain: "birkenhead-point-ar.firebaseapp.com",
  projectId: "birkenhead-point-ar",
  storageBucket: "birkenhead-point-ar.appspot.com",
  messagingSenderId: "1078690571412",
  appId: "1:1078690571412:web:4636d59f1bb061b3950081",
  measurementId: "G-S3FQ1MZ82V",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase authentication instance
const auth = getAuth(firebaseApp);

// Function to handle user sign up
function signUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Function to handle user sign in
function signInWithEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export {
  auth,
  signUpWithEmailAndPassword,
  signInWithEmailPassword
};