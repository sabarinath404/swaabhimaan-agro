// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7P1C2vM28Rb7OGUpFciP4Ls2_6p7If4U",
  authDomain: "swaabhimaan-8cf83.firebaseapp.com",
  projectId: "swaabhimaan-8cf83",
  storageBucket: "swaabhimaan-8cf83.appspot.com",
  messagingSenderId: "969114481177",
  appId: "1:969114481177:web:9882023700cda36e1cb088",
  measurementId: "G-63LN769Y44"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const storage = getStorage(app);

export { db };

// Initialize Firebase analytics only if window is defined (client side)


console.log("hello the firebase is connected");
