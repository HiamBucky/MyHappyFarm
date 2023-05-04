// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAEv42mSAkn3-gBSTwRfbKYRV-HyARc0sM",
  authDomain: "okea-a0fe0.firebaseapp.com",
  databaseURL: "https://okea-a0fe0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "okea-a0fe0",
  storageBucket: "okea-a0fe0.appspot.com",
  messagingSenderId: "857435971697",
  appId: "1:857435971697:web:053d961f1c0cc4bf67fbd0",
  measurementId: "G-BPHSSYW851"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBA62RsIsWREVv4qiA-YOc__cgJHPRggTM",
//   authDomain: "my-happy-farm-test.firebaseapp.com",
//   databaseURL: "https://my-happy-farm-test-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "my-happy-farm-test",
//   storageBucket: "my-happy-farm-test.appspot.com",
//   messagingSenderId: "558271962373",
//   appId: "1:558271962373:web:194a385ddfe444fd1eab6c"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBCtrZRpRzx2xLs1J3Muqg5r-zMDjWTttw",
//   authDomain: "okea-test.firebaseapp.com",
//   projectId: "okea-test",
//   storageBucket: "okea-test.appspot.com",
//   messagingSenderId: "996555979136",
//   appId: "1:996555979136:web:e878797f9a16ecc2c1a965"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, db, provider};