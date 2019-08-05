import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDYFNqZtu2bgElCftybTQnThySscZYr_xA",
    authDomain: "crwn-db-abc95.firebaseapp.com",
    databaseURL: "https://crwn-db-abc95.firebaseio.com",
    projectId: "crwn-db-abc95",
    storageBucket: "",
    messagingSenderId: "242429009995",
    appId: "1:242429009995:web:fc808fb2430f65d9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;