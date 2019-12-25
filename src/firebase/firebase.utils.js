import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJqIlZxy5yruVyJPz-Orqh6sgnbnYwNpA",
    authDomain: "e-comm-db-8de93.firebaseapp.com",
    databaseURL: "https://e-comm-db-8de93.firebaseio.com",
    projectId: "e-comm-db-8de93",
    storageBucket: "e-comm-db-8de93.appspot.com",
    messagingSenderId: "57209589034",
    appId: "1:57209589034:web:a995436b0fbbb7b2aa2253"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;