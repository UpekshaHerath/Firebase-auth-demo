// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCQCdIjyMWKg0YB0eAR16kw-gm5GHGI0F8",
  authDomain: "auth-demo-73cea.firebaseapp.com",
  projectId: "auth-demo-73cea",
  storageBucket: "auth-demo-73cea.appspot.com",
  messagingSenderId: "403284631020",
  appId: "1:403284631020:web:dd3a297e1e082bfcac74c9",
  measurementId: "G-8MQVQCD6GR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
