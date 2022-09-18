// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDF6Px-LpaaUOO_RXARBQh3Io7RgTwLw2k",
  authDomain: "react-coder-d911c.firebaseapp.com",
  projectId: "react-coder-d911c",
  storageBucket: "react-coder-d911c.appspot.com",
  messagingSenderId: "730349687328",
  appId: "1:730349687328:web:9a2098051c1d93a4856245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)