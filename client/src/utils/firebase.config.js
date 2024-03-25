import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCECRj6S8Lw2x5WQXTYxh1KS3Ra_2LVcvA",
  authDomain: "netflix-538fc.firebaseapp.com",
  projectId: "netflix-538fc",
  storageBucket: "netflix-538fc.appspot.com",
  messagingSenderId: "869825397181",
  appId: "1:869825397181:web:f38fc958c811b9680e92d4",
  measurementId: "G-DPV57XQTTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseauth = getAuth(app)

