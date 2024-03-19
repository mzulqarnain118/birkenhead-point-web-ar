import { initializeApp } from "firebase/app";
import firebaseConfig from "@/config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

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
