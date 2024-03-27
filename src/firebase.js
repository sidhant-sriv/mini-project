// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkMwh17w65HkIArVALnIW2K1vZHG68c4",
  authDomain: "space-website-9e55e.firebaseapp.com",
  projectId: "space-website-9e55e",
  storageBucket: "space-website-9e55e.appspot.com",
  messagingSenderId: "534498623281",
  appId: "1:534498623281:web:2fb5e60de34bea6eaf7a10",
  measurementId: "G-1JHDRZ2TGW",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;