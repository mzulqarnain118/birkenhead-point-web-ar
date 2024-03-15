import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCcAezgRG3Q558EPXAjKV5GVcT-6f7Ya7o",
  authDomain: "birkenhead-point-ar-web.firebaseapp.com",
  projectId: "birkenhead-point-ar-web",
  storageBucket: "birkenhead-point-ar-web.appspot.com",
  messagingSenderId: "480495514261",
  appId: "1:480495514261:web:d334fa1efe3e9941d2619c",
  measurementId: "G-6QVKZ6LWHD",
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
