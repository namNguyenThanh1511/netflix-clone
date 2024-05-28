// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXB5FZ8xFLY0efULdrdOhY-LKRiOzpG3E",
  authDomain: "netflix-clone1-59e95.firebaseapp.com",
  projectId: "netflix-clone1-59e95",
  storageBucket: "netflix-clone1-59e95.appspot.com",
  messagingSenderId: "325300113023",
  appId: "1:325300113023:web:8cc78d5657841a2fb8f94a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { storage, googleProvider, auth };
