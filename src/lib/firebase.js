import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyAwoY0_jIKlbUMtwufcAwQrLodQywMsRy8",
    authDomain: "instagram-siya.firebaseapp.com",
    projectId: "instagram-siya",
    storageBucket: "instagram-siya.firebasestorage.app",
    messagingSenderId: "882227270436",
    appId: "1:882227270436:web:c9b31c8b647beb909319b1"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };