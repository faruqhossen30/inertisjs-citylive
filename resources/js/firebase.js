// resources/js/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADiX4Muc-wBPj-EzG9bPkh160rLlWXq40",
    authDomain: "citylive-8604e.firebaseapp.com",
    projectId: "citylive-8604e",
    storageBucket: "citylive-8604e.appspot.com",
    messagingSenderId: "1017003491918",
    appId: "1:1017003491918:web:9033d2b7d50110d5fbb91f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
