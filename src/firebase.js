import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCZ1L8cGNWu9XeYryvDKKzTpGZJTWp03z0",
  authDomain: "chatvia-738aa.firebaseapp.com",
  projectId: "chatvia-738aa",
  storageBucket: "chatvia-738aa.appspot.com",
  messagingSenderId: "936416046929",
  appId: "1:936416046929:web:676ee9e2005703ba806d70",
  measurementId: "G-E8BL2Q4N99"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);