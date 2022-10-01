import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCAnhAVCZlddukuc7tysAEGylYPRZoLGpQ",
    authDomain: "new-project-38a92.firebaseapp.com",
    projectId: "new-project-38a92",
    storageBucket: "new-project-38a92.appspot.com",
    messagingSenderId: "502746905232",
    appId: "1:502746905232:web:420ae9501af5f13c35b615"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)