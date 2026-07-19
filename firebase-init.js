import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwmejJbyuR0c4oVTkJnpF1giHZR27w1bE",
  authDomain: "cube-fill.firebaseapp.com",
  projectId: "cube-fill",
  storageBucket: "cube-fill.firebasestorage.app",
  messagingSenderId: "602038895709",
  appId: "1:602038895709:web:15527091a0ab3ed7e5f9b4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
