// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKsnCUI2dPPmdhDO10lQIu9tN2gqeTY38",
  authDomain: "netflix-clone-88d61.firebaseapp.com",
  projectId: "netflix-clone-88d61",
  storageBucket: "netflix-clone-88d61.appspot.com",
  messagingSenderId: "804211595597",
  appId: "1:804211595597:web:ec6516d9d51d69ba783f04"
};

// Initialize Firebase

// const app =  initializeApp(firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
const auth = getAuth();

export default app;
export { auth };
