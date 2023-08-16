import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwcb0lt7XxCpryssmLsIkaeJ2XGg_foB8",
  authDomain: "sharegraphs-eb9d7.firebaseapp.com",
  projectId: "sharegraphs-eb9d7",
  storageBucket: "sharegraphs-eb9d7.appspot.com",
  messagingSenderId: "220118019273",
  appId: "1:220118019273:web:4f4d0a395312abb55bf118",
  measurementId: "G-99J00VTHYV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
