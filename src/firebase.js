// ✅ src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh0OgcRLwVQAt2emBEmE3KF1rkESS3Jvg",
  authDomain: "app-fanverses.firebaseapp.com",
  projectId: "app-fanverses",
  storageBucket: "app-fanverses.firebasestorage.app",
  messagingSenderId: "712343058291",
  appId: "1:712343058291:web:63c409c647e1c5a52bf706"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);