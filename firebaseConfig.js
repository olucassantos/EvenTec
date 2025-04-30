import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7dBxIuGGfCTdmESulpXHW8OIp3NET-_o",
    authDomain: "eventec-67a8f.firebaseapp.com",
    projectId: "eventec-67a8f",
    storageBucket: "eventec-67a8f.firebasestorage.app",
    messagingSenderId: "1021190867410",
    appId: "1:1021190867410:web:a931255f3443becb6c600b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };