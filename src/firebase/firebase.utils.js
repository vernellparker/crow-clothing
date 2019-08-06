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

export  const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
}
    return userRef;
};

export default firebase;