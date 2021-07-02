import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB88y3u5L8JVqQRy8FZ68VCGLIegROs8TU",
    authDomain: "crwn-db-b6edf.firebaseapp.com",
    projectId: "crwn-db-b6edf",
    storageBucket: "crwn-db-b6edf.appspot.com",
    messagingSenderId: "99332388100",
    appId: "1:99332388100:web:fd561d1fd6e7736f8bcc51",
    measurementId: "G-8P5HCBV8SZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;