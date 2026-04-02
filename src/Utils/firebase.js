// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbonRqn5lQzrcELSrqGSQqdXQyKL1RCWw",
  authDomain: "netflixgpt-9728b.firebaseapp.com",
  projectId: "netflixgpt-9728b",
  storageBucket: "netflixgpt-9728b.firebasestorage.app",
  messagingSenderId: "954306711142",
  appId: "1:954306711142:web:998a8cb5cbeb36b5f9a7a7",
  measurementId: "G-44S4P073E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();