import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyCJXMRefscsGLkcflZfoEuICcmydzHstsw",
    authDomain: "blaz-clothing-db.firebaseapp.com",
    projectId: "blaz-clothing-db",
    storageBucket: "blaz-clothing-db.appspot.com",
    messagingSenderId: "848366691638",
    appId: "1:848366691638:web:3224b31db883d7dfa43f97",
    measurementId: "G-S8KYXGC0K3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
