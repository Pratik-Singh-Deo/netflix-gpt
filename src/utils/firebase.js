// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdFn_DIsywHuVuMB3HhVEis7VSgJud-CE",
  authDomain: "netflixgpt-d4ca9.firebaseapp.com",
  projectId: "netflixgpt-d4ca9",
  storageBucket: "netflixgpt-d4ca9.appspot.com",
  messagingSenderId: "927283637190",
  appId: "1:927283637190:web:2ce30b960a6b8eb637e0c7",
  measurementId: "G-HKP5LRQLZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()