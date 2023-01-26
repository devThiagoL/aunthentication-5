import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp0iepFUnAwOeYJEmJwnVM0gusMsrbyRU",
  authDomain: "comeia-login.firebaseapp.com",
  projectId: "comeia-login",
  storageBucket: "comeia-login.appspot.com",
  messagingSenderId: "927004512798",
  appId: "1:927004512798:web:abdcaaa7fa25c3b967940f",
  measurementId: "G-J6G8GZ3BBC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
