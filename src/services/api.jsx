import firebase from "firebase/app";
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore'

import firebaseConfig from "../firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const api = {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        const result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    }
}