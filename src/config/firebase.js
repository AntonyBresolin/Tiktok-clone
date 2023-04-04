// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf726yroQUdvJL2D1zNlWSqTh5UiXBof8",
  authDomain: "tiktok---jornada-59b7a.firebaseapp.com",
  projectId: "tiktok---jornada-59b7a",
  storageBucket: "tiktok---jornada-59b7a.appspot.com",
  messagingSenderId: "431391931420",
  appId: "1:431391931420:web:480b9035ec0d51ce28b3d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;