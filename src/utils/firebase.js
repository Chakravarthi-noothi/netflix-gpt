// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZfPX5KwYvidNzrEcbvLHyTMbpLellkG4",
  authDomain: "netflixgpt-12b96.firebaseapp.com",
  projectId: "netflixgpt-12b96",
  storageBucket: "netflixgpt-12b96.firebasestorage.app",
  messagingSenderId: "138601144636",
  appId: "1:138601144636:web:106e64bee6227ebbb97e39",
  measurementId: "G-ZYTLDWGQ1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
