// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCr1jdNFJ63G8w65G2aGKwTRuvGKNxA-0",
  authDomain: "freelance-50be3.firebaseapp.com",
  projectId: "freelance-50be3",
  storageBucket: "freelance-50be3.appspot.com",
  messagingSenderId: "256732075018",
  appId: "1:256732075018:web:872cca6437c3e8a4417bf3",
  measurementId: "G-LND0C7YVZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);