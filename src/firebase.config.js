// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2KsxOuWZRkDifqhMCwgQZhSZGtwdG10",
  authDomain: "house-marketplace-app-32c56.firebaseapp.com",
  projectId: "house-marketplace-app-32c56",
  storageBucket: "house-marketplace-app-32c56.appspot.com",
  messagingSenderId: "423699389385",
  appId: "1:423699389385:web:2c0df56a3c191be9b0e618"
};

// Initialize Firebase
export const db = getFirestore();