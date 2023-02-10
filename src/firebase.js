import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd1cNcQWozgl-O_Yd6mEVSIhDf55mcGY8",
  authDomain: "slack-clone-baae5.firebaseapp.com",
  projectId: "slack-clone-baae5",
  storageBucket: "slack-clone-baae5.appspot.com",
  messagingSenderId: "147410911264",
  appId: "1:147410911264:web:85cfa4a7d52efc53583c45",
  measurementId: "G-5WJC6CSKM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(auth);

export {auth, db, provider}