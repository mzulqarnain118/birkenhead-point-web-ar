import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

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

// Get Firebase authentication instance
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Function to handle user sign up
function signUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Function to handle user sign in
function signInWithEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Function to retrieve user information by email
async function getUserByEmail(email) {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let user = null;
  querySnapshot.forEach((doc) => {
    user = doc.data();
  });
  return user;
}

export { auth, signUpWithEmailAndPassword, signInWithEmailPassword, getUserByEmail };