// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBA62RsIsWREVv4qiA-YOc__cgJHPRggTM",
    authDomain: "my-happy-farm-test.firebaseapp.com",
    projectId: "my-happy-farm-test",
    storageBucket: "my-happy-farm-test.appspot.com",
    messagingSenderId: "558271962373",
    appId: "1:558271962373:web:194a385ddfe444fd1eab6c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, db, provider};