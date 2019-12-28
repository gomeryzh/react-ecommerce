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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating use', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;