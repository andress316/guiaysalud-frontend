// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "guia-y-salud-6ab49.firebaseapp.com",
  projectId: "guia-y-salud-6ab49",
  storageBucket: "guia-y-salud-6ab49.appspot.com",
  messagingSenderId: "481770084043",
  appId: "1:481770084043:web:8522cb1d6b334ffbcc2d4e",
  measurementId: "G-LHLH49987Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);