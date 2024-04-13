// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCD__7XTrBTjqMOPuJuRWtsE2BPrfVorgs",
    authDomain: "portfolio-1f8c3.firebaseapp.com",
    projectId: "portfolio-1f8c3",
    storageBucket: "portfolio-1f8c3.appspot.com",
    messagingSenderId: "901947748823",
    appId: "1:901947748823:web:397cc4ce4544e8f2989b92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);