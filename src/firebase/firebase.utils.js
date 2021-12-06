import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDrNQ44HCiYLaJ9GJka8NVHNdWwhH_ZtEU',
  authDomain: 'art-db-d07b6.firebaseapp.com',
  projectId: 'art-db-d07b6',
  storageBucket: 'art-db-d07b6.appspot.com',
  messagingSenderId: '707677628023',
  appId: '1:707677628023:web:db76421267bc4789158872',
  measurementId: 'G-5ENXYCNWHQ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
