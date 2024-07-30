
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_bYRrZeNkkPhLjtd9t4lROsbZWBm7r4I",
  authDomain: "tienda-ficus.firebaseapp.com",
  projectId: "tienda-ficus",
  storageBucket: "tienda-ficus.appspot.com",
  messagingSenderId: "547663364078",
  appId: "1:547663364078:web:19248dfb17dbd662f0d8ff"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;