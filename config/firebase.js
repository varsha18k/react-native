// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {initializeAuth} from '@firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7abL8Y72u4zp6FpRigegKQGnXAkIac8I",
  authDomain: "awesome-d1f0c.firebaseapp.com",
  projectId: "awesome-d1f0c",
  storageBucket: "awesome-d1f0c.appspot.com",
  messagingSenderId: "491712554144",
  appId: "1:491712554144:web:3ed9f9880712238b8995c5",
  measurementId: "G-DP8V7RV2G7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 export const auth = initializeAuth(app);
 


export default app;
