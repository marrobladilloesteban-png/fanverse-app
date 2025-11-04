// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpmAK4PM96tvy5BQLaHwkH20ln81jkiPc",
  authDomain: "mi-primer-proyecto-a3a3c.firebaseapp.com",
  projectId: "mi-primer-proyecto-a3a3c",
  storageBucket: "mi-primer-proyecto-a3a3c.firebasestorage.app",
  messagingSenderId: "751038279267",
  appId: "1:751038279267:web:15dd64803d0dd74df65256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporta db en formato v9 (lo que espera taskService.js)
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;