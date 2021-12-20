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
    },
    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, {merge:true});
    },
    getContactList: async (userId) => {
        let list = [];
        let results = await db.collection('users').get();
        results.forEach(result => {
            let data = result.data();
            if(result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                });
            }
        });

        return list;
    }   
}