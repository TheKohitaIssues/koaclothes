
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "koaclothes-6fe0e.firebaseapp.com",
  projectId: "koaclothes-6fe0e",
  storageBucket: "koaclothes-6fe0e.appspot.com",
  messagingSenderId: "271855464484",
  appId: "1:271855464484:web:58dc90e419d82c8d62e8b1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)