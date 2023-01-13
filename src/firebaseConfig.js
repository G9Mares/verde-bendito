// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXkYDBfAWEV1XNzONjSY9913PrpZdT_fo",
  authDomain: "code-verde-bendito.firebaseapp.com",
  projectId: "code-verde-bendito",
  storageBucket: "code-verde-bendito.appspot.com",
  messagingSenderId: "7669698160",
  appId: "1:7669698160:web:48554f0fd6fc609218aeb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)