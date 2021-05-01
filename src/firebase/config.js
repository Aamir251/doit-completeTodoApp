import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC9H40pLI-3o4IBrz02o_vUl1SRpDE6lSc",
    authDomain: "to-do-project-82ab4.firebaseapp.com",
    projectId: "to-do-project-82ab4",
    storageBucket: "to-do-project-82ab4.appspot.com",
    messagingSenderId: "363388734098",
    appId: "1:363388734098:web:ee49819f584201db39b44b",
    measurementId: "G-7L3Z86P9QF"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();

export { projectFirestore, auth };