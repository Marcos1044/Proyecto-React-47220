// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQnKG7Pie3HmlXUPylYhINSkLp_WYExC4",
  authDomain: "fb-productos.firebaseapp.com",
  projectId: "fb-productos",
  storageBucket: "fb-productos.appspot.com",
  messagingSenderId: "650044599766",
  appId: "1:650044599766:web:1a2568c0c4f309defc8877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);