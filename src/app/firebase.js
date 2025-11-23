// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC0MKL6O8qobwjSN6uIbQheTxHF10abKw",
  authDomain: "msg-casamento.firebaseapp.com",
  projectId: "msg-casamento",
  storageBucket: "msg-casamento.firebasestorage.app",
  messagingSenderId: "107970674750",
  appId: "1:107970674750:web:8385bf9001fea719c7116f",
  measurementId: "G-14FJ4B6ZE9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);
