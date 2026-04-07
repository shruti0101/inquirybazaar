import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7XOoio9IdlCG6LsdcI8y85DnV4Hehc9s",
  authDomain: "inquirybazzar.firebaseapp.com",
  projectId: "inquirybazzar",
  storageBucket: "inquirybazzar.firebasestorage.app",
  messagingSenderId: "68080659741",
  appId: "1:68080659741:web:c67394b77241b33facc5f4",
  measurementId: "G-P3ZD9QTCTK"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);