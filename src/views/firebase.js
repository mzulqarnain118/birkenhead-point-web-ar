import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAb72EuYMvDUoFAf7vSYMF4WFHDdwnyrYc",
  authDomain: "living-history-bhp.firebaseapp.com",
  projectId: "living-history-bhp",
  storageBucket: "living-history-bhp.appspot.com",
  messagingSenderId: "913214181580",
  appId: "1:913214181580:web:97631b096f518df0b1b269",
  measurementId: "G-R47JZ12L7Z",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

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

export { auth, storage, signUpWithEmailAndPassword, signInWithEmailPassword };
