import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZ8u3SKhiEKs13O-uuhI6dlHdicqmZx7Y',
  authDomain: 'lets-raid.firebaseapp.com',
  databaseURL: 'https://lets-raid.firebaseio.com',
  projectId: 'lets-raid',
  storageBucket: 'lets-raid.appspot.com',
  messagingSenderId: '864275024222',
  appId: '1:864275024222:web:f5da0c780b2630238967cf',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
