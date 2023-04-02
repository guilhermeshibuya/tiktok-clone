import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCvnj1dm3M0RDxoB-myxxDT2vOdd3kpDw4",
  authDomain: "tiktok-clone-32b57.firebaseapp.com",
  projectId: "tiktok-clone-32b57",
  storageBucket: "tiktok-clone-32b57.appspot.com",
  messagingSenderId: "556573639999",
  appId: "1:556573639999:web:bb564f6b07b92e9e0d3f8a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;