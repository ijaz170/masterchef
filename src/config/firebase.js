// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv-xvTRJqhejhRTpoLl6WJYn5W_Kb2syg",
  authDomain: "ijazassistant-60618.firebaseapp.com",
  projectId: "ijazassistant-60618",
  storageBucket: "ijazassistant-60618.firebasestorage.app",
  messagingSenderId: "381665570479",
  appId: "1:381665570479:web:8c132497abd372bcd52e5a"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore };
