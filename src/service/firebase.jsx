// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcfXekU2G2US7J9WB_VFP7EOuRHF3y6rg",
  authDomain: "coder-shop-69600-8908c.firebaseapp.com",
  projectId: "coder-shop-69600-8908c",
  storageBucket: "coder-shop-69600-8908c.firebasestorage.app",
  messagingSenderId: "906999647130",
  appId: "1:906999647130:web:febfff130b2bc665e0c823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)