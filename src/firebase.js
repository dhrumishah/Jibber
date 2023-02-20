import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNMSciSYETpBRh49vx9xeiHzNqqYU_NOc",
  authDomain: "chat-77667.firebaseapp.com",
  projectId: "chat-77667",
  storageBucket: "chat-77667.appspot.com",
  messagingSenderId: "693277534812",
  appId: "1:693277534812:web:7f71dbe2a2262dd17c5499",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
