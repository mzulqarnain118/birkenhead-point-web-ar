import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

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
// Initialize Firebase app

// Get Firebase authentication instance
const auth = getAuth(firebaseApp);

// Function to handle user sign up
async function signUpWithEmailAndPassword(email, password, name) {
  const registeredUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return registeredUser;
}

// Function to handle user sign in
function signInWithEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export { auth, signUpWithEmailAndPassword, signInWithEmailPassword };
