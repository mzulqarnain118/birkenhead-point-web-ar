import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const storage = getStorage();
const imgUrl = getDownloadURL(
  ref(storage, "Target_Objects/Location_10_0046.png")
)
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();

    return url;
  })

  .catch((error) => {
    console.log("🚀 ~ error:", error);

    // Handle any errors
  });
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
  storage,
  imgUrl,
  signUpWithEmailAndPassword,
  signInWithEmailPassword,
};
