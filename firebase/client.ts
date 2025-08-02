import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUqycpAuiNruKsFAB5VEEEk0PWU6n9hnk",
  authDomain: "interviewprep-ba527.firebaseapp.com",
  projectId: "interviewprep-ba527",
  storageBucket: "interviewprep-ba527.firebasestorage.app",
  messagingSenderId: "352739160365",
  appId: "1:352739160365:web:1a3d9d0a8f7237643ba3a4",
  measurementId: "G-0HMNMSPT0C"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);