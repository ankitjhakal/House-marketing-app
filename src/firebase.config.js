// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaL1PpS6w7TLz8UdXDpYQbaJRpIgph6cs",
  authDomain: "house-marketplace-app-bc2fc.firebaseapp.com",
  projectId: "house-marketplace-app-bc2fc",
  storageBucket: "house-marketplace-app-bc2fc.appspot.com",
  messagingSenderId: "830376325951",
  appId: "1:830376325951:web:5473b70a1012f68a6dd98a",
  measurementId: "G-MQNKFWW5BZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()